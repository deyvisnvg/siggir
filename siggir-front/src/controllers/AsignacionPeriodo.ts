import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { AsignacionPeriodoData, AsignacionPeriodoBody } from "@/types/AsignacionPeriodo";

export default function AsignacionPeriodoController() {
    const [asignacionPeriodos, setAsignacionPeriodos] = useState<AsignacionPeriodoData[] | undefined>(undefined);
    const [asignacionPeriodo, setAsignacionPeriodo] = useState<AsignacionPeriodoData | undefined>(undefined);

    async function readAsignacionPeriodo() {
        try {
            const { ok, data } = await read({ url: "asignacionPeriodo" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setAsignacionPeriodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createAsignacionPeriodo(body: AsignacionPeriodoBody) {
        try {
            const { ok } = await create({ url: "asignacionPeriodo/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAsignacionPeriodoById(idAsignacionPeriodo: number) {
        try {
            const { ok, data } = await read({ id: idAsignacionPeriodo, url: "asignacionPeriodo" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setAsignacionPeriodo(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateAsignacionPeriodo(idAsignacionPeriodo: number, body: AsignacionPeriodoBody) {
        try {
            const { ok } = await update({ id: idAsignacionPeriodo, url: "asignacionPeriodo", body});

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
        asignacionPeriodos,
        asignacionPeriodo,
        readAsignacionPeriodo,
        createAsignacionPeriodo,
        findAsignacionPeriodoById,
        updateAsignacionPeriodo
    }
}