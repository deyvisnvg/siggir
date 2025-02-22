import { FormikErrors, useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { GerenciaController, ProcesoController, RiesgoController, SubPeriodoController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { Button, message, Steps, theme } from 'antd';
import { ChangeEvent, Children, useEffect, useState } from "react";
import { Textarea } from "keep-react";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import CatalogoController from "@/controllers/Catalogo";
import { CATALOGO } from "@/core/Catalogo";
import { TreeSelect } from 'antd';
import { RiesgoBody } from "@/types/Riesgo";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setOpenModal: (open: boolean) => void;
    getRiesgoByIdGestion: (id: number) => void;
}

interface TreeNode {
    value: string | number;
    title: string;
    selectable?: boolean;
    children?: TreeNode[];
}

export default function RiesgoAdd({ getRiesgoByIdGestion, setOpenModal }: Props) {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const [nivel, setNivel] = useState("");
    const [current, setCurrent] = useState(0);
    const [gestionId, setGestionId] = useState<number>(0);
    const [procesosTreeData, setProcesosTreeData] = useState<TreeNode[]>([]);

    const { createRiesgo } = RiesgoController();
    const { procesos, readProcesoAll } = ProcesoController();
    const { gerencias, readGerencia } = GerenciaController();
    const { catalogos, findCatalogoByCodigo } = CatalogoController();
    const { subperiodos, findSubPeriodoAllByIdGestion } = SubPeriodoController();

    const steps = [
        { title: 'Datos Generales del Riesgo', },
        { title: 'Evaluación de Riesgo Inherente', },
    ];
    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const next = async () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            setGestionId(Number(gestionId));
            findSubPeriodoAllByIdGestion(Number(gestionId));
            findCatalogoByCodigo([
                CATALOGO.CATALOGO_NIVEL_MATRIZ,
                CATALOGO.CATALOGO_ORIGEN_RIESGO,
                CATALOGO.CATALOGO_FRECUENCIA_RIESGO,
                CATALOGO.CATALOGO_TIPO_RIESGO,
            ]);
            readGerencia();
            readProcesoAll();
        }
    }

    useEffectOnce(initialize);

    const formik = useFormik({
        initialValues: {
            subperiodoId: undefined,
            riesgoCodigo: '',
            nivelId: undefined,
            origenId: undefined,
            frecuenciaRiesgoId: undefined,
            tipoRiesgoId: undefined,
            gerenciaId: undefined,
            subprocesoId: undefined,
            riesgoDescripcion: '',
            riesgoProbabilidad: undefined,
            riesgoImpacto: undefined,
            riesgoSeveridad: '',
            riesgoTitulo: '',
            listProcesosImpactados: '',
            listFoda: '',
            listGrupoInteres: '',
        },
        validationSchema: Yup.object({
            subperiodoId: Yup.number()
                .required('El subperiodo es obligatorio.'),
            riesgoCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código de riesgo es obligatorio.'),
            nivelId: Yup.number()
                .required('El nivel es obligatorio.'),
            origenId: Yup.number()
                .required('El origen es obligatorio.'),
            frecuenciaRiesgoId: Yup.number()
                .required('La frecuencia es obligatorio.'),
            tipoRiesgoId: Yup.number()
                .required('El tipo de riesgo es obligatorio.'),
            gerenciaId: Yup.number()
                .required('La gerencia es obligatorio.'),
            subprocesoId: Yup.number()
                .required('El proceso es obligatorio.'),
            riesgoDescripcion: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .required('La descripción es obligatorio.'),
            riesgoTitulo: Yup.string()
                .min(5, 'Ingrese al menos 5 caracteres.')
                .when([], () => {
                    return nivel !== 'proceso' ? Yup.string().required('El título es obligatorio.') : Yup.string();
                }),
            riesgoProbabilidad: Yup.number()
                .required('La probabilidad es obligatorio.'),
            riesgoImpacto: Yup.number()
                .required('El impacto es obligatorio.'),
            riesgoSeveridad: Yup.string()
                .required('El Cálculo es obligatorio.'),
            listProcesosImpactados: Yup.array()
                .when([], () => {
                    return nivel !== 'proceso' ? Yup.string().required('Procesos impactados es obligatorio.') : Yup.string();
                }),
            listFoda: Yup.array()
                .when([], () => {
                    return nivel !== 'proceso' ? Yup.string().required('Foda es obligatorio.') : Yup.string();
                }),
            listGrupoInteres: Yup.array()
                .when([], () => {
                    return nivel !== 'proceso' ? Yup.string().required('Grupo de interes es obligatorio.') : Yup.string();
                }),
        }),
        onSubmit: async (values, { resetForm }) => {
            const {
                subperiodoId,
                riesgoCodigo,
                nivelId,
                origenId,
                frecuenciaRiesgoId,
                tipoRiesgoId,
                gerenciaId,
                subprocesoId,
                riesgoDescripcion,
                riesgoProbabilidad,
                riesgoImpacto,
                riesgoSeveridad,
                riesgoTitulo,
                listProcesosImpactados,
                listFoda,
                listGrupoInteres,
            } = values;

            let bodyRiesgo: RiesgoBody = {
                riesgoId: uuidv4(),
                subperiodoId: Number(subperiodoId),
                riesgoCodigo,
                nivelId: Number(nivelId),
                origenId: Number(origenId),
                frecuenciaRiesgoId: Number(frecuenciaRiesgoId),
                tipoRiesgoId: Number(tipoRiesgoId),
                gerenciaId: Number(gerenciaId),
                riesgoDescripcion,
                riesgoProbabilidad: Number(riesgoProbabilidad),
                riesgoImpacto: Number(riesgoImpacto),
                riesgoSeveridad,
            };

            if (nivel === 'proceso') {
                bodyRiesgo.subprocesoId = Number(subprocesoId);
            }

            if (nivel === 'entidad') {
                bodyRiesgo.riesgoTitulo = riesgoTitulo;
                bodyRiesgo.listProcesosImpactados = listProcesosImpactados;
                bodyRiesgo.listFoda = listFoda;
                bodyRiesgo.listGrupoInteres = listGrupoInteres;

            }

            await createRiesgo(bodyRiesgo);
            console.log("values", bodyRiesgo)

            resetForm();
            setOpenModal(false);
            getRiesgoByIdGestion(gestionId);
        }
    });

    const handleFrecuenciaChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        const { value, options } = e.target;
        const descripcionCorta = options[e.target.selectedIndex].getAttribute('data-descripcion') || "";
        /* console.log(descripcionCorta) */
        formik.setFieldValue('nivelId', value);
        setNivel(descripcionCorta);
    };

    const onChange = (value: number) => {
        console.log(typeof value)
        console.log(value)
        formik.setFieldValue('subprocesoId', value);
    };

    useEffect(() => {
        if (procesos && procesos.length > 0) {
            const newProceso = procesos.map(item => ({
                value: item.procesoNombre,
                title: item.procesoNombre,
                selectable: false,
                children: item.subprocesos?.map(subItem => ({
                    value: subItem.subprocesoId,
                    title: subItem.subproNombre,
                }))
            }));
            console.log("proceso formateado", newProceso)
            setProcesosTreeData(newProceso);
        }
    }, [procesos])

    return (
        <form className="px-2 mt-5" onSubmit={formik.handleSubmit}>
            <Steps current={current} items={items} className="gap-10" />
            {
                current === 0 ? (
                    <>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-6">
                            <div className="flex flex-col gap-y-1.5">
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="subperiodoId" className="text-sm font-medium">SubPeriodo Riesgo</label>
                                    <select
                                        id="subperiodoId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('subperiodoId')}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            subperiodos && subperiodos.map((subperiodo) => (
                                                <option key={subperiodo.subperiodoId} value={subperiodo.subperiodoId}>
                                                    {`${subperiodo.periodo?.periodoAnio} - ${subperiodo.subperiodoDetalle}`}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="subperiodoId"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="riesgoCodigo" className="text-sm font-medium">Codigo Riesgo</label>
                                    <input type="text"
                                        id="riesgoCodigo"
                                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                        placeholder="Ingrese código del riesgo"
                                        {...formik.getFieldProps('riesgoCodigo')}
                                    />
                                    <ValidatorSchema
                                        formik={formik}
                                        element="riesgoCodigo"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="nivelId" className="text-sm font-medium">Nivel</label>
                                    <select
                                        id="nivelId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('nivelId')}
                                        onChange={handleFrecuenciaChange}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            catalogos && catalogos.map((catalogo) => {
                                                if (catalogo.codigo === CATALOGO.CATALOGO_NIVEL_MATRIZ) {
                                                    return (
                                                        <option
                                                            key={catalogo.catalogoId}
                                                            value={catalogo.catalogoId}
                                                            data-descripcion={catalogo.descripcionCorta}
                                                        >
                                                            {catalogo.descripcion}
                                                        </option>
                                                    )
                                                }
                                            })
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="nivelId"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="gerenciaId" className="text-sm font-medium">Gerencia Responsable</label>
                                    <select
                                        id="gerenciaId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('gerenciaId')}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            gerencias && gerencias.map((gerencia) => (
                                                <option key={gerencia.gerenciaId} value={gerencia.gerenciaId}>
                                                    {gerencia.gerenciaNombre}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="gerenciaId"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1.5">
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="origenId" className="text-sm font-medium">Origen del Riesgo</label>
                                    <select
                                        id="origenId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('origenId')}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            catalogos && catalogos.map((catalogo) => {
                                                if (catalogo.codigo === CATALOGO.CATALOGO_ORIGEN_RIESGO) {
                                                    return (
                                                        <option key={catalogo.catalogoId} value={catalogo.catalogoId}>
                                                            {catalogo.descripcion}
                                                        </option>
                                                    )
                                                }
                                            })
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="origenId"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="frecuenciaRiesgoId" className="text-sm font-medium">Frecuencia del Riesgo</label>
                                    <select
                                        id="frecuenciaRiesgoId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('frecuenciaRiesgoId')}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            catalogos && catalogos.map((catalogo) => {
                                                if (catalogo.codigo === CATALOGO.CATALOGO_FRECUENCIA_RIESGO) {
                                                    return (
                                                        <option key={catalogo.catalogoId} value={catalogo.catalogoId}>
                                                            {catalogo.descripcion}
                                                        </option>
                                                    )
                                                }
                                            })
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="frecuenciaRiesgoId"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="tipoRiesgoId" className="text-sm font-medium">Tipo de Riesgo</label>
                                    <select
                                        id="tipoRiesgoId"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('tipoRiesgoId')}
                                    >
                                        <option value="">Seleccione</option>
                                        {
                                            catalogos && catalogos.map((catalogo) => {
                                                if (catalogo.codigo === CATALOGO.CATALOGO_TIPO_RIESGO) {
                                                    return (
                                                        <option key={catalogo.catalogoId} value={catalogo.catalogoId}>
                                                            {catalogo.descripcion}
                                                        </option>
                                                    )
                                                }
                                            })
                                        }
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="tipoRiesgoId"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-1.5 pt-3.5">
                            {
                                nivel && nivel === "proceso" && (
                                    <>
                                        <div className="flex flex-col gap-y-0.5">
                                            <label htmlFor="subprocesoId" className="text-sm font-medium">Nombre del Proceso</label>
                                            <TreeSelect
                                                id="subprocesoId"
                                                showSearch
                                                style={{ width: '100%' }}
                                                value={formik.values.subprocesoId}
                                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                placeholder="Seleccione un subproceso"
                                                allowClear
                                                treeDefaultExpandAll
                                                onChange={onChange}
                                                treeData={procesosTreeData}
                                                treeNodeFilterProp="title"
                                            /* onPopupScroll={onPopupScroll} */
                                            />
                                            <ValidatorSchema
                                                formik={formik}
                                                element="subprocesoId"
                                            />
                                        </div>
                                    </>
                                )
                            }
                            <div className="flex flex-col gap-y-0.5">
                                <label htmlFor="riesgoDescripcion" className="text-sm font-medium">Descripción del Riesgo</label>
                                <Textarea placeholder="Descripción del Riesgo."
                                    id="riesgoDescripcion"
                                    className="border-gray-400"
                                    rows={4}
                                    {...formik.getFieldProps('riesgoDescripcion')}
                                />
                                <ValidatorSchema
                                    formik={formik}
                                    element="riesgoDescripcion"
                                />
                            </div>
                            {
                                nivel && nivel === "entidad" && (
                                    <>
                                        <div className="flex flex-col gap-y-0.5">
                                            <label htmlFor="riesgoTitulo" className="text-sm font-medium">Título</label>
                                            <Textarea placeholder="Descripción del Título."
                                                className="border-gray-400"
                                                rows={4}
                                                {...formik.getFieldProps('riesgoTitulo')}
                                            />
                                            <ValidatorSchema
                                                formik={formik}
                                                element="riesgoTitulo"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-0.5">
                                            <label htmlFor="listProcesosImpactados" className="text-sm font-medium">Procesos Impactados</label>
                                            <select
                                                id="listProcesosImpactados"
                                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                                {...formik.getFieldProps('listProcesosImpactados')}
                                            >
                                                <option value="">Seleccione</option>
                                                {/* {
                                                cargos && cargos.map((cargo) => (
                                                    <option key={cargo.cargoId} value={cargo.cargoId}>
                                                        {cargo.cargoNombre}
                                                    </option>
                                                ))
                                            } */}
                                            </select>
                                            <ValidatorSchema
                                                formik={formik}
                                                element="listProcesosImpactados"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-0.5">
                                            <label htmlFor="listFoda" className="text-sm font-medium">Foda</label>
                                            <select
                                                id="listFoda"
                                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                                {...formik.getFieldProps('listFoda')}
                                            >
                                                <option value="">Seleccione</option>
                                                {/* {
                                                cargos && cargos.map((cargo) => (
                                                    <option key={cargo.cargoId} value={cargo.cargoId}>
                                                        {cargo.cargoNombre}
                                                    </option>
                                                ))
                                            } */}
                                            </select>
                                            <ValidatorSchema
                                                formik={formik}
                                                element="listFoda"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-y-0.5">
                                            <label htmlFor="listGrupoInteres" className="text-sm font-medium">Grupos de Interés</label>
                                            <select
                                                id="listGrupoInteres"
                                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                                {...formik.getFieldProps('listGrupoInteres')}
                                            >
                                                <option value="">Seleccione</option>
                                                {/* {
                                                cargos && cargos.map((cargo) => (
                                                    <option key={cargo.cargoId} value={cargo.cargoId}>
                                                        {cargo.cargoNombre}
                                                    </option>
                                                ))
                                            } */}
                                            </select>
                                            <ValidatorSchema
                                                formik={formik}
                                                element="listGrupoInteres"
                                            />
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </>
                ) : current === 1 && (
                    <>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-6">
                            <div className="flex flex-col gap-y-1.5 pt-3.5">
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="riesgoProbabilidad" className="text-sm font-medium">Probabilidad</label>
                                    <select
                                        id="riesgoProbabilidad"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('riesgoProbabilidad')}
                                    >
                                        <option value="">Seleccione ( 1 - 4 )</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="riesgoProbabilidad"
                                    />
                                </div>
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="riesgoSeveridad" className="text-sm font-medium">Severidad</label>
                                    <input type="text"
                                        id="riesgoSeveridad"
                                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                        placeholder="Cálculo automático"
                                        /* readOnly */
                                        {...formik.getFieldProps('riesgoSeveridad')}
                                    />
                                    <ValidatorSchema
                                        formik={formik}
                                        element="riesgoSeveridad"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1.5 pt-3.5">
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="riesgoImpacto" className="text-sm font-medium">Impacto</label>
                                    <select
                                        id="riesgoImpacto"
                                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                        {...formik.getFieldProps('riesgoImpacto')}
                                    >
                                        <option value="">Seleccione ( 1 - 4 )</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <ValidatorSchema
                                        formik={formik}
                                        element="riesgoImpacto"
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <>
                        {/* <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button> */}
                        <ButtonComponent
                            type="submit"
                            size="sm"
                            text="Registrar"
                            color="primary"
                        />
                    </>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>

        </form>
    )
}