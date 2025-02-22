import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { ControlData, ControlBody } from "@/types/Control";

export default function ControlController() {
    const [controles, setControles] = useState<ControlData[] | undefined>(undefined);
    const [control, setControl] = useState<ControlData | undefined>(undefined);

    async function createControl(body: FormData) {
        try {
            return await create({ url: "control/add", body });

            /* if (!ok) {
                toast.error(message);
                return;
            }

            toast.success("Se agregó correctamente!!!"); */
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findAllControlByIdRiesgo(idRiesgo: string) {
        try {
            const { ok, data } = await read({ id: idRiesgo, url: "control/all" });
            console.log("controles", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setControles(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    /* async function findAllControlByIdGestion(idGestion: number) {
        try {
            const { ok, data } = await read({ id: idGestion, url: "control/all" });
            console.log("controles", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setControles(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    } */

    return {
        controles,
        control,
        createControl,
        findAllControlByIdRiesgo,
        /*findControlById,
        updateControl */
    }
}