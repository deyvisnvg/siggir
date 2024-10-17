import { PaginationSearchProvider } from "@/contexts";
import { ASIG_PERFILES } from "@/core/DataGeneral";
import { AsigPerfilesList } from "./components";

export default function MantenedorPerfiles() {
    return (
        <PaginationSearchProvider
            datas={ASIG_PERFILES}
        >
            <AsigPerfilesList />
        </PaginationSearchProvider>
    )
}