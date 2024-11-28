import { EmpleadoData } from "./Empleado";

export interface MacroprocesoData {
    macroprocesoId: number;
    macroproCodigo: string;
    macroproNombre: string;
    empleadoId: string;
    empleado?: EmpleadoData
}

export interface MacroprocesoBody {
    macroproCodigo: string;
    macroproNombre: string;
    empleadoId?: string;
}