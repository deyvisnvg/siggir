import { PaginationSearchProvider } from "@/contexts";
import { MENU } from "@/controllers/DataGeneral";
import { MenuList } from "./components";

export default function MantenedorPerfiles() {
    return (
        <PaginationSearchProvider
            datas={MENU}
        >
            <MenuList />
        </PaginationSearchProvider>
    )
}