import { PaginationSearchProvider } from "@/contexts";
import { CargoList } from "./CargoList";
import { CARGO } from "@/core/Cargo";

export default function MantenedorCargo() {
    return (
        <PaginationSearchProvider
            datas={CARGO}
        >
            <CargoList />
        </PaginationSearchProvider>
    )
}