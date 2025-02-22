import * as Yup from 'yup';
import { useFormik } from "formik";
import { ButtonComponent } from "@/components";
import { MacroprocesoController } from '@/controllers';
import ValidatorSchema from '@/validators';

interface Props {
    getMacroproceso: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function MacroprocesoAdd({ getMacroproceso, setOpenModal }: Props) {
    const { createMacroproceso } = MacroprocesoController();

    const formik = useFormik({
        initialValues: {
            macroproCodigo: '',
            macroproNombre: '',
        },
        validationSchema: Yup.object({
            macroproCodigo: Yup.string()
                .min(1, 'Ingrese al menos 1 caracteres.')
                .required('El código es obligatorio.'),
            macroproNombre: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .required('La nombre es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            await createMacroproceso(values);

            resetForm();
            setOpenModal(false);
            getMacroproceso();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="macroproCodigo" className="text-sm font-medium">Código macroproceso</label>
                    <input type="text"
                        id="macroproCodigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código macroproceso"
                        {...formik.getFieldProps('macroproCodigo')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="macroproCodigo"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="macroproNombre" className="text-sm font-medium">Nombre macroproceso</label>
                    <input type="text"
                        id="macroproNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre macroproceso"
                        {...formik.getFieldProps('macroproNombre')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="macroproNombre"
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