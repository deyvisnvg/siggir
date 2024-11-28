import { PaginationSearchProvider } from "@/contexts";
import GrupoInteresList from "./components/GrupoInteresList";
import { useEffect } from "react";
import { GrupoInteresListEmpty } from "../MantenedorGrupoInteres/components";
import { GrupoInteresController } from "@/controllers";

export default function MantenedorGrupoInteres() {
    const {grupoIntereses, readGrupoInteres} = GrupoInteresController();

    useEffect(() => {
        readGrupoInteres();
    }, [])

    if (grupoIntereses == undefined) {
        return <div>Cargando...</div>;
    }

    if (grupoIntereses.length == 0) {
        return (
            <GrupoInteresListEmpty getGrupoInteres={readGrupoInteres} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={grupoIntereses}
        >
            <GrupoInteresList getGrupoInteres={readGrupoInteres} />
        </PaginationSearchProvider>
    )
}