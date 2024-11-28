import { PaginationSearchProvider } from "@/contexts";
import FodaList from "./components/FodaList";
import { useEffect } from "react";
import { FodaListEmpty } from "../MantenedorFoda/components";
import { FodaController } from "@/controllers";

export default function MantenedorFoda() {
    const { fodas, readFoda } = FodaController();

    useEffect(() => {
        readFoda();
    }, [])

    if (fodas == undefined) {
        return <div>Cargando...</div>;
    }

    if (fodas.length == 0) {
        return (
            <FodaListEmpty getFoda={readFoda} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={fodas}
        >
            <FodaList getFoda={readFoda} />
        </PaginationSearchProvider>
    )
}