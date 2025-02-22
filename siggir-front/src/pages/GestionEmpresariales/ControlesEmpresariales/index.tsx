import { PaginationSearchProvider } from "@/contexts";
import { ControlController } from "@/controllers";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { ControlesEmpList, ControlesEmpListEmpty } from "./components";
import { useLocation, useNavigate } from "react-router-dom";

export default function ControlesEmpresariales() {
    const navigate = useNavigate();
    const location = useLocation();

    const riesgoId = location.state?.id;
    console.log("iddd", riesgoId)

    const { controles, findAllControlByIdRiesgo } = ControlController();

    if (!riesgoId) {
        navigate('/riesgosEmpresariales');
        return null;
    }

    const initialize = () => {
        findAllControlByIdRiesgo(riesgoId);
    }

    useEffectOnce(initialize);

    if (controles == undefined) {
        return <div>Cargando...</div>;
    }

    if (controles.length == 0) {
        return (
            <ControlesEmpListEmpty
                getControlByIdRiesgo={findAllControlByIdRiesgo}
                idRiesgo={riesgoId}
            />
        )
    }

    return (
        <PaginationSearchProvider
            datas={controles}
        >
            <ControlesEmpList
                getControlByIdRiesgo={findAllControlByIdRiesgo}
                idRiesgo={riesgoId}
            />
        </PaginationSearchProvider>
    )
}