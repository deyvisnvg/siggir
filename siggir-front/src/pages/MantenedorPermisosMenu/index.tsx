import { PaginationSearchProvider } from "@/contexts";
import { ASIG_PERMISOS_MENU } from "@/controllers/DataGeneral";
import { PermisosMenuList } from "./components";

export default function MantenedorPerfiles() {
    return (
        <PaginationSearchProvider
            datas={ASIG_PERMISOS_MENU}
        >
            <PermisosMenuList />
        </PaginationSearchProvider>
    )
}