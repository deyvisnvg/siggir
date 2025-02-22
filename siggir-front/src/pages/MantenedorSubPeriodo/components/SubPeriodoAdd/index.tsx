import { ChangeEvent, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { toast } from "keep-react";
import moment from "moment";
import { ButtonComponent } from "@/components";
import { GestionRiesgoController, PeriodoController, SubPeriodoController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { SUBPERIODOS_DETALLE } from "@/core/SubPeriodoData";
import CatalogoController from "@/controllers/Catalogo";
import { CATALOGO } from "@/core/Catalogo";
import { useEffectOnce } from "@/hooks/useEffectOnce";

interface Props {
    getSubPeriodoAllByIdGestion: (id: number) => void;
    idGestion: string;
    setOpenModal: (open: boolean) => void;
}

export default function SubPeriodoAdd({ getSubPeriodoAllByIdGestion, idGestion, setOpenModal }: Props) {
    const { catalogos, findCatalogoByCodigo } = CatalogoController();
    const { periodos, readPeriodo } = PeriodoController();
    const { gestionRiesgo, findGestionRiesgoById } = GestionRiesgoController();
    const { subperiodos, readSubPeriodoAllByParams, createSubPeriodo } = SubPeriodoController();
    const [optionSubPeriodo, setOptionSubPeriodo] = useState<string[]>([]);
    const [descripcionTemp, setDescripcionTemp] = useState<string>("");

    const initialize = () => {
        findCatalogoByCodigo([CATALOGO.CATALOGO_FRECUENCIA_CONTROL]);
        readPeriodo();
        findGestionRiesgoById(Number(idGestion));
    }

    useEffectOnce(initialize);

    useEffect(() => {
        console.log("subperiodos", subperiodos)
        console.log("descripcionTemp", descripcionTemp)

        if (subperiodos && subperiodos?.length > 0) {
            const filterSubPeriodosAll = SUBPERIODOS_DETALLE[descripcionTemp];
            const optionSubPeriodo = filterSubPeriodosAll.filter(subperiodo => {
                return !subperiodos.some(item => item.subperiodoDetalle.toLowerCase() == subperiodo.toLowerCase())
            })

            if (optionSubPeriodo.length === 0) {
                toast.warning(`Has completado el registro para la frecuencia ${descripcionTemp}`);
            }

            setOptionSubPeriodo(optionSubPeriodo);
        }
        else {
            setOptionSubPeriodo(SUBPERIODOS_DETALLE[descripcionTemp]);
        }

    }, [subperiodos])

    const formik = useFormik({
        initialValues: {
            subperiodoDetalle: '',
            subperiodoFecInicio: '',
            subperiodoFecFin: '',
            frecuenciaId: '',
            periodoId: '',
            gestionId: gestionRiesgo?.gestionNombre || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            subperiodoDetalle: Yup.string()
                .required('El subPeriodo es obligatorio.'),
            subperiodoFecInicio: Yup.date()
                .required('La fecha inicio es obligatorio.'),
            subperiodoFecFin: Yup.date()
                .required('La fecha fin es obligatorio.')
                .min(
                    Yup.ref('subperiodoFecInicio'), 'Fecha fin no puede ser menor que Fecha inicio.'
                ),
            frecuenciaId: Yup.number()
                .required('La frecuencia es obligatorio.'),
            periodoId: Yup.number()
                .required('El periodo es obligatorio.'),
            gestionId: Yup.string()
                .required('La sistema es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                frecuenciaId: Number(values.frecuenciaId),
                periodoId: Number(values.periodoId),
                gestionId: Number(idGestion),
                subperiodoFecInicio: moment(values.subperiodoFecInicio, 'YYYY-MM-DD').toDate(),
                subperiodoFecFin: moment(values.subperiodoFecFin, 'YYYY-MM-DD').toDate(),
                subperiodoEstado: 'activo'
            }
            await createSubPeriodo(body);

            resetForm();
            setOpenModal(false);
            getSubPeriodoAllByIdGestion(Number(idGestion));
        },
    });

    const handleFrecuenciaChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        const { value: idFrecuencia, options } = e.target;
        const descripcionCorta = options[e.target.selectedIndex].getAttribute('data-descripcion') || "";
        setDescripcionTemp(descripcionCorta);

        const periodoId = formik.values.periodoId;

        if (!periodoId) {
            toast.warning("Debe seleccionar antes el Año");
            return;
        }
        console.log(idGestion, periodoId, idFrecuencia, descripcionCorta)

        formik.setFieldValue('frecuenciaId', idFrecuencia);
        await readSubPeriodoAllByParams({ gestionId: idGestion, periodoId, frecuenciaId: idFrecuencia });
    };

    const handlePeriodoChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        formik.setFieldValue('subperiodoDetalle', "");
        formik.setFieldValue('frecuenciaId', "");
        formik.setFieldValue('periodoId', value);
        setDescripcionTemp("");
        setOptionSubPeriodo([]);
    }

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="gestionId" className="text-sm font-medium">Sistema</label>
                    <input type="text"
                        id="gestionId"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="sistema"
                        {...formik.getFieldProps('gestionId')}
                        readOnly
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="gestionId"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="periodoId" className="text-sm font-medium">Año</label>
                    <select
                        id="periodoId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('periodoId')}
                        onChange={handlePeriodoChange}
                    >
                        <option value="">Seleccione</option>
                        {
                            periodos && periodos.map((periodo) => (
                                <option key={periodo.periodoId} value={periodo.periodoId}>
                                    {periodo.periodoAnio}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="periodoId"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="frecuenciaId" className="text-sm font-medium">Frecuencia</label>
                    <select
                        id="frecuenciaId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('frecuenciaId')}
                        onChange={(e) => handleFrecuenciaChange(e)}
                    >
                        <option value="">Seleccione</option>
                        {
                            catalogos && catalogos.map((catalogo) => (
                                <option
                                    key={catalogo.catalogoId}
                                    value={catalogo.catalogoId}
                                    data-descripcion={catalogo.descripcionCorta}
                                >
                                    {catalogo.descripcion}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="frecuenciaId"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoDetalle" className="text-sm font-medium">SubPeriodo</label>
                    <select
                        id="subperiodoDetalle"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('subperiodoDetalle')}
                    >
                        <option value="">Seleccione</option>
                        {
                            optionSubPeriodo && optionSubPeriodo.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoDetalle"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoFecInicio" className="text-sm font-medium">Fecha Inicio</label>
                    <input type="date"
                        id="subperiodoFecInicio"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Fecha inicio"
                        {...formik.getFieldProps('subperiodoFecInicio')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoFecInicio"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="subperiodoFecFin" className="text-sm font-medium">Fecha Fin</label>
                    <input type="date"
                        id="subperiodoFecFin"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Fecha fin"
                        {...formik.getFieldProps('subperiodoFecFin')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="subperiodoFecFin"
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