import { PaginationSearchProvider } from "@/contexts";
import { ProcesoList, ProcesoListEmpty, ProcesoListMacro } from "./components";
/* import { MACROPROCESOS } from "@/controllers/DataGeneral";*/
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ProcesoController } from "@/controllers";

export default function MantenedorProceso() {
    const location = useLocation();
    const { id } = location.state || {};
    /* let procesos; */

    /* if (id) {
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
    } */
    const {
        procesos,
        readProceso,
    } = ProcesoController();

    useEffect(() => {
        readProceso();
    }, [])

    if (procesos === undefined) {
        return <div>Cargando...</div>;
    }

    if (procesos.length == 0) {
        return (
            <ProcesoListEmpty getProceso={readProceso} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={procesos}
        >
            {
                id ? <ProcesoListMacro getProceso={readProceso} />
                    : <ProcesoList getProceso={readProceso} />
            }

        </PaginationSearchProvider>
    )
}