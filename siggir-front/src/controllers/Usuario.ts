import { create, read, update } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { UsuarioBody } from "@/types/Usuario";
import { PersonaBody, PersonaData } from "@/types/Persona";
import { EmpleadoBody } from "@/types/Empleado";

export default function UsuarioController() {
    const [personas, setPersonas] = useState<PersonaData[] | undefined>(undefined);
    const [persona, setPersona] = useState<PersonaData | undefined>(undefined);

    async function readUsuario() {
        try {
            const { ok, data } = await read({ url: "user/list" });
            console.log(data)

            if (!ok) {
                return toast.error("No se pudo obtener la data");
            }
            setPersonas(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function createUsuario(bodyUser: UsuarioBody, bodyPersona: PersonaBody, bodyEmpleado: EmpleadoBody) {
        try {
            const { ok } = await create({ url: "user/add", body: { ...bodyUser, ...bodyPersona, ...bodyEmpleado } });

            if (!ok) {
                toast.error("No se pudo agregar");
                return;
            }

            toast.success("Se agregó correctamente!!!");
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function findUsuarioById(idPersona: number) {
        try {
            const { ok, data } = await read({ id: idPersona, url: "user" });
            console.log("usuario Datos", data)
            
            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setPersona(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    async function updateUsuario(idPersona: number, bodyUser: UsuarioBody, bodyPersona: PersonaBody, bodyEmpleado: EmpleadoBody) {
        try {
            const { ok } = await update({ id: idPersona, url: "user", body: { ...bodyUser, ...bodyPersona, ...bodyEmpleado } });

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
        personas,
        persona,
        readUsuario,
        createUsuario,
        findUsuarioById,
        updateUsuario
    }
}