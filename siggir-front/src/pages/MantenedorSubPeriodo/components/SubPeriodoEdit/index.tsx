import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { ButtonComponent } from "@/components";
import { SubPeriodoController } from "@/controllers";
import ValidatorSchema from '@/validators';

interface Props {
    getSubPeriodoAllById: (id:number) => void;
    idGestion: string;
    idSubperiodo: number;
    setOpenModal: (open: boolean) => void;
}

export default function SubPeriodoEdit({ getSubPeriodoAllById, idGestion, idSubperiodo, setOpenModal }: Props) {
    /*     const {
            gerencias,
            readGerencia,
        } = GerenciaController(); */

    /* const {
        subperiodo,
        findSubPeriodoById,
        updateSubPeriodo,
    } = SubPeriodoController(); */

    /* useEffect(() => {
        findSubPeriodoById(idSubperiodo);
    }, []) */

    const formik = useFormik({
        initialValues: {
            subperiodoFrecuencia: '',
            subperiodoDetalle: '',
            subperiodoFecInicio: '',
            subperiodoFecFin: '',
            periodoId: '',
            /* gestionId: gestionRiesgo?.gestionNombre || '', */
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            subperiodoFrecuencia: Yup.string()
                .min(3, 'Ingrese al menos 4 caracteres.')
                .required('El año es obligatorio.'),
            subperiodoNombre: Yup.string()
                .min(3, 'Ingrese al menos 4 caracteres.')
                .required('El año es obligatorio.'),
            subperiodoFechaInicio: Yup.string()
                .min(3, 'Ingrese al menos 4 caracteres.')
                .required('El año es obligatorio.'),
            subperiodoFechaFin: Yup.string()
                .min(3, 'Ingrese al menos 4 caracteres.')
                .required('El año es obligatorio.'),
            periodoId: Yup.number()
                .required('La gerencia es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                periodoId: Number(values.periodoId),
                subperiodoEstado: 'activo'
            }
            /* await updateSubPeriodo(idSubperiodo, body); */
            getSubPeriodoAllById(Number(idGestion));

            resetForm();
            setOpenModal(false);
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoFrecuencia" className="text-sm font-medium">Año</label>
                    <select
                        id="subperiodoFrecuencia"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('subperiodoFrecuencia')}
                    >
                        {/* {
                            gerencias && gerencias.map((gerencia) => (
                                <option key={gerencia.gerenciaId} value={gerencia.gerenciaId}>
                                    {gerencia.gerenciaNombre}
                                </option>
                            ))
                        } */}
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoFrecuencia"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoNombre" className="text-sm font-medium">Año</label>
                    <select
                        id="subperiodoNombre"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('subperiodoNombre')}
                    >
                        {/* {
                            gerencias && gerencias.map((gerencia) => (
                                <option key={gerencia.gerenciaId} value={gerencia.gerenciaId}>
                                    {gerencia.gerenciaNombre}
                                </option>
                            ))
                        } */}
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoNombre"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="periodoId" className="text-sm font-medium">Año</label>
                    <select
                        id="periodoId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('periodoId')}
                    >
                        {/* {
                            gerencias && gerencias.map((gerencia) => (
                                <option key={gerencia.gerenciaId} value={gerencia.gerenciaId}>
                                    {gerencia.gerenciaNombre}
                                </option>
                            ))
                        } */}
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="periodoId"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoFechaInicio" className="text-sm font-medium">Fecha Inicio</label>
                    <input type="text"
                        id="subperiodoFechaInicio"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Fecha inicio"
                        disabled
                        {...formik.getFieldProps('subperiodoFechaInicio')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoFechaInicio"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoFechaFin" className="text-sm font-medium">Fecha Fin</label>
                    <input type="email"
                        id="subperiodoFechaFin"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Fecha fin"
                        {...formik.getFieldProps('subperiodoFechaFin')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoFechaFin"
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