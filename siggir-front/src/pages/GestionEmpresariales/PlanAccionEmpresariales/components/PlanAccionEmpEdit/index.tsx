import { useFormik } from "formik";
import * as Yup from 'yup';
import { AreaController, RiesgoController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { useEffect, useState } from "react";
import { Textarea } from "keep-react";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import CatalogoController from "@/controllers/Catalogo";
import { CATALOGO } from "@/core/Catalogo";
import { TreeSelect } from 'antd';
import { ButtonComponent } from "@/components";

interface Props {
    getPlanAccionByIdGestion: (id: number) => void;
    idPlanAccion: string;
    setOpenModal: (open: boolean) => void;
}

interface TreeNode {
    value: string | number;
    title: string;
    selectable?: boolean;
    children?: TreeNode[];
}

export default function PlanAccionEmpEdit({ getPlanAccionByIdGestion, idPlanAccion, setOpenModal }: Props) {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const [gestionId, setGestionId] = useState<number>(0);
    const [areasTreeData, setAreasTreeData] = useState<TreeNode[]>([]);

    /* const { createRiesgo } = RiesgoController(); */
    const { areas, readAreaAll } = AreaController();
    const { catalogos, findCatalogoByCodigo } = CatalogoController();

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            setGestionId(gestionId);
        }
        findCatalogoByCodigo([
            CATALOGO.CATALOGO_ESTADO_PLAN,
            CATALOGO.CATALOGO_ESTRATEGIA_RESPUESTA,
        ]);
        readAreaAll();
    }

    useEffectOnce(initialize);

    const onChangeTreeSelect = (value: number) => {
        console.log(value)
        formik.setFieldValue('cargoId', value);
    };

    useEffect(() => {
        if (areas && areas.length > 0) {
            const newAreas = areas.map(item => ({
                value: item.areaNombre,
                title: item.areaNombre,
                selectable: false,
                children: item.cargos?.map(subItem => ({
                    value: subItem.cargoId,
                    title: subItem.cargoNombre,
                }))
            }));
            // console.log("areas formateado", newAreas)
            setAreasTreeData(newAreas);
        }
    }, [areas])

    const formik = useFormik({
        initialValues: {
            planaccionCodigo: '',
            planaccionDescripcion: '',
            planaccionFechaInicio: undefined,
            planaccionFechaFin: undefined,
            planaccionNombreEvidencia: '',
            planaccionSustento: '',
            estadoPlanId: undefined,
            estrategiaRespuestaId: undefined,
            cargoId: undefined,
        },
        validationSchema: Yup.object({
            planaccionCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código del control es obligatorio.'),
            planaccionDescripcion: Yup.string()
                .min(2, 'Ingrese al menos 10 caracteres.')
                .required('La descripción es obligatorio.'),
            planaccionFechaInicio: Yup.date()
                .required('La fecha inicio es obligatorio.'),
            planaccionFechaFin: Yup.date()
                .required('La fecha fin es obligatorio.')
                .min(
                    Yup.ref('planaccionFechaInicio'), 'Fecha fin no puede ser menor que Fecha inicio.'
                ),
            planaccionNombreEvidencia: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El nombre de evidencia es obligatorio.'),
            planaccionSustento: Yup.mixed()
                .test('fileSize', 'El archivo es muy grande', (value: any) => {
                    if (!value) {
                        return true;
                    }

                    let valid = true;
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].size > 1024 * 1024) { // 1MB
                            valid = false;
                        }
                    }
                    return valid;
                }),
            estadoPlanId: Yup.number()
                .required('Este campo es obligatorio.'),
            estrategiaRespuestaId: Yup.number()
                .required('La estrategia es obligatorio.'),
            cargoId: Yup.number()
                .required('El cargo es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            /* console.log("values", values) */
            /* await createRiesgo(bodyRiesgo, nivel); */
            console.log("values", values)

            resetForm();
            setOpenModal(false);
            getPlanAccionByIdGestion(gestionId);
        }
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="pt-7">
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Generales del Plan de Acción</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="planaccionCodigo" className="text-sm font-medium">Codigo Plan Acción</label>
                            <input type="text"
                                id="planaccionCodigo"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('planaccionCodigo')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="planaccionCodigo"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="planaccionNombreEvidencia" className="text-sm font-medium">Evidencia del Plan de Acción</label>
                            <input type="text"
                                id="planaccionNombreEvidencia"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('planaccionNombreEvidencia')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="planaccionNombreEvidencia"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="planaccionSustento" className="text-sm font-medium">Sustento del Plan de Acción</label>
                            <input type="file"
                                id="planaccionSustento"
                                multiple
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                                placeholder="Ingrese código del riesgo"
                                /* {...formik.getFieldProps('planaccionSustento')} */
                                onChange={(event) => {
                                    const files = event.currentTarget.files;
                                    formik.setFieldValue("planaccionSustento", files);
                                }}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="planaccionSustento"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="estadoPlanId" className="text-sm font-medium">Estado de Plan de Acción</label>
                            <select
                                id="estadoPlanId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('estadoPlanId')}
                            >
                                <option value="">Seleccione</option>
                                {
                                    catalogos && catalogos.map((catalogo) => {
                                        if (catalogo.codigo === CATALOGO.CATALOGO_ESTADO_PLAN) {
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
                                element="estadoPlanId"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="planaccionFechaInicio" className="text-sm font-medium">Inicio del Plan de Acción</label>
                            <input type="date"
                                id="planaccionFechaInicio"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese Fecha inicio"
                                {...formik.getFieldProps('planaccionFechaInicio')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="planaccionFechaInicio"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="planaccionFechaFin" className="text-sm font-medium">Fin del Plan de Acción</label>
                            <input type="date"
                                id="planaccionFechaFin"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese Fecha fin"
                                {...formik.getFieldProps('planaccionFechaFin')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="planaccionFechaFin"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="estrategiaRespuestaId" className="text-sm font-medium">Estrategia de Respuesta</label>
                            <select
                                id="estrategiaRespuestaId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('estrategiaRespuestaId')}
                            >
                                <option value="">Seleccione</option>
                                {
                                    catalogos && catalogos.map((catalogo) => {
                                        if (catalogo.codigo === CATALOGO.CATALOGO_ESTRATEGIA_RESPUESTA) {
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
                                element="estrategiaRespuestaId"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-1.5 pt-3.5">
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="cargoId" className="text-sm font-medium">Responsable del Plan de Acción</label>
                        <TreeSelect
                            id="cargoId"
                            showSearch
                            style={{ width: '100%' }}
                            value={formik.values.cargoId}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                            placeholder="Seleccione un subproceso"
                            allowClear
                            treeDefaultExpandAll
                            onChange={onChangeTreeSelect}
                            treeData={areasTreeData}
                            treeNodeFilterProp="title"
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="cargoId"
                        />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="planaccionDescripcion" className="text-sm font-medium">Descripción Plan Acción</label>
                        <Textarea placeholder="Descripción del Riesgo."
                            id="planaccionDescripcion"
                            className="border-gray-400"
                            rows={4}
                            {...formik.getFieldProps('planaccionDescripcion')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="planaccionDescripcion"
                        />
                    </div>
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