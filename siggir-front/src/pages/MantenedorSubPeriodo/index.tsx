import { PaginationSearchProvider } from "@/contexts";
import SubPeriodoList from "./components/SubPeriodoList";
import { useEffect } from "react";
import { SubPeriodoListEmpty } from "./components";
import { SubPeriodoController } from "@/controllers";
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function MantenedorSubPeriodo() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const idGestion = searchParams.get('idGestion');

    const { subperiodos, findSubPeriodoAllByIdGestionRaw } = SubPeriodoController();

    if (!idGestion) {
        navigate('/mantenedorGestionRiesgo');
        return null;
    }

    useEffect(() => {
        findSubPeriodoAllByIdGestionRaw(Number(idGestion));
    }, [])

    if (subperiodos === undefined) {
        return <div>Cargando...</div>;
    }

    if (subperiodos.length == 0) {
        return (
            <SubPeriodoListEmpty
                getSubPeriodoAllByIdGestion={findSubPeriodoAllByIdGestionRaw}
                idGestion={idGestion}
            />
        )
    }
    return (
        <PaginationSearchProvider
            datas={subperiodos}
        >
            <SubPeriodoList
                getSubPeriodoAllByIdGestion={findSubPeriodoAllByIdGestionRaw}
                idGestion={idGestion}
            />
        </PaginationSearchProvider>
    )
}