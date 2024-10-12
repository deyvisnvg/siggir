import { PaginationSearchProvider } from "@/contexts";
import AreaList from "./components/AreaList";
import { AREA } from "@/core/Area";

export default function MantenedorArea() {
    return (
        <PaginationSearchProvider
            datas={AREA}
        >
            <AreaList />
        </PaginationSearchProvider>
    )
}