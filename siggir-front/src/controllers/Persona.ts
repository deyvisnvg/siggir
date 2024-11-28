import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { PersonaData, PersonaBody } from "@/types/Persona";

export default function PersonaController() {
    /* const [personas, setPersonas] = useState<PersonaData[] | undefined>(undefined); */
    const [persona, setPersona] = useState<PersonaData | undefined>(undefined);

    /*     async function readPersona() {
            try {
                const { ok, data } = await read({ url: "persona" });
                console.log(data)
    
                if (!ok) {
                    return toast.error("No se pudo obtener la data");
                }
                setPersonas(data);
            } catch (error) {
                toast.error("Error al obtener la data");
            }
        } */

    /*     async function createPersona(body: PersonaBody) {
            try {
                const { ok } = await create({ url: "persona/add", body });
    
                if (!ok) {
                    toast.error("No se pudo agregar");
                    return;
                }
    
                toast.success("Se agregó correctamente!!!");
            } catch (error) {
                toast.error("Error al obtener la data");
            }
        } */

    async function findPersonaByDni(dni: string): Promise<boolean> {
        try {
            const { ok } = await read({ id: dni, url: "persona" });

            if (!ok) {
                return false;
            }
            return ok;
        } catch (error) {
            toast.error("Error al obtener la data");
            return false;
        }
    }

    /*     async function updatePersona(idPersona: number, body: PersonaBody) {
            try {
                const { ok } = await update({ id: idPersona, url: "persona", body});
    
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
        persona,
        findPersonaByDni,
        /* readPersona, */
        /* findPersonaById,
        updatePersona */
    }
}