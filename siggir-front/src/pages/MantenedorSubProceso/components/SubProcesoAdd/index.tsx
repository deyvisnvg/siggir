import { useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ButtonComponent } from "@/components";
import ValidatorSchema from "@/validators";
import { CargoController, ProcesoController, SubprocesoController } from "@/controllers";

interface Props {
    getSubproceso: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function SubProcesoAdd({ getSubproceso, setOpenModal }: Props) {
    const { procesos, readProceso, } = ProcesoController();
    const { cargos, readCargo, } = CargoController();
    const { createSubproceso } = SubprocesoController();

    useEffect(() => {
        readProceso();
        readCargo();
    }, [])

    const formik = useFormik({
        initialValues: {
            subproCodigo: '',
            subproNombre: '',
            procesoId: '',
            cargoId: '',
        },
        validationSchema: Yup.object({
            subproCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código del proceso es obligatorio.'),
            subproNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El nombre del proceso es obligatorio.'),
            procesoId: Yup.number()
                .required('El proceso es obligatorio.'),
            cargoId: Yup.number()
                .required('El cargo es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                procesoId: Number(values.procesoId),
                cargoId: Number(values.cargoId)
            }

            resetForm();
            setOpenModal(false);

            await createSubproceso(body);
            getSubproceso();
        },
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subproCodigo" className="text-sm font-medium">Código subproceso</label>
                    <input type="text"
                        id="subproCodigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código subproceso"
                        {...formik.getFieldProps('subproCodigo')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subproCodigo"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subproNombre" className="text-sm font-medium">Nombre subproceso</label>
                    <input type="text"
                        id="subproNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre subproceso"
                        {...formik.getFieldProps('subproNombre')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subproNombre"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="procesoId" className="text-sm font-medium">Proceso</label>
                    <select
                        id="procesoId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('procesoId')} >
                        <option value="">Seleccione</option>
                        {
                            procesos && procesos.map((proceso) => (
                                <option key={proceso.procesoId} value={proceso.procesoId}>
                                    {proceso.procesoNombre}
                                </option>
                            ))}
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="procesoId"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="cargoId" className="text-sm font-medium">Cargo responsable</label>
                    <select
                        id="cargoId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('cargoId')} >
                        <option value="">Seleccione</option>
                        {
                            cargos && cargos.map((cargo) => (
                                <option key={cargo.cargoId} value={cargo.cargoId}>
                                    {cargo.cargoNombre}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="cargoId"
                    />
                </div>
                {/* <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-2"></div> */}
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