import { PaginationSearchProvider } from "@/contexts";
import { MACROPROCESOS } from "@/core/DataGeneral";
import { useLocation } from "react-router-dom";
import { SubProcesoList, SubProcesoListPro } from "./components";

export default function MantenedorSubProceso() {
    const location = useLocation();
    const { id_proceso, id_macroproceso } = location.state || {};
    let subprocesos;

    if (id_proceso) {
        subprocesos = MACROPROCESOS.flatMap(data => {
            if (data.id == id_macroproceso) {
                return data.procesos.flatMap(proceso => {
                    if (proceso.id == id_proceso) {
                        return proceso.subprocesos.map(subproceso => ({
                            ...subproceso,
                            macroproceso: data.macroproceso,
                            proceso: proceso.proceso
                        }))
                    }
                    return []
                })
            }
            return []
        })
    } else {
        subprocesos = MACROPROCESOS.flatMap(data => {
            return data.procesos.flatMap(proceso => {
                return proceso.subprocesos.map(subproceso => ({
                    ...subproceso,
                    macroproceso: data.macroproceso,
                    proceso: proceso.proceso
                }))
            })
        })
    }

    return (
        <PaginationSearchProvider
            datas={subprocesos}
        >
            {
                id_proceso ? <SubProcesoListPro />
                    : <SubProcesoList />
            }
        </PaginationSearchProvider>
    )
}