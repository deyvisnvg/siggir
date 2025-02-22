import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { ProcesoData, ProcesoBody } from "@/types/Proceso";

export default function ProcesoController() {
    const [procesos, setProcesos] = useState<ProcesoData[] | undefined>(undefined);
    const [proceso, setProceso] = useState<ProcesoData | undefined>(undefined);

    async function readProceso() {
        try {
            const { ok, data } = await read({ url: "proceso/raw" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setProcesos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function readProcesoAll() {
        try {
            const { ok, data } = await read({ url: "proceso" });
            /* console.log("procesooo", data) */

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setProcesos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createProceso(body: ProcesoBody) {
        try {
            const { ok } = await create({ url: "proceso/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findProcesoById(idProceso: number) {
        try {
            const { ok, data } = await read({ id: idProceso, url: "proceso" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setProceso(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateProceso(idProceso: number, body: ProcesoBody) {
        try {
            const { ok } = await update({ id: idProceso, url: "proceso", body});

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
        procesos,
        proceso,
        readProceso,
        readProcesoAll,
        createProceso,
        findProcesoById,
        updateProceso
    }
}