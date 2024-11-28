export interface SubprocesoData {
    subprocesoId: number;
    subproCodigo: string;
    subproNombre: string;
    procesoId: number;
    cargoId: number;
}

export interface SubprocesoBody {
    subproCodigo: string;
    subproNombre: string;
    procesoId: number;
    cargoId: number;
}