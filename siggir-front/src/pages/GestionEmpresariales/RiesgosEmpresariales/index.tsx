import { PaginationSearchProvider } from "@/contexts";
import { RiesgoController } from "@/controllers";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { RiesgosEmpList, RiesgosEmpListEmpty } from "./components";

export default function MantenedorRiesgo() {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const {
        riesgos,
        findAllRiesgoByIdGestion
    } = RiesgoController();

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            findAllRiesgoByIdGestion(gestionId);
        }
    }

    useEffectOnce(initialize);

    if (riesgos == undefined) {
        return <div>Cargando...</div>;
    }

    if (riesgos.length == 0) {
        return (
            <RiesgosEmpListEmpty getRiesgoByIdGestion={findAllRiesgoByIdGestion} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={riesgos}
        >
            <RiesgosEmpList getRiesgoByIdGestion={findAllRiesgoByIdGestion} />
        </PaginationSearchProvider>
    )
}