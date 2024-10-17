import { PaginationSearchProvider } from "@/contexts";
import { PERFILES } from "@/core/DataGeneral";
import { PerfilesList } from "./components";

export default function MantenedorPerfiles() {
    return (
        <PaginationSearchProvider
            datas={PERFILES}
        >
            <PerfilesList />
        </PaginationSearchProvider>
    )
}