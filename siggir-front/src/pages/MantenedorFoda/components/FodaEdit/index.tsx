import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { FodaController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { FodaType } from "@/core/FodaData";

interface Props {
    getFoda: () => void;
    idFoda: number;
    setOpenModal: (open: boolean) => void;
}

export default function FodaEdit({ getFoda, idFoda, setOpenModal }: Props) {
    const {
        foda,
        findFodaById,
        updateFoda
    } = FodaController();

    useEffect(() => {
        findFodaById(idFoda);
    }, [])

    const formik = useFormik({
        initialValues: {
            fodaCodigo: foda?.fodaCodigo || '',
            fodaTipo: foda?.fodaTipo || '',
            fodaDescripcion: foda?.fodaDescripcion || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            fodaCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('La foda es obligatorio.'),
            fodaTipo: Yup.string()
                .required('La tipo es obligatorio.'),
            fodaDescripcion: Yup.string()
                .min(10, 'Ingrese al menos 10 caracteres.')
                .required('La descripcion es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            await updateFoda(idFoda, values);

            resetForm();
            setOpenModal(false);
            await getFoda();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="fodaCodigo" className="text-sm font-medium">Codigo de foda</label>
                    <input type="text"
                        id="fodaCodigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese foda"
                        {...formik.getFieldProps('fodaCodigo')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="fodaCodigo"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="fodaTipo" className="text-sm font-medium">Tipo Foda</label>
                    <select
                        id="fodaTipo"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('fodaTipo')}
                    >
                        {
                            FodaType && FodaType.map((tipoName) => (
                                <option key={tipoName} value={tipoName}>
                                    {tipoName}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="fodaTipo"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="fodaDescripcion" className="text-sm font-medium">Descripcion Foda</label>
                    <input type="text"
                        id="fodaDescripcion"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre descripcion"
                        {...formik.getFieldProps('fodaDescripcion')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="fodaDescripcion"
                    />
                </div>
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