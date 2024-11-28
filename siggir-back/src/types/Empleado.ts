/* import { PersonaData } from "./Persona";
import { CargoData } from "./Cargo"; */

/* export interface EmpleadoData {
    empleadoId: string;
    tipoContrato?: string;
    cargoId: number;
    cargo?: CargoData;
} */

export interface EmpleadoBody {
    empleadoId: string;
    tipoContrato?: string;
    cargoId: number;
}