import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { ButtonComponent } from "@/components";
import { GestionRiesgoController } from "@/controllers";
import ValidatorSchema from '@/validators';
import { ColorTailwindCss } from '@/utils/ColorTailwindcss';
import { useColor } from '@/hooks/useColor';

interface Props {
    getGestionRiesgo: () => void;
    idGestion: number;
    setOpenModal: (open: boolean) => void;
}

export default function GestionRiesgoEdit({ getGestionRiesgo, idGestion, setOpenModal }: Props) {
    const { activeColor, setActiveColor, handleClickColor } = useColor();
    const { gestionRiesgo, findGestionRiesgoById, updateGestionRiesgo } = GestionRiesgoController();

    useEffect(() => {
        /* findGestionRiesgoById(idGestion, handleClickColor, setActiveColor); */
        findGestionRiesgoById(idGestion, handleClickColor);
    }, [])

    const formik = useFormik({
        initialValues: {
            gestionNombre: gestionRiesgo?.gestionNombre || '',
            gestionAbreviatura: gestionRiesgo?.gestionAbreviatura || '',
            gestionColor: activeColor?.nameColor || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            gestionNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El Nombre del Riesgo es obligatorio.'),
            gestionAbreviatura: Yup.string()
                .min(2, 'Ingrese al menos 2 caracteres.')
                .required('La abreviatura es obligatorio.'),
            gestionColor: Yup.string()
                .required('La Color es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                gestionColor: activeColor?.colorStyle || '',
                empleadoId: gestionRiesgo?.empleadoId || ''
            }
            await updateGestionRiesgo(idGestion, body);

            resetForm();
            setOpenModal(false);
            getGestionRiesgo();
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-5 pt-3.5">
                <div className="flex flex-col gap-y-4">
                    <div className='flex items-center gap-x-3'>
                        <label htmlFor="gestionColor" className="text-sm font-medium">Identificador del Riesgo</label>
                        <input type="text"
                            id="gestionColor"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="Seleccione un color"
                            {...formik.getFieldProps('gestionColor')}
                            disabled
                        />
                        <ValidatorSchema
                            formik={formik}
                            element="gestionColor"
                        />
                    </div>
                    <div className='grid grid-cols-11 cursor-pointer gap-2'>
                        {
                            ColorTailwindCss.map(({ name, colors }: any) => (
                                name == "white" || name == "black" ? (
                                    <div className={`${colors} 
                                        w-9 h-9 
                                        border-2
                                        rounded-3xl
                                        scale-110
                                        duration-700
                                        hover:-translate-y-0
                                        hover:scale-90
                                        ${activeColor?.colorStyle === colors ? 'ring-2 ring-gray-700' : ''}
                                        `}
                                        key={colors}
                                        onClick={() => handleClickColor(colors)}>
                                    </div>
                                ) : (
                                    colors.map((color: any) => (
                                        <div className={`${color} 
                                            w-9 h-9
                                            border-2
                                           border-white
                                            rounded-3xl
                                            scale-110
                                            duration-700
                                            hover:-translate-y-0
                                            hover:scale-90
                                            ${activeColor?.colorStyle === color ? 'ring-2 ring-gray-700' : ''}
                                            `}
                                            key={color}
                                            onClick={() => handleClickColor(color)}>
                                        </div>
                                    ))

                                )
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="gestionNombre" className="text-sm font-medium">Nombre del Riesgo</label>
                    <input type="text"
                        id="gestionNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Cargo"
                        {...formik.getFieldProps('gestionNombre')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="gestionNombre"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="gestionAbreviatura" className="text-sm font-medium">Abreviatura</label>
                    <input type="text"
                        id="gestionAbreviatura"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Cargo"
                        {...formik.getFieldProps('gestionAbreviatura')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="gestionAbreviatura"
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