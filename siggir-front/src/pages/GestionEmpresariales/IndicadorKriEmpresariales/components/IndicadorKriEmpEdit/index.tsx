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
    getIndicadorKriByIdGestion: (id: number) => void;
    idIndicadorKri: string;
    setOpenModal: (open: boolean) => void;
}

interface TreeNode {
    value: string | number;
    title: string;
    selectable?: boolean;
    children?: TreeNode[];
}

export default function IndicadorKriEmpEdit({ getIndicadorKriByIdGestion, idIndicadorKri, setOpenModal }: Props) {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const [gestionId, setGestionId] = useState<number>(0);
    const [procesosTreeData, setProcesosTreeData] = useState<TreeNode[]>([]);

    /* const { createRiesgo } = RiesgoController(); */
    const { areas, readAreaAll } = AreaController();
    const { catalogos, findCatalogoByCodigo } = CatalogoController();

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            setGestionId(gestionId);
        }
        findCatalogoByCodigo([
            CATALOGO.CATALOGO_FRECUENCIA_CONTROL,
            CATALOGO.CATALOGO_OPORTUNIDAD_CONTROL,
            CATALOGO.CATALOGO_AUTOMATIZACION_CONTROL,
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
            const newProceso = areas.map(item => ({
                value: item.areaNombre,
                title: item.areaNombre,
                selectable: false,
                children: item.cargos?.map(subItem => ({
                    value: subItem.cargoId,
                    title: subItem.cargoNombre,
                }))
            }));
            // console.log("proceso formateado", newProceso)
            setProcesosTreeData(newProceso);
        }
    }, [areas])

    const formik = useFormik({
        initialValues: {
            indicadorkriCodigo: '',
            indicadorkriDescripcion: '',
            indicadorkriMeta: '',
            indicadorkriActual: '',
            frecuenciaControlId: undefined,
            cargoId: undefined,
        },
        validationSchema: Yup.object({
            indicadorkriCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código del control es obligatorio.'),
            indicadorkriDescripcion: Yup.string()
                .min(2, 'Ingrese al menos 10 caracteres.')
                .required('La descripción es obligatorio.'),
            indicadorkriMeta: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El nombre de evidencia es obligatorio.'),
            indicadorkriActual: Yup.string()
                .required('Este campo es obligatorio.'),
            frecuenciaControlId: Yup.number()
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
            getIndicadorKriByIdGestion(gestionId);
        }
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="pt-7">
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Generales del Indicador Kri</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="indicadorkriCodigo" className="text-sm font-medium">Codigo del Kri</label>
                            <input type="text"
                                id="indicadorkriCodigo"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('indicadorkriCodigo')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="indicadorkriCodigo"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="indicadorkriMeta" className="text-sm font-medium">Meta del KRI</label>
                            <input type="text"
                                id="indicadorkriMeta"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('indicadorkriMeta')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="indicadorkriMeta"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="indicadorkriActual" className="text-sm font-medium">KRI Actual</label>
                            <input type="text"
                                id="indicadorkriActual"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('indicadorkriActual')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="indicadorkriActual"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="frecuenciaControlId" className="text-sm font-medium">Frecuencia</label>
                            <select
                                id="frecuenciaControlId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('frecuenciaControlId')}
                            >
                                <option value="">Seleccione</option>
                                {
                                    catalogos && catalogos.map((catalogo) => {
                                        if (catalogo.codigo === CATALOGO.CATALOGO_FRECUENCIA_CONTROL) {
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
                                element="frecuenciaControlId"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-1.5 pt-3.5">
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="cargoId" className="text-sm font-medium">Responsable de Asegurar su cumplimiento</label>
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
                            treeData={procesosTreeData}
                            treeNodeFilterProp="title"
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="cargoId"
                        />
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="indicadorkriDescripcion" className="text-sm font-medium">Descripción del Control</label>
                        <Textarea placeholder="Descripción del Riesgo."
                            id="indicadorkriDescripcion"
                            className="border-gray-400"
                            rows={4}
                            {...formik.getFieldProps('indicadorkriDescripcion')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="indicadorkriDescripcion"
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