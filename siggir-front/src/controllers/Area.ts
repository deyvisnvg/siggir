import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { AreaData, AreaBody } from "@/types/Area";

export default function AreaController() {
    const [areas, setAreas] = useState<AreaData[] | undefined>(undefined);
    const [area, setArea] = useState<AreaData | undefined>(undefined);

    async function readArea() {
        try {
            const { ok, data } = await read({ url: "area/raw" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setAreas(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function readAreaAll() {
        try {
            const { ok, data } = await read({ url: "area" });
            console.log("areasss", data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setAreas(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createArea(body: AreaBody) {
        try {
            const { ok } = await create({ url: "area/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAreaById(idArea: number) {
        try {
            const { ok, data } = await read({ id: idArea, url: "area" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setArea(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateArea(idArea: number, body: AreaBody) {
        try {
            const { ok } = await update({ id: idArea, url: "area", body });

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
        areas,
        area,
        readArea,
        readAreaAll,
        createArea,
        findAreaById,
        updateArea
    }
}