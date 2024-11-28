import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { CargoData, CargoBody } from "@/types/Cargo";

export default function CargoController() {
    const [cargos, setCargos] = useState<CargoData[] | undefined>(undefined);
    const [cargo, setCargo] = useState<CargoData | undefined>(undefined);

    async function readCargo() {
        try {
            const { ok, data } = await read({ url: "cargo" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setCargos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createCargo(body: CargoBody) {
        try {
            const { ok } = await create({ url: "cargo/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findCargoById(idCargo: number) {
        try {
            const { ok, data } = await read({ id: idCargo, url: "cargo" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setCargo(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateCargo(idCargo: number, body: CargoBody) {
        try {
            const { ok } = await update({ id: idCargo, url: "cargo", body});

            if (!ok) {
                toast.error("No es posible actualizar");
                return;
            }

            toast.success("Se actualizó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    return {
        cargos,
        cargo,
        readCargo,
        createCargo,
        findCargoById,
        updateCargo
    }
}