import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { CargoController, UsuarioController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { toast } from "keep-react";
import { isBefore } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

interface Props {
    getUsuario: () => void;
    idPersona: number;
    setOpenModal: (open: boolean) => void;
}

export default function UsuarioEdit({ getUsuario, idPersona, setOpenModal }: Props) {
    const { cargos, readCargo } = CargoController();
    const { persona, findUsuarioById, updateUsuario } = UsuarioController();
    const today = new Date

    useEffect(() => {
        readCargo();
        findUsuarioById(idPersona);
    }, [])

    const formik = useFormik({
        initialValues: {
            dni: persona?.dni || '',
            nombres: persona?.nombres || '',
            apellidos: persona?.apellidos || '',
            email: persona?.email || '',
            fechaNacimiento: persona?.fechaNacimiento ?
                formatInTimeZone(new Date(persona.fechaNacimiento), 'America/Lima', 'yyyy-MM-dd') : '',
            cargoId: persona?.empleado?.cargoId || '',
            estado: persona?.user?.estado || '',
            user: persona?.user?.user || '',
            password: persona?.user?.password || '',
            passwordRepeat: persona?.user?.password || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            dni: Yup.string()
                .min(9, 'Ingrese mínimo 9 digitos.')
                .max(9, 'Ingrese máximo 9 digitos.')
                .required('El dni es obligatorio.'),
            nombres: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .max(30, 'Excedió el límite de carácteres.')
                .required('El nombre es obligatorio.'),
            apellidos: Yup.string()
                .max(3, 'Ingrese al menos 3 caracteres.')
                .max(35, 'Excedió el límite de carácteres.')
                .required('El apellido es obligatorio.'),
            email: Yup.string()
                .email('Ingresa un e-mail válido.')
                .required('El email es obligatorio.'),
            fechaNacimiento: Yup.date()
                .required('La fecha de nacimiento es obligatorio.')
                .test(
                    'es-pasada',
                    'La fecha de nacimiento debe ser una fecha pasada.',
                    value => value && isBefore(new Date(value), today)
                ),
            cargoId: Yup.number()
                .required('El cargo es obligatorio.'),
            estado: Yup.string()
                .required('El estado es obligatorio.'),
            user: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El usuario es obligatorio.'),
            password: Yup.string()
                .min(8, 'Ingrese al menos 8 caracteres.')
                .required('La contraseña es obligatorio.'),
            passwordRepeat: Yup.string()
                .min(8, 'Ingrese al menos 8 caracteres.')
                .required('Confirma contraseña es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const {
                dni,
                nombres,
                apellidos,
                email,
                fechaNacimiento,
                cargoId,
                estado,
                user,
                password,
                passwordRepeat
            } = values;

            if (password != passwordRepeat) {
                toast.warning("Debe de validar la contraseña correctamente.");
                return;
            }

            const bodyUser = {
                userId: persona?.userId!,
                user,
                password,
                estado
            }
            const bodyPersona = {
                dni,
                nombres,
                apellidos,
                email,
                fechaNacimiento: new Date(fechaNacimiento),
                userId: persona?.userId!,
                empleadoId: persona?.empleadoId!
            }
            const bodyEmpleado = {
                empleadoId: persona?.empleadoId!,
                cargoId: Number(cargoId)
            }
            await updateUsuario(idPersona, bodyUser, bodyPersona, bodyEmpleado);

            resetForm();
            setOpenModal(false);
            await getUsuario();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div>
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Persona</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-3.5">
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="dni" className="text-sm font-medium">DNI</label>
                            <input type="text"
                                id="dni"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese dni"
                                disabled
                                {...formik.getFieldProps('dni')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="dni"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="nombres" className="text-sm font-medium">Nombres</label>
                            <input type="text"
                                id="nombres"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese nombres"
                                {...formik.getFieldProps('nombres')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="nombres"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="apellidos" className="text-sm font-medium">Apellidos</label>
                            <input type="text"
                                id="apellidos"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese apellidos"
                                {...formik.getFieldProps('apellidos')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="apellidos"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                            <input type="email"
                                id="email"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese correo electrónico"
                                {...formik.getFieldProps('email')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="email"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="fechaNacimiento" className="text-sm font-medium">Fecha Nacimiento</label><span></span>
                            <input type="date"
                                id="fechaNacimiento"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                {...formik.getFieldProps('fechaNacimiento')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="fechaNacimiento"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="cargoId" className="text-sm font-medium">Cargo</label>
                            <select
                                id="cargoId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('cargoId')}
                            >
                                {
                                    cargos && cargos.map((cargo) => (
                                        <option key={cargo.cargoId} value={cargo.cargoId}>
                                            {cargo.cargoNombre}
                                        </option>
                                    ))
                                }
                            </select>
                            <ValidatorSchema
                                formik={formik}
                                element="cargoId"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Usuario</span>
                <div className="grid grid-cols-1 gap-x-8 gap-y-2 pt-3.5">
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="estado" className="text-sm font-medium">Estado</label>
                        <select
                            id="estado"
                            className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                            {...formik.getFieldProps('estado')}
                        >
                            <option key="activo" value="activo">activo</option>
                            <option key="inactivo" value="inactivo">inactivo</option>
                        </select>
                        <ValidatorSchema
                            formik={formik}
                            element="estado"
                        />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="user" className="text-sm font-medium">Usuario</label>
                        <input type="text"
                            id="user"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="Ingrese usuario"
                            {...formik.getFieldProps('user')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="user"
                        />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
                        <input type="password"
                            id="password"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="Ingrese contraseña"
                            {...formik.getFieldProps('password')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="password"
                        />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="passwordRepeat" className="text-sm font-medium">Confirmar Contraseña</label>
                        <input type="password"
                            id="passwordRepeat"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="Confirme contraseña"
                            {...formik.getFieldProps('passwordRepeat')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="passwordRepeat"
                        />
                    </div>
                </div>
            </div>
            <div className="text-center pt-5">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Editar"
                    color="primary"
                />
            </div>
        </form>
    )
}