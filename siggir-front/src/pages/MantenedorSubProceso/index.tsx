import { PaginationSearchProvider } from "@/contexts";
/* import { MACROPROCESOS } from "@/controllers/DataGeneral"; */
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SubProcesoList, SubProcesoListEmpty, SubProcesoListPro } from "./components";
import { SubprocesoController } from "@/controllers";

export default function MantenedorSubProceso() {
    const location = useLocation();
    const { id_proceso, id_macroproceso } = location.state || {};
    console.log(id_proceso)
    /* let subprocesos; */

    /* if (id_proceso) {
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
    } */

    const {
        subprocesos,
        readSubproceso,
    } = SubprocesoController();

    useEffect(() => {
        readSubproceso();
    }, [])

    if (subprocesos === undefined) {
        return <div>Cargando...</div>;
    }

    if (subprocesos.length == 0) {
        return (
            <SubProcesoListEmpty getSubproceso={readSubproceso} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={subprocesos}
        >
            {
                id_proceso ? <SubProcesoListPro />
                    : <SubProcesoList getSubproceso={readSubproceso} />
            }
        </PaginationSearchProvider>
    )
}