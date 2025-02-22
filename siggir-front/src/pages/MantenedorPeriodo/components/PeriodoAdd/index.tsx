import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { ButtonComponent } from "@/components";
import { PeriodoController } from "@/controllers";
import ValidatorSchema from "@/validators";

interface Props {
    getPeriodo: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function PeriodoAdd({ getPeriodo, setOpenModal }: Props) {
    const { createPeriodo } = PeriodoController();

    const formik = useFormik({
        initialValues: {
            periodoAnio: '',
        },
        validationSchema: Yup.object({
            periodoAnio: Yup.number()
                .typeError('Debe ser un número')
                .min(1000, 'Ingrese un año válido de 4 dígitos.')
                .max(9999, 'Ingrese un año válido de 4 dígitos.')
                .required('El año es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                periodoEstado: 'activo'
            }
            await createPeriodo(body);

            resetForm();
            setOpenModal(false);
            getPeriodo();
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