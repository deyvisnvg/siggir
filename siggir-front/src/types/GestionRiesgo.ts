import { EmpleadoData } from "./Empleado";

export interface GestionRiesgoData {
    gestionId: number;
    gestionNombre: string;
    gestionAbreviatura: string;
    gestionColor: string;
    empleadoId: string;
    empleado?: EmpleadoData
}

export interface GestionRiesgoBody {
    gestionNombre: string;
    gestionAbreviatura: string;
    gestionColor: string;
    empleadoId?: string;
}

export interface SelectRiesgo {
    name: string;
    abreviatura: string;
    color: string;
  }