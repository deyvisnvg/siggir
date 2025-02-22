import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { RiesgoController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    getRiesgo: () => void;
    idRiesgo: number;
    setOpenModal: (open: boolean) => void;
}

export default function RiesgoEdit({ getRiesgo, idRiesgo, setOpenModal }: Props) {
    const { riesgo, findAllRiesgoByIdGestion } = RiesgoController();

    useEffect(() => {
        findAllRiesgoByIdGestion(idRiesgo);
    }, [])

    const formik = useFormik({
        initialValues: {
            riesgoDescripcion: riesgo?.riesgoDescripcion || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            riesgoDescripcion: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .required('La riesgo es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            /* await updateRiesgo(idRiesgo, values); */

            resetForm();
            setOpenModal(false);
            getRiesgo();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-0.5 pt-3.5">
                <label htmlFor="riesgoDescripcion" className="text-sm font-medium">Nombre de riesgo</label>
                <input type="text"
                    id="riesgoDescripcion"
                    className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                    placeholder="Ingrese riesgo"
                    {...formik.getFieldProps('riesgoDescripcion')}
                />
                <ValidatorSchema
                    formik={formik}
                    element="riesgoDescripcion"
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