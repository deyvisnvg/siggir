import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { GerenciaController, AreaController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    getArea: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function AreaAdd({ getArea, setOpenModal }: Props) {
    const { gerencias, readGerencia, } = GerenciaController();
    const { createArea } = AreaController();

    useEffect(() => {
        readGerencia();
    }, [])

    const formik = useFormik({
        initialValues: {
            areaNombre: '',
            gerenciaId: '',
        },
        validationSchema: Yup.object({
            areaNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El area es obligatorio.'),
            gerenciaId: Yup.number()
                .required('La gerencia es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                gerenciaId: Number(values.gerenciaId)
            }
            await createArea(body);

            resetForm();
            setOpenModal(false);
            getArea();
        },
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="areaNombre" className="text-sm font-medium">Nombre del area</label>
                    <input type="text"
                        id="areaNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Area"
                        {...formik.getFieldProps('areaNombre')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="areaNombre"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="gerenciaId" className="text-sm font-medium">Gerencia perteneciente</label>
                    <select
                        id="gerenciaId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('gerenciaId')} >
                        <option value="">Seleccione</option>
                        {
                            gerencias && gerencias.map((gerencia) => (
                                <option key={gerencia.gerenciaId} value={gerencia.gerenciaId}>
                                    {gerencia.gerenciaNombre}
                                </option>
                            ))}
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="gerenciaId"
                    />
                </div>
            </div>
            <div className="text-center pt-7">
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