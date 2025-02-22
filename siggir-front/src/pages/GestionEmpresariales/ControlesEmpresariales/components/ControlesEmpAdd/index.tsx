import { useFormik } from "formik";
import * as Yup from 'yup';
import { AreaController, ControlController } from "@/controllers";
import ValidatorSchema from "@/validators";
import { ChangeEvent, useEffect, useState } from "react";
import { Textarea, toast } from "keep-react";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import CatalogoController from "@/controllers/Catalogo";
import { CATALOGO } from "@/core/Catalogo";
import { TreeSelect } from 'antd';
import { ButtonComponent } from "@/components";
import { useSeveridadEmp } from "@/hooks/useSeveridadEmp";

interface Props {
    getControlByIdRiesgo: (id: string) => void;
    idRiesgo: string;
    setOpenModal: (open: boolean) => void;
}

interface TreeNode {
    value: string | number;
    title: string;
    selectable?: boolean;
    children?: TreeNode[];
}

export default function ControlesEmpAdd({ getControlByIdRiesgo, idRiesgo, setOpenModal }: Props) {
    const [areasTreeData, setAreasTreeData] = useState<TreeNode[]>([]);

    const { createControl } = ControlController();
    const { areas, readAreaAll } = AreaController();
    const { catalogos, findCatalogoByCodigo } = CatalogoController();

    const {
        setProbabilidad,
        setImpacto,
        severidad
    } = useSeveridadEmp();

    const initialize = () => {
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
            controlCodigo: '',
            controlDescripcion: '',
            controlNombreEvidencia: '',
            controlSustento: [] as File[],
            controlProbabilidad: "",
            controlImpacto: "",
            controlSeveridad: '',
            frecuenciaControlId: undefined,
            oportunidadControlId: undefined,
            automatizacionControlId: undefined,
            cargoId: undefined,
        },
        validationSchema: Yup.object({
            controlCodigo: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El código del control es obligatorio.'),
            controlDescripcion: Yup.string()
                .min(2, 'Ingrese al menos 10 caracteres.')
                .required('La descripción es obligatorio.'),
            controlNombreEvidencia: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('El nombre de evidencia es obligatorio.'),
            controlSustento: Yup.mixed()
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
            controlProbabilidad: Yup.string()
                .required('La probabilidad es obligatorio.'),
            controlImpacto: Yup.string()
                .required('El impacto es obligatorio.'),
            controlSeveridad: Yup.string()
                .required('El Cálculo es obligatorio.'),
            frecuenciaControlId: Yup.number()
                .required('La frecuencia es obligatorio.'),
            oportunidadControlId: Yup.number()
                .required('Este campo es obligatorio.'),
            automatizacionControlId: Yup.number()
                .required('Este campo es obligatorio.'),
            cargoId: Yup.number()
                .required('El cargo es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            /* console.log("values", values) */
            const formData = new FormData();

            Object.entries(values).forEach(([key, value]) => {
                if (key === 'controlSustento' && Array.isArray(value)) {
                    value.forEach(file => {
                        formData.append(key, file);
                    });
                } else {
                    formData.append(key, String(value));
                }
            });

            formData.append("riesgoId", idRiesgo);

            /* for (const [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            } */

            const response = await createControl(formData);

            if (!response.ok) {
                toast.warning(response.message);
                return;
            }

            resetForm();
            setOpenModal(false);
            getControlByIdRiesgo(idRiesgo);
            toast.success("Se agregó correctamente!!!");
        }
    });

    const handleSeveridadChange = (e: ChangeEvent<HTMLSelectElement>, type: string) => {
        const { value } = e.target;
        const impacto = formik.values.controlImpacto;
        const probabilidad = formik.values.controlProbabilidad;

        if (type === "probabilidad") {
            formik.setFieldValue('controlProbabilidad', value);
            setProbabilidad(value);
            setImpacto(impacto);
        }

        if (type === "impacto") {
            formik.setFieldValue('controlImpacto', value);
            setProbabilidad(probabilidad);
            setImpacto(value);
        }
    }

    useEffect(() => {
        formik.setFieldValue('controlSeveridad', severidad);
    }, [severidad]);

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="pt-7">
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Generales del Control</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlCodigo" className="text-sm font-medium">Codigo del Control</label>
                            <input type="text"
                                id="controlCodigo"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('controlCodigo')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="controlCodigo"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlNombreEvidencia" className="text-sm font-medium">Evidencia del Control</label>
                            <input type="text"
                                id="controlNombreEvidencia"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese código del riesgo"
                                {...formik.getFieldProps('controlNombreEvidencia')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="controlNombreEvidencia"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlSustento" className="text-sm font-medium">Sustento del Control</label>
                            <input type="file"
                                id="controlSustento"
                                multiple
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                                placeholder="Ingrese código del riesgo"
                                /* {...formik.getFieldProps('controlSustento')} */
                                onChange={(event) => {
                                    const files = Array.from(event.currentTarget.files || []);
                                    formik.setFieldValue("controlSustento", files);
                                }}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="controlSustento"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="frecuenciaControlId" className="text-sm font-medium">Frecuencia del Control</label>
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
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="oportunidadControlId" className="text-sm font-medium">Oportunidad del Control</label>
                            <select
                                id="oportunidadControlId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('oportunidadControlId')}
                            >
                                <option value="">Seleccione</option>
                                {
                                    catalogos && catalogos.map((catalogo) => {
                                        if (catalogo.codigo === CATALOGO.CATALOGO_OPORTUNIDAD_CONTROL) {
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
                                element="oportunidadControlId"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="automatizacionControlId" className="text-sm font-medium">Automatización del Control</label>
                            <select
                                id="automatizacionControlId"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('automatizacionControlId')}
                            >
                                <option value="">Seleccione</option>
                                {
                                    catalogos && catalogos.map((catalogo) => {
                                        if (catalogo.codigo === CATALOGO.CATALOGO_AUTOMATIZACION_CONTROL) {
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
                                element="automatizacionControlId"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-1.5 pt-3.5">
                    <div className="flex flex-col gap-y-0.5">
                        <label htmlFor="cargoId" className="text-sm font-medium">Responsable del Control</label>
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
                        <label htmlFor="controlDescripcion" className="text-sm font-medium">Descripción del Control</label>
                        <Textarea placeholder="Descripción del Riesgo."
                            id="controlDescripcion"
                            className="border-gray-400"
                            rows={4}
                            {...formik.getFieldProps('controlDescripcion')}
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="controlDescripcion"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-7">
                <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Evaluación de Riesgo Residual</span>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-4">
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlProbabilidad" className="text-sm font-medium">Probabilidad</label>
                            <select
                                id="controlProbabilidad"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('controlProbabilidad')}
                                onChange={(e) => handleSeveridadChange(e, "probabilidad")}
                            >
                                <option value="">Seleccione ( 1 - 4 )</option>
                                <option value="1.00">1</option>
                                <option value="2.00">2</option>
                                <option value="3.00">3</option>
                                <option value="4.00">4</option>
                            </select>
                            <ValidatorSchema
                                formik={formik}
                                element="controlProbabilidad"
                            />
                        </div>
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlSeveridad" className="text-sm font-medium">Severidad</label>
                            <input type="text"
                                id="controlSeveridad"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Cálculo automático"
                                /* readOnly */
                                {...formik.getFieldProps('controlSeveridad')}
                            />
                            <ValidatorSchema
                                formik={formik}
                                element="controlSeveridad"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1.5">
                        <div className="flex flex-col gap-y-0.5">
                            <label htmlFor="controlImpacto" className="text-sm font-medium">Impacto</label>
                            <select
                                id="controlImpacto"
                                className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                                {...formik.getFieldProps('controlImpacto')}
                                onChange={(e) => handleSeveridadChange(e, "impacto")}
                            >
                                <option value="">Seleccione ( 1 - 4 )</option>
                                <option value="1.00">1</option>
                                <option value="2.00">2</option>
                                <option value="3.00">3</option>
                                <option value="4.00">4</option>
                            </select>
                            <ValidatorSchema
                                formik={formik}
                                element="controlImpacto"
                            />
                        </div>
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