import { useState } from "react";
import { SelectRiesgo } from '@/types/GestionRiesgo';

export function useRiesgoSelect() {
    const [riesgoSelect, setRiesgoSelect] = useState<SelectRiesgo | null>(null);

    const handleclickRiesgo = (selectRiesgo: SelectRiesgo) => {
        localStorage.setItem("RIESGO_SELECTED", JSON.stringify({ ...selectRiesgo }))
        setRiesgoSelect({ ...selectRiesgo })
    }

    return {
        riesgoSelect,
        setRiesgoSelect,
        handleclickRiesgo
    }
}

