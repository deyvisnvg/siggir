import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { RiesgoData, RiesgoBody } from "@/types/Riesgo";

export default function RiesgoController() {
    const [riesgos, setRiesgos] = useState<RiesgoData[] | undefined>(undefined);
    const [riesgo, setRiesgo] = useState<RiesgoData | undefined>(undefined);

    /* async function readRiesgo() {
        try {
            const { ok, data } = await read({ url: "riesgo" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setRiesgos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    async function createRiesgo(body: RiesgoBody, nivel?: string) {
        let URL = "";
        try {
            if (nivel == 'proceso') URL = "riesgo/add";
            if (nivel == 'entidad') URL = "riesgo/add/entidad";

            return await create({ url: URL, body });

            /* if (!ok) {
                toast.error(message);
                return;
            }

            toast.success("Se agregó correctamente!!!"); */
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findRiesgoById(idRiesgo: string) {
        try {
            const { ok, data } = await read({ id: idRiesgo, url: "riesgo" });
            console.log("data", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setRiesgo(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAllRiesgoByIdGestion(idGestion: number) {
        console.log("idGestion", idGestion)
        try {
            const { ok, data } = await read({ id: idGestion, url: "riesgo/all" });
            console.log("riesgos", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setRiesgos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateRiesgo(idRiesgo: string, body: RiesgoBody, nivel?: string) {
        let URL = "";

        try {
            if (nivel == 'proceso') URL = "riesgo/update";
            if (nivel == 'entidad') URL = "riesgo/update/entidad";

            const { ok } = await update({ id: idRiesgo, url: URL, body });

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
        riesgos,
        riesgo,
        createRiesgo,
        findRiesgoById,
        findAllRiesgoByIdGestion,
        updateRiesgo
    }
}