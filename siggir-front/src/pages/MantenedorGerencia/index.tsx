import { PaginationSearchProvider } from "@/contexts";
import GerenciaList from "./components/GerenciaList";
import { GERENCIA } from "@/core/Gerencia";

export default function MantenedorGerencia() {
    return (
        <PaginationSearchProvider
            datas={GERENCIA}
        >
            <GerenciaList />
        </PaginationSearchProvider>
    )
}