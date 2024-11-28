import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { MacroprocesoData, MacroprocesoBody } from "@/types/Macroproceso";

export default function MacroprocesoController() {
    const [macroprocesos, setMacroprocesos] = useState<MacroprocesoData[] | undefined>(undefined);
    const [macroproceso, setMacroproceso] = useState<MacroprocesoData | undefined>(undefined);

    async function readMacroproceso() {
        try {
            const { ok, data } = await read({ url: "macroproceso" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setMacroprocesos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createMacroproceso(body: MacroprocesoBody) {
        try {
            console.log(body)
            const { ok } = await create({ url: "macroproceso/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findMacroprocesoById(idMacroproceso: number) {
        try {
            const { ok, data } = await read({ id: idMacroproceso, url: "macroproceso" });
            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setMacroproceso(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateMacroproceso(idMacroproceso: number, body: MacroprocesoBody) {
        try {
            console.log(body)
            const { ok } = await update({ id: idMacroproceso, url: "macroproceso", body });

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
        macroprocesos,
        macroproceso,
        readMacroproceso,
        createMacroproceso,
        findMacroprocesoById,
        updateMacroproceso
    }
}