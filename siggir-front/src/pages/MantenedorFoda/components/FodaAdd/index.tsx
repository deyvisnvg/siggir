import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { FodaController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { FodaType } from "@/core/FodaData";

interface Props {
    setOpenModal: (open: boolean) => void;
    getFoda: () => void;
}

export default function FodaAdd({ getFoda, setOpenModal }: Props) {
    const { createFoda } = FodaController();

    const formik = useFormik({
        initialValues: {
            fodaCodigo: '',
            fodaTipo: '',
            fodaDescripcion: '',
        },
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
            await createFoda(values);

            resetForm();
            setOpenModal(false);
            getFoda();
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
                        <option value="">Seleccione</option>
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
                    text="Registrar"
                    color="primary"
                />
            </div>
        </form>
    )
}