import * as Yup from 'yup';
import { useFormik } from "formik";
import { useEffect } from "react";
import { ButtonComponent } from "@/components";
import { AreaController, CargoController } from "@/controllers";

interface Props {
    getCargo: () => void;
    setOpenModal: (open: boolean) => void;
}

export default function CargoAdd({ getCargo, setOpenModal }: Props) {
    const {
        areas,
        readArea,
    } = AreaController();

    const {
        createCargo
    } = CargoController();

    useEffect(() => {
        readArea();
    }, [])

    const formik = useFormik({
        initialValues: {
            cargoNombre: '',
            areaId: '',
        },
        validationSchema: Yup.object({
            cargoNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El cargo es obligatorio.'),
            areaId: Yup.number()
                .required('La area es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                areaId: Number(values.areaId)
            }
            await createCargo(body);

            resetForm();
            setOpenModal(false);
            await getCargo();
        },
    });

    return (
        <form className="px-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="cargoNombre" className="text-sm font-medium">Nombre del cargo</label>
                    <input type="text"
                        id="cargoNombre"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Cargo"
                        {...formik.getFieldProps('cargoNombre')}
                    />
                    {
                        formik.touched.cargoNombre && formik.errors.cargoNombre ? (
                            <p className="pl-1 mt-0.5 text-xs text-red-600">{formik.errors.cargoNombre}</p>
                        ) : null
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="areaId" className="text-sm font-medium">Cargo perteneciente</label>
                    <select
                        id="areaId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('areaId')} >
                        <option value="">Seleccione</option>
                        {
                            areas && areas.map((area) => (
                                <option key={area.areaId} value={area.areaId}>
                                    {area.areaNombre}
                                </option>
                            ))
                        }
                    </select>
                    {
                        formik.touched.areaId && formik.errors.areaId ? (
                            <p className="pl-1 mt-0.5 text-xs text-red-600">{formik.errors.areaId}</p>
                        ) : null
                    }
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