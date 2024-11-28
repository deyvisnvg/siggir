import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { GestionRiesgoData, GestionRiesgoBody } from "@/types/GestionRiesgo";
import { ColorSpanish } from '@/utils/ColorTailwindcss';

/* interface ActiveColor {
    nameColor: string;
    colorStyle: string;
} */

/* type SetActiveColor = (color: ActiveColor | null) => void; */

/* , setActiveColor: SetActiveColor */
type handleClickColor = (color: string) => void;

export default function GestionRiesgoController() {
    const [gestionRiesgos, setGestionRiesgos] = useState<GestionRiesgoData[] | undefined>(undefined);
    const [gestionRiesgo, setGestionRiesgo] = useState<GestionRiesgoData | undefined>(undefined);

    async function readGestionRiesgo() {
        try {
            const { ok, data } = await read({ url: "gestionRiesgo" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setGestionRiesgos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createGestionRiesgo(body: GestionRiesgoBody) {
        try {
            console.log(body)
            const { ok } = await create({ url: "gestionRiesgo/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findGestionRiesgoById(idGestionRiesgo: number, handleClickColor: handleClickColor) {
        try {
            const { ok, data } = await read({ id: idGestionRiesgo, url: "gestionRiesgo" });
            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setGestionRiesgo(data);
            handleClickColor(data.gestionColor);

            /* setActiveColor({
                nameColor: handleColor(data.gestionColor) ?? 'Desconocido',
                colorStyle: data.gestionColor
            }) */
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateGestionRiesgo(idGestion: number, body: GestionRiesgoBody) {
        try {
            console.log(body)
            const { ok } = await update({ id: idGestion, url: "gestionRiesgo", body });

            if (!ok) {
                toast.error("No es posible actualizar");
                return;
            }

            toast.success("Se actualizó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    /* function handleColor(color: string) {
        const [_, colorName, tonalidad] = color.split("-");

        if (colorName in ColorSpanish) {
            const colorSpanish = ColorSpanish[colorName];
            return tonalidad
                ? `${colorSpanish} ${tonalidad}`
                : `${colorSpanish}`
        }
    } */

    return {
        gestionRiesgos,
        gestionRiesgo,
        readGestionRiesgo,
        createGestionRiesgo,
        findGestionRiesgoById,
        updateGestionRiesgo
    }
}