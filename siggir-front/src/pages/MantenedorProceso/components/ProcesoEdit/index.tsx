import { useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ButtonComponent } from "@/components";
import ValidatorSchema from "@/validators";
import { MacroprocesoController, ProcesoController } from "@/controllers";

interface Props {
    getProceso: () => void;
    idProceso: number;
    setOpenModal: (open: boolean) => void;
}

export default function ProcesoEdit({ getProceso, idProceso, setOpenModal }: Props) {
    const { macroprocesos, readMacroproceso, } = MacroprocesoController();

    const {
        proceso,
        findProcesoById,
        updateProceso,
    } = ProcesoController();

    useEffect(() => {
        findProcesoById(idProceso);
        readMacroproceso();
    }, [])

    const formik = useFormik({
        initialValues: {
            procesoCodigo: proceso?.procesoCodigo || '',
            procesoNombre: proceso?.procesoNombre || '',
            macroprocesoId: proceso?.macroproceso?.macroprocesoId,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            procesoCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
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
            await updateProceso(idProceso, body);

            resetForm();
            setOpenModal(false);
            await getProceso();
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
                        {...formik.getFieldProps('macroprocesoId')}
                    >
                        {
                            macroprocesos && macroprocesos.map((macroproceso) => (
                                <option key={macroproceso.macroprocesoId} value={macroproceso.macroprocesoId}>
                                    {macroproceso.macroproNombre}
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