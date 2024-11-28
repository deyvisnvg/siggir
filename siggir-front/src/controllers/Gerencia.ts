import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { GerenciaData, GerenciaBody } from "@/types/Gerencia";

export default function GerenciaController() {
    const [gerencias, setGerencias] = useState<GerenciaData[] | undefined>(undefined);
    const [gerencia, setGerencia] = useState<GerenciaData | undefined>(undefined);

    async function readGerencia() {
        try {
            const { ok, data } = await read({ url: "gerencia" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setGerencias(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createGerencia(body: GerenciaBody) {
        try {
            const { ok } = await create({ url: "gerencia/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findGerenciaById(idGerencia: number) {
        try {
            const { ok, data } = await read({ id: idGerencia, url: "gerencia" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setGerencia(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateGerencia(idGerencia: number, body: GerenciaBody) {
        try {
            const { ok } = await update({ id: idGerencia, url: "gerencia", body });

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
        gerencias,
        gerencia,
        readGerencia,
        createGerencia,
        findGerenciaById,
        updateGerencia
    }
}