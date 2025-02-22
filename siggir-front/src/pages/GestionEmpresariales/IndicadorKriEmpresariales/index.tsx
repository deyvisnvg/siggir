import { PaginationSearchProvider } from "@/contexts";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { IndicadorKriEmpList, IndicadorKriEmpListEmpty } from "./components";
import IndicadorKriController from "@/controllers/IndicadorKri";
import { useLocation, useNavigate } from "react-router-dom";

export default function IndicadorKriEmpresariales() {
    const navigate = useNavigate();
    const location = useLocation();

    const riesgoId = location.state?.id;
    console.log("iddd", riesgoId)

    const { indicadorKris, findAllIndicadorKriByIdRiesgo } = IndicadorKriController();

    if (!riesgoId) {
        navigate('/riesgosEmpresariales');
        return null;
    }

    const initialize = () => {
        findAllIndicadorKriByIdRiesgo(riesgoId);
    }

    useEffectOnce(initialize);

    if (indicadorKris == undefined) {
        return <div>Cargando...</div>;
    }

    if (indicadorKris.length == 0) {
        return (
            <IndicadorKriEmpListEmpty
                getIndicadorKriByIdRiesgo={findAllIndicadorKriByIdRiesgo}
                idRiesgo={riesgoId}
            />
        )
    }

    return (
        <PaginationSearchProvider
            datas={indicadorKris}
        >
            <IndicadorKriEmpList
                getIndicadorKriByIdRiesgo={findAllIndicadorKriByIdRiesgo}
                idRiesgo={riesgoId}
            />
        </PaginationSearchProvider>
    )
}