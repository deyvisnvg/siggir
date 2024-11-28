import { PaginationSearchProvider } from "@/contexts";
import CargoList from "./components/CargoList";
import { CargoListEmpty } from "./components";
import { CargoController } from "@/controllers";
import { useEffect } from "react";

export default function MantenedorCargo() {
    const {
        cargos,
        readCargo,
    } = CargoController();

    useEffect(() => {
        readCargo();
    }, [])

    if (cargos === undefined) {
        return <div>Cargando...</div>;
    }

    if (cargos.length == 0) {
        return (
            <CargoListEmpty getCargo={readCargo} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={cargos}
        >
            <CargoList getCargo={readCargo}/>
        </PaginationSearchProvider>
    )
}