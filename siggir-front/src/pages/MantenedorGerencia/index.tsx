import { PaginationSearchProvider } from "@/contexts";
import GerenciaList from "./components/GerenciaList";
import { useEffect } from "react";
import { GerenciaListEmpty } from "../MantenedorGerencia/components";
import { GerenciaController } from "@/controllers";

export default function MantenedorGerencia() {
    const {
        gerencias,
        readGerencia,
    } = GerenciaController();

    useEffect(() => {
        readGerencia();
    }, [])

    if (gerencias == undefined) {
        return <div>Cargando...</div>;
    }

    if (gerencias.length == 0) {
        return (
            <GerenciaListEmpty getGerencia={readGerencia} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={gerencias}
        >
            <GerenciaList getGerencia={readGerencia} />
        </PaginationSearchProvider>
    )
}