import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { PlanAccionData, PlanAccionBody } from "@/types/PlanAccion";

export default function PlanAccionController() {
    const [planAcciones, setPlanAcciones] = useState<PlanAccionData[] | undefined>(undefined);
    const [planAccion, setPlanAccion] = useState<PlanAccionData | undefined>(undefined);

    /* async function readPlanAccion() {
        try {
            const { ok, data } = await read({ url: "planaccion" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setPlanAcciones(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    async function createPlanAccion(body: FormData) {
        try {
            return await create({ url: "planaccion/add", body });

            /* if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!"); */
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAllPlanAccionByIdRiesgo(idRiesgo: string) {
        try {
            const { ok, data } = await read({ id: idRiesgo, url: "planaccion/all" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setPlanAcciones(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    /* async function findAllPlanAccionByIdGestion(idGestion: number) {
        try {
            const { ok, data } = await read({ id: idGestion, url: "planaccion/all" });
            console.log("planAcciones", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setPlanAcciones(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    /* async function updatePlanAccion(idPlanAccion: number, body: PlanAccionBody) {
        try {
            const { ok } = await update({ id: idPlanAccion, url: "planaccion", body });

            if (!ok) {
                toast.error("No es posible actualizar");
                return;
            }

            toast.success("Se actualizó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    return {
        planAcciones,
        planAccion,
        findAllPlanAccionByIdRiesgo,
        /* findAllPlanAccionByIdGestion, */
        createPlanAccion,
        /*findRiesgoById,
        updateRiesgo */
    }
}