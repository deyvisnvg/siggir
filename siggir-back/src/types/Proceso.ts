export interface ProcesoData {
    procesoId: number;
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
}

export interface ProcesoBody {
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
}