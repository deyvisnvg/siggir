import { PaginationSearchProvider } from "@/contexts";
import { ProcesoList, ProcesoListMacro } from "./components";
import { MACROPROCESOS } from "@/core/DataGeneral";
import { useLocation } from "react-router-dom";

export default function MantenedorProceso() {
    const location = useLocation();
    const { id } = location.state || {};
    let procesos;

    if (id) {
        procesos = MACROPROCESOS.flatMap(data => {
            if (data.id == id) {
                return data.procesos.map(proceso => ({
                    ...proceso,
                    macroproceso: data.macroproceso,
                    id_macroproceso: data.id
                }))
            }
            return []
        })
    } else {
        procesos = MACROPROCESOS.flatMap(data => {
            return data.procesos.map(proceso => ({
                ...proceso,
                macroproceso: data.macroproceso,
                id_macroproceso: data.id
            }))
        })
    }

    return (
        <PaginationSearchProvider
            datas={procesos}
        >
            {
                id ? <ProcesoListMacro />
                    : <ProcesoList />
            }

        </PaginationSearchProvider>
    )
}