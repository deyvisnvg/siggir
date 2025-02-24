import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { IndicadorKriData, IndicadorKriBody } from "@/types/IndicadorKri";

export default function IndicadorKriController() {
    const [indicadorKris, setIndicadorKris] = useState<IndicadorKriData[] | undefined>(undefined);
    const [indicadorKri, setIndicadorKri] = useState<IndicadorKriData | undefined>(undefined);

    /* async function readIndicadorKri() {
        try {
            const { ok, data } = await read({ url: "indicadorkri" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setIndicadorKris(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    async function createIndicadorKri(body: IndicadorKriBody) {
        try {
            return await create({ url: "indicadorkri/add", body });

            /* if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!"); */
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAllIndicadorKriByIdRiesgo(idRiesgo: string) {
        try {
            const { ok, data } = await read({ id: idRiesgo, url: "indicadorkri/all" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setIndicadorKris(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findIndicadorKriById(idIndicadorKri: string) {
        try {
            const { ok, data } = await read({ id: idIndicadorKri, url: "indicadorkri" });
            console.log("indicadorKris", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setIndicadorKri(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateIndicadorKri(idIndicadorKri: string, body: IndicadorKriBody) {
        try {
            const { ok } = await update({ id: idIndicadorKri, url: "indicadorkri", body });

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
        indicadorKris,
        indicadorKri,
        findAllIndicadorKriByIdRiesgo,
        createIndicadorKri,
        findIndicadorKriById,
        updateIndicadorKri,
    }
}