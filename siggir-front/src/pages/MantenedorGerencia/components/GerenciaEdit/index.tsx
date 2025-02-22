import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { GerenciaController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    getGerencia: () => void;
    idGerencia: number;
    setOpenModal: (open: boolean) => void;
}

export default function GerenciaEdit({ getGerencia, idGerencia, setOpenModal }: Props) {
    const {
        gerencia,
        findGerenciaById,
        updateGerencia
    } = GerenciaController();

    useEffect(() => {
        findGerenciaById(idGerencia);
    }, [])

    const formik = useFormik({
        initialValues: {
            gerenciaNombre: gerencia?.gerenciaNombre || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            gerenciaNombre: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .required('La gerencia es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            await updateGerencia(idGerencia, values);

            resetForm();
            setOpenModal(false);
            getGerencia();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-0.5 pt-3.5">
                <label htmlFor="gerenciaNombre" className="text-sm font-medium">Nombre de gerencia</label>
                <input type="text"
                    id="gerenciaNombre"
                    className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                    placeholder="Ingrese gerencia"
                    {...formik.getFieldProps('gerenciaNombre')}
                />
                <ValidatorSchema
                    formik={formik}
                    element="gerenciaNombre"
                />
            </div>
            <div className="text-center pt-7">
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