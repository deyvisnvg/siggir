import { PaginationSearchProvider } from "@/contexts";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { PlanAccionEmpList, PlanAccionEmpListEmpty } from "./components";
import { useLocation, useNavigate } from "react-router-dom";
import PlanAccionController from "@/controllers/PlanAccion";

export default function MantenedorRiesgo() {
    const navigate = useNavigate();
    const location = useLocation();

    const riesgoId = location.state?.id;
    console.log("iddd", riesgoId)

    const { planAcciones, findAllPlanAccionByIdRiesgo } = PlanAccionController();

    if (!riesgoId) {
        navigate('/riesgosEmpresariales');
        return null;
    }

    const initialize = () => {
        findAllPlanAccionByIdRiesgo(riesgoId);
    }

    useEffectOnce(initialize);

    if (planAcciones == undefined) {
        return <div>Cargando...</div>;
    }

    if (planAcciones.length == 0) {
        return (
            <PlanAccionEmpListEmpty
                getPlanAccionByIdRiesgo={findAllPlanAccionByIdRiesgo}
                idRiesgo={riesgoId}
            />
        )
    }

    return (
        <PaginationSearchProvider
            datas={planAcciones}
        >
            <PlanAccionEmpList
                getPlanAccionByIdRiesgo={findAllPlanAccionByIdRiesgo}
                idRiesgo={riesgoId}
            />
        </PaginationSearchProvider>
    )
}