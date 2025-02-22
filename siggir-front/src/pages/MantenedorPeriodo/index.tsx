import { PaginationSearchProvider } from "@/contexts";
import PeriodoList from "./components/PeriodoList";
import { useEffect } from "react";
import { PeriodoListEmpty } from "./components";
import { PeriodoController } from "@/controllers";

export default function MantenedorPeriodo() {
    const {
        periodos,
        readPeriodo,
    } = PeriodoController();

    useEffect(() => {
        readPeriodo();
    }, [])

    if (periodos === undefined) {
        return <div>Cargando...</div>;
    }

    if (periodos.length == 0) {
        return (
            <PeriodoListEmpty getPeriodo={readPeriodo} />
        )
    }
    return (
        <PaginationSearchProvider
            datas={periodos}
        >
            <PeriodoList getPeriodo={readPeriodo} />
        </PaginationSearchProvider>
    )
}