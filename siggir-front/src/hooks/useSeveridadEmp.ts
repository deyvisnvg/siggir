import { useEffect, useState } from "react";
import { EMPRESARIALES } from "@/core/SeveridadEmp";

export function useSeveridadEmp() {
    const [severidad, setSeveridad] = useState<string | null>(null);
    const [impacto, setImpacto] = useState<string | "">("");
    const [probabilidad, setProbabilidad] = useState<string | "">("");

    useEffect(() => {
        const result = EMPRESARIALES.flatMap(empresarial => (
            empresarial.severidad.some(item => (
                item.impacto.includes(impacto) && item.probabilidad.includes(probabilidad))
            ) ? [empresarial.name] : []
        ))

        const finalResult = result.length > 0 ? result : [""];
        setSeveridad(finalResult[0])
    }, [impacto, probabilidad]);

    return {
        setProbabilidad,
        setImpacto,
        severidad
    }
}