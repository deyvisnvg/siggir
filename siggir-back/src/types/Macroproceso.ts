export interface MacroprocesoData {
    macroproId: number;
    macroproCodigo: string;
    macroproNombre: string;
    empleadoId: string;
}

export interface MacroprocesoBody {
    macroproCodigo: string;
    macroproNombre: string;
    empleadoId: string;
}