import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { ButtonComponent } from "@/components";
import { PeriodoController } from "@/controllers";
import ValidatorSchema from '@/validators';

interface Props {
    getPeriodo: () => void;
    idPeriodo: number;
    setOpenModal: (open: boolean) => void;
}

export default function PeriodoEdit({ getPeriodo, idPeriodo, setOpenModal }: Props) {
    const {
        periodo,
        findPeriodoById,
        updatePeriodo,
    } = PeriodoController();

    useEffect(() => {
        findPeriodoById(idPeriodo);
    }, [])

    const formik = useFormik({
        initialValues: {
            periodoAnio: periodo?.periodoAnio || '',
            periodoEstado: periodo?.periodoEstado || '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            periodoAnio: Yup.number()
                .typeError('Debe ser un número')
                .min(1000, 'Ingrese un año válido de 4 dígitos.')
                .max(9999, 'Ingrese un año válido de 4 dígitos.')
                .required('El año es obligatorio.'),
            periodoEstado: Yup.string()
                .required('El estado es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
            }
            await updatePeriodo(idPeriodo, body);
            getPeriodo();
            
            resetForm();
            setOpenModal(false);
        },
    });
    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="periodoAnio" className="text-sm font-medium">Año</label>
                    <input type="text"
                        id="periodoAnio"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese periodo"
                        {...formik.getFieldProps('periodoAnio')}
                    />
                    <ValidatorSchema
                        formik={formik}
                        element="periodoAnio"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="periodoEstado" className="text-sm font-medium">Estado</label>
                    <select
                        id="periodoEstado"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('periodoEstado')}
                    >
                        <option key="activo" value="activo">activo</option>
                        <option key="inactivo" value="inactivo">inactivo</option>
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="periodoEstado"
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