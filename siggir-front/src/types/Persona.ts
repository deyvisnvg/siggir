import { UsuarioData } from "./Usuario";
import { EmpleadoData } from "./Empleado";

export interface PersonaData {
    personaId: number;
    dni: string;
    nombres: string;
    apellidos: string;
    email: string;
    fechaNacimiento: Date;
    userId: string;
    empleadoId: string;
    user?: UsuarioData
    empleado?: EmpleadoData
}

export interface PersonaBody {
    dni: string;
    nombres: string;
    apellidos: string;
    email: string;
    fechaNacimiento: Date;
    userId: string;
    empleadoId: string;
}