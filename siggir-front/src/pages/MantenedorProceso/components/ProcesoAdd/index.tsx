import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import ValidatorSchema from "@/validators";
import { MacroprocesoController, ProcesoController } from "@/controllers";

interface Props {
    getProceso: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function ProcesoAdd({ getProceso, setOpenModal }: Props) {
    const { macroprocesos, readMacroproceso, } = MacroprocesoController();
    const { createProceso } = ProcesoController();

    useEffect(() => {
        readMacroproceso();
    }, [])

    const formik = useFormik({
        initialValues: {
            procesoCodigo: '',
            procesoNombre: '',
            macroprocesoId: '',
        },
        validationSchema: Yup.object({
            procesoCodigo: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El código es obligatorio.'),
            procesoNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El proceso es obligatorio.'),
            macroprocesoId: Yup.number()
                .required('El macroproceso es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                macroprocesoId: Number(values.macroprocesoId)
            }
            await createProceso(body),
            getProceso()
            
            resetForm();
            setOpenModal(false);
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="procesoCodigo" className="text-sm font-medium">Código proceso</label>
                    <input type="text"
                        id="procesoCodigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código proceso"
                        {...formik.getFieldProps('procesoCodigo')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="procesoCodigo"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="procesoNombre" className="text-sm font-medium">Nombre proceso</label>
                    <input type="text"
                        id="procesoNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre proceso"
                        {...formik.getFieldProps('procesoNombre')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="procesoNombre"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="macroprocesoId" className="text-sm font-medium">Macroproceso perteneciente</label>
                    <select
                        id="macroprocesoId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('macroprocesoId')} >
                        <option value="">Seleccione</option>
                        {
                            macroprocesos && macroprocesos.map((macropro) => (
                                <option key={macropro.macroprocesoId} value={macropro.macroprocesoId}>
                                    {macropro.macroproNombre}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="macroprocesoId"
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