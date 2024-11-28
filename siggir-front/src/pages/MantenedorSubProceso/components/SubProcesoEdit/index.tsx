import { useEffect } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { ButtonComponent } from "@/components";
import { CargoController, ProcesoController, SubprocesoController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    getSubproceso: () => void;
    idSubproceso: number;
    setOpenModal: (open: boolean) => void;
}

export default function SubProcesoEdit({ getSubproceso, idSubproceso, setOpenModal }: Props) {
    const { procesos, readProceso, } = ProcesoController();
    const { cargos, readCargo, } = CargoController();

    const {
        subproceso,
        findSubprocesoById,
        updateSubproceso,
    } = SubprocesoController();

    useEffect(() => {
        findSubprocesoById(idSubproceso);
        readProceso();
        readCargo();
    }, [])

    const formik = useFormik({
        initialValues: {
            subproCodigo: subproceso?.subproCodigo || '',
            subproNombre: subproceso?.subproNombre || '',
            procesoId: subproceso?.proceso?.procesoId,
            cargoId: subproceso?.cargo?.cargoId,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            subproCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código es obligatorio.'),
            subproNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El nombre es obligatorio.'),
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
            await updateSubproceso(idSubproceso, body);
            getSubproceso();

            resetForm();
            setOpenModal(false);
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