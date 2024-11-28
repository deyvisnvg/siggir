import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { SubprocesoData, SubprocesoBody } from "@/types/Subproceso";

export default function SubprocesoController() {
    const [subprocesos, setSubprocesos] = useState<SubprocesoData[] | undefined>(undefined);
    const [subproceso, setSubproceso] = useState<SubprocesoData | undefined>(undefined);

    async function readSubproceso() {
        try {
            const { ok, data } = await read({ url: "subproceso" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setSubprocesos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createSubproceso(body: SubprocesoBody) {
        try {
            const { ok } = await create({ url: "subproceso/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findSubprocesoById(idSubproceso: number) {
        try {
            const { ok, data } = await read({ id: idSubproceso, url: "subproceso" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setSubproceso(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateSubproceso(idSubproceso: number, body: SubprocesoBody) {
        try {
            const { ok } = await update({ id: idSubproceso, url: "subproceso", body});

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
        subprocesos,
        subproceso,
        readSubproceso,
        createSubproceso,
        findSubprocesoById,
        updateSubproceso
    }
}