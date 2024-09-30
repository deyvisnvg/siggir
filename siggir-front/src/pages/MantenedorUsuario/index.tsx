import { PaginationSearchProvider } from "@/contexts";
import { UsuarioList } from "./UsuarioList"
import { USUARIOS } from "@/core/Usuarios";

export default function MantenedorUsuario() {
    return (
        <PaginationSearchProvider
            datas={USUARIOS}
        >
            <UsuarioList />
        </PaginationSearchProvider>
    )
}