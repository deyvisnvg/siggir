import { PaginationSearchProvider } from "@/contexts";
import MacroprocesoList from "./components/MacroprocesoList";
import { useEffect } from "react";
import { MacroprocesoListEmpty } from "./components";
import { MacroprocesoController } from "@/controllers";

export default function MantenedorMacroproceso() {
    const {
        macroprocesos,
        readMacroproceso,
    } = MacroprocesoController();

    useEffect(() => {
        readMacroproceso();
    }, [])

    if (macroprocesos === undefined) {
        return <div>Cargando...</div>;
    }

    if (macroprocesos.length == 0) {
        return (
            <MacroprocesoListEmpty getMacroproceso={readMacroproceso} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={macroprocesos}
        >
            <MacroprocesoList getMacroproceso={readMacroproceso}/>
        </PaginationSearchProvider>
    )
}