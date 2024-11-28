export interface GestionRiesgoData {
    gestionId: number;
    gestionNombre: string;
    gestionAbreviatura: string;
    gestionColor: string;
    empleadoId: string;
}

export interface GestionRiesgoBody {
    gestionNombre: string;
    gestionAbreviatura: string;
    gestionColor: string;
    empleadoId: string;
}