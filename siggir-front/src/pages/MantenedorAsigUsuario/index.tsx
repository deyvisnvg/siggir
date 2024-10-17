import { PaginationSearchProvider } from "@/contexts";
import { ASIG_USUARIOS } from "@/core/DataGeneral";
import { AsigUsuarioList } from "./components";

export default function MantenedorPerfiles() {
    return (
        <PaginationSearchProvider
            datas={ASIG_USUARIOS}
        >
            <AsigUsuarioList />
        </PaginationSearchProvider>
    )
}