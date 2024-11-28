import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { GrupoInteresController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    setOpenModal: (open: boolean) => void;
    getGrupoInteres: () => void;
}

export default function GrupoInteresAdd({ getGrupoInteres, setOpenModal }: Props) {
    const { createGrupoInteres } = GrupoInteresController();

    const formik = useFormik({
        initialValues: {
            grupoInteresNombre: '',
        },
        validationSchema: Yup.object({
            grupoInteresNombre: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .required('El grupo interés es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            await createGrupoInteres(values);

            resetForm();
            setOpenModal(false);
            await getGrupoInteres();
        },
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-0.5 pt-3.5">
                <label htmlFor="grupoInteresNombre" className="text-sm font-medium">Nombre Grupo de interés</label>
                <input type="text"
                    id="grupoInteresNombre"
                    className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                    placeholder="Ingrese grupoInteres"
                    {...formik.getFieldProps('grupoInteresNombre')}
                />
                <ValidatorSchema
                    formik={formik}
                    element="grupoInteresNombre"
                />
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