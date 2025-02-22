import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { CargoController, UsuarioController, PersonaController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { toast } from "keep-react";
import { v4 as uuidv4 } from 'uuid';
import { isBefore } from 'date-fns';
/* import { formatInTimeZone, toZonedTime } from "date-fns-tz"; */

interface Props {
    getUsuario: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function UsuarioAdd({ getUsuario, setOpenModal }: Props) {
    const { cargos, readCargo } = CargoController();
    const { createUsuario } = UsuarioController();
    const { findPersonaByDni } = PersonaController();
    const today = new Date

    useEffect(() => {
        readCargo();
    }, [])

    const formik = useFormik({
        initialValues: {
            dni: '',
            nombres: '',
            apellidos: '',
            email: '',
            fechaNacimiento: '',
            cargoId: '',
            user: '',
            password: '',
            passwordRepeat: '',
        },
        validationSchema: Yup.object({
            dni: Yup.string()
                .min(8, 'Ingrese mínimo 8 digitos.')
                .max(8, 'Ingrese máximo 8 digitos.')
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
                user,
                password,
                passwordRepeat
            } = values;

            if (await findPersonaByDni(dni)) {
                toast.warning("El DNI ingresado ya está registrado");
                return;
            }

            if (password != passwordRepeat) {
                toast.warning("Debe de validar la contraseña correctamente.");
                return;
            }
            const userId = uuidv4();
            const empleadoId = uuidv4();

            const bodyUser = {
                userId,
                user,
                password,
                estado: 'activo'
            }
            const bodyPersona = {
                dni,
                nombres,
                apellidos,
                email,
                fechaNacimiento: new Date(fechaNacimiento),
                userId,
                empleadoId
            }
            const bodyEmpleado = {
                empleadoId,
                cargoId: Number(cargoId)
            }
            await createUsuario(bodyUser, bodyPersona, bodyEmpleado);

            resetForm();
            setOpenModal(false);
            getUsuario();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div>
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Persona</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-3.5">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="dni" className="text-sm font-medium">DNI</label>
                            <input type="text"
                                id="dni"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese dni"
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
                    <div className="flex flex-col gap-y-1.5">
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
                                <option value="">Seleccione</option>
                                {
                                    cargos && cargos.map((cargo) => (
                                        <option key={cargo.cargoId} value={cargo.cargoId}>
                                            {cargo.cargoNombre}
                                        </option>
                                    ))}
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
                <div className="grid grid-cols-1 gap-x-8 gap-y-1.5 pt-3.5">
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
                    text="Registrar"
                    color="primary"
                />
            </div>
        </form>
    )
}