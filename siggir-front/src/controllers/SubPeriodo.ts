import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { SubPeriodoData, SubPeriodoBody } from "@/types/SubPeriodo";

export default function SubPeriodoController() {
    const [subperiodos, setSubperiodos] = useState<SubPeriodoData[] | undefined>(undefined);
    const [subperiodo, setSubperiodo] = useState<SubPeriodoData | undefined>(undefined);

    /* async function readSubPeriodo() {
        try {
            const { ok, data } = await read({ url: "subperiodo" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setSubperiodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    async function createSubPeriodo(body: SubPeriodoBody) {
        try {
            const { ok } = await create({ url: "subperiodo/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    /* async function findSubPeriodoById(idSubperiodo: number) {
        try {
            const { ok, data } = await read({ id: idSubperiodo, url: "subperiodo" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setSubperiodo(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateSubPeriodo(idSubperiodo: number, body: SubPeriodoBody) {
        try {
            const { ok } = await update({ id: idSubperiodo, url: "subperiodo", body});

            if (!ok) {
                toast.error("No es posible actualizar");
                return;
            }

            toast.success("Se actualizó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    async function findSubPeriodoAllByIdGestionRaw(idGestion: number) {
        try {
            const { ok, data } = await read({ id: idGestion, url: "subperiodo/raw/all" });
            console.log("datassss", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setSubperiodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findSubPeriodoAllByIdGestion(idGestion: number) {
        try {
            const { ok, data } = await read({ id: idGestion, url: "subperiodo/all" });
            console.log("datassss", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setSubperiodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function readSubPeriodoAllByParams(params: { gestionId: string, periodoId: string, frecuenciaId: string }) {
        try {
            const { ok, data } = await read({ url: "subperiodo/all", params });
            console.log("param data", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setSubperiodos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    return {
        subperiodos,
        subperiodo,
        /* readSubPeriodo, */
        createSubPeriodo,
        /* findSubPeriodoById,
        updateSubPeriodo, */
        findSubPeriodoAllByIdGestionRaw,
        findSubPeriodoAllByIdGestion,
        readSubPeriodoAllByParams
    }
}