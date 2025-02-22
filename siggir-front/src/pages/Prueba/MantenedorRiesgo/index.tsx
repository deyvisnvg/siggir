import { useEffect, useState } from "react";
import { PaginationSearchProvider } from "@/contexts";
import RiesgoList from "./components/RiesgoList";
import { RiesgoListEmpty } from "./components";
import { RiesgoController } from "@/controllers";
import { useEffectOnce } from "@/hooks/useEffectOnce";

export default function MantenedorRiesgo() {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const {
        riesgos,
        findAllRiesgoByIdGestion
    } = RiesgoController();

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            findAllRiesgoByIdGestion(Number(gestionId));
        }
    }

    useEffectOnce(initialize);

    if (riesgos == undefined) {
        return <div>Cargando...</div>;
    }

    if (riesgos.length == 0) {
        return (
            <RiesgoListEmpty getRiesgoByIdGestion={findAllRiesgoByIdGestion} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={riesgos}
        >
            <RiesgoList getRiesgoByIdGestion={findAllRiesgoByIdGestion} />
        </PaginationSearchProvider>
    )
}