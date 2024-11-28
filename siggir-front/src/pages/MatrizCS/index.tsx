import { PaginationSearchProvider } from "@/contexts";
import { ListMatrizCS } from "./components";
import { CAMBIO_SIG } from "@/controllers/DataGeneral";

export default function MatrizCambioSignificativo() {
    return (
        <PaginationSearchProvider
            datas={CAMBIO_SIG}
        >
            <ListMatrizCS />
        </PaginationSearchProvider>
    )
}