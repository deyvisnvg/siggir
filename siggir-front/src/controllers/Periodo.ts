import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { PeriodoData, PeriodoBody } from "@/types/Periodo";

export default function PeriodoController() {
    const [periodos, setPeriodos] = useState<PeriodoData[] | undefined>(undefined);
    const [periodo, setPeriodo] = useState<PeriodoData | undefined>(undefined);

    async function readPeriodo() {
        try {
            const { ok, data } = await read({ url: "periodo" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setPeriodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createPeriodo(body: PeriodoBody) {
        try {
            const { ok, message } = await create({ url: "periodo/add", body });

            if (!ok) {
                toast.error(message);
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findPeriodoById(idPeriodo: number) {
        try {
            const { ok, data } = await read({ id: idPeriodo, url: "periodo" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setPeriodo(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updatePeriodo(idPeriodo: number, body: PeriodoBody) {
        try {
            const { ok } = await update({ id: idPeriodo, url: "periodo", body});

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
        periodos,
        periodo,
        readPeriodo,
        createPeriodo,
        findPeriodoById,
        updatePeriodo
    }
}