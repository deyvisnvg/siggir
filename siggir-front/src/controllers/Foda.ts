import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { FodaData, FodaBody } from "@/types/Foda";

export default function FodaController() {
    const [fodas, setFodas] = useState<FodaData[] | undefined>(undefined);
    const [foda, setFoda] = useState<FodaData | undefined>(undefined);

    async function readFoda() {
        try {
            const { ok, data } = await read({ url: "foda" });
            console.log(data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setFodas(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createFoda(body: FodaBody) {
        try {
            const { ok } = await create({ url: "foda/add", body });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findFodaById(idFoda: number) {
        try {
            const { ok, data } = await read({ id: idFoda, url: "foda" });

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setFoda(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateFoda(idFoda: number, body: FodaBody) {
        try {
            const { ok } = await update({ id: idFoda, url: "foda", body });

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
        fodas,
        foda,
        readFoda,
        createFoda,
        findFodaById,
        updateFoda
    }
}