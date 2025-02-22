import { useState } from "react";
import { OPORTUNIDADES } from "@/core/SeveridadOportunidad";

export function useSeveridadOportunidad() {
    const [severidad, setSeveridad] = useState<string | null>(null);
    const [viabilidad, setViabilidad] = useState<string | "">("");
    const [beneficio, setBeneficio] = useState<string | "">("");

    const result = OPORTUNIDADES.flatMap(oportunidad => (
        oportunidad.severidad.some(item => (
            item.viabilidad.includes(viabilidad) && item.beneficio.includes(beneficio))
        ) ? [oportunidad.name] : []
    ))
    
    const finalResult = result.length > 0 ? result : ["Inválido"];
    setSeveridad(finalResult[0])

    return {
        severidad,
        setBeneficio,
        setViabilidad
    }
}