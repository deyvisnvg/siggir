import { PaginationSearchProvider } from "@/contexts";
import MacroprocesoList from "./components/MacroprocesoList";
import { MACROPROCESOS } from "@/core/DataGeneral";

export default function MantenedorMacroproceso() {
    return (
        <PaginationSearchProvider
            datas={MACROPROCESOS}
        >
            <MacroprocesoList />
        </PaginationSearchProvider>
    )
}