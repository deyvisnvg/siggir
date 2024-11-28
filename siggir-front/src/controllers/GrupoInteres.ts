import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { GrupoInteresData, GrupoInteresBody } from "@/types/GrupoInteres";

export default function GrupoInteresController() {
    const [grupoIntereses, setGrupoIntereses] = useState<GrupoInteresData[] | undefined>(undefined);
    const [grupoInteres, setGrupoInteres] = useState<GrupoInteresData | undefined>(undefined);

    async function readGrupoInteres() {
        try {
            const { ok, data } = await read({ url: "grupoInteres" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setGrupoIntereses(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createGrupoInteres(body: GrupoInteresBody) {
        try {
            const { ok } = await create({ url: "grupoInteres/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findGrupoInteresById(idGrupoInteres: number) {
        try {
            const { ok, data } = await read({ id: idGrupoInteres, url: "grupoInteres" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setGrupoInteres(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateGrupoInteres(idGrupoInteres: number, body: GrupoInteresBody) {
        try {
            const { ok } = await update({ id: idGrupoInteres, url: "grupoInteres", body });

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
        grupoIntereses,
        grupoInteres,
        readGrupoInteres,
        createGrupoInteres,
        findGrupoInteresById,
        updateGrupoInteres
    }
}