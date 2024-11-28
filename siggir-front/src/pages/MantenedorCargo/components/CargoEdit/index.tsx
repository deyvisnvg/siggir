import * as Yup from 'yup';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { ButtonComponent } from "@/components";
import { AreaController, CargoController } from "@/controllers";
import ValidatorSchema from '@/validators';

interface Props {
    getCargo: () => void;
    idCargo: number;
    setOpenModal: (open: boolean) => void;
}

export default function CargoEdit({ getCargo, idCargo, setOpenModal }: Props) {
    const {
        areas,
        readArea,
    } = AreaController();

    const {
        cargo,
        findCargoById,
        updateCargo,
    } = CargoController();

    useEffect(() => {
        findCargoById(idCargo);
        readArea();
    }, [])

    const formik = useFormik({
        initialValues: {
            cargoNombre: cargo?.cargoNombre || '',
            areaId: cargo?.area?.areaId,
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            cargoNombre: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('El cargo es obligatorio.'),
            areaId: Yup.number()
                .required('El area es obligatorio.'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const body = {
                ...values,
                areaId: Number(values.areaId)
            }
            await updateCargo(idCargo, body);

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
                    <ValidatorSchema
                        formik={formik}
                        element="cargoNombre"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="areaId" className="text-sm font-medium">Area perteneciente</label>
                    <select
                        id="areaId"
                        className="rounded-lg border border-gray-400 py-1.5 px-3 text-sm"
                        {...formik.getFieldProps('areaId')}
                    >
                        {
                            areas && areas.map((area) => (
                                <option key={area.areaId} value={area.areaId}>
                                    {area.areaNombre}
                                </option>
                            ))
                        }
                    </select>
                    <ValidatorSchema
                        formik={formik}
                        element="areaId"
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