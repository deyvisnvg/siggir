import { PaginationSearchProvider } from "@/contexts";
import UsuarioList from "./components/UsuarioList";
import { UsuarioListEmpty } from "./components";
import { UsuarioController } from "@/controllers";
import { useEffect } from "react";

export default function MantenedorUsuario() {
    const {
        personas,
        readUsuario,
    } = UsuarioController();

    useEffect(() => {
        readUsuario();
    }, [])

    if (personas === undefined) {
        return <div>Cargando...</div>;
    }

    if (personas.length == 0) {
        return (
            <UsuarioListEmpty getUsuario={readUsuario} />
        )
    }
    return (
        <PaginationSearchProvider
            datas={personas}
        >
            <UsuarioList getUsuario={readUsuario} />
        </PaginationSearchProvider>
    )
}