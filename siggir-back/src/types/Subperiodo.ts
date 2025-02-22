export interface SubperiodoData {
    subperiodoId: number;
    subperiodoDetalle: string;
    subperiodoFecInicio: Date;
    subperiodoFecFin: Date;
    subperiodoEstado: string;
    frecuenciaId: number;
    periodoId: number;
    gestionId: number;
}

export interface SubperiodoBody {
    subperiodoDetalle: string;
    subperiodoFecInicio: Date;
    subperiodoFecFin: Date;
    subperiodoEstado: string;
    frecuenciaId: number;
    periodoId: number;
    gestionId: number;
}