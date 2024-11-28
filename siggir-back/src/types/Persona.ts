/* import { EmpleadoData } from "./Empleado";

export interface PersonaData {
    dni: string;
    nombres: string;
    apellidos: string;
    email: string;
    fechaNacimiento: string;
    userId: string;
    empleadoId: string;
    usuario?: UsuarioData
    empleado?: EmpleadoData
} */

export interface PersonaBody {
    dni: string;
    nombres: string;
    apellidos: string;
    email: string;
    fechaNacimiento: Date;
    userId: string;
    empleadoId: string;
}