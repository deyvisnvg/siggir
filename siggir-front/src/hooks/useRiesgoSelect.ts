import { useState } from "react";
import { GestionRiesgoData } from '@/types/GestionRiesgo';
import { useNavigate } from "react-router-dom";

export function useRiesgoSelect() {
    const navigate = useNavigate();
    const [riesgoSelect, setRiesgoSelect] = useState<GestionRiesgoData | null>(null);

    const handleClickRiesgo = (selectRiesgo: GestionRiesgoData) => {
        localStorage.setItem("RIESGO_SELECTED", JSON.stringify({ ...selectRiesgo }))
        setRiesgoSelect({ ...selectRiesgo })
        navigate('/home');
    }

    return {
        riesgoSelect,
        setRiesgoSelect,
        handleClickRiesgo
    }
}

