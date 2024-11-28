import { PaginationSearchProvider } from "@/contexts";
import { PERFILES } from "@/controllers/DataGeneral";
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