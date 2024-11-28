import { PaginationSearchProvider } from "@/contexts";
import { GestionRiesgoListEmpty, GestionRiesgoList } from "./components";
import { GestionRiesgoController } from "@/controllers";
import { useEffect } from "react";

export default function MantenedorGestionRiesgo() {
    const {
        gestionRiesgos,
        readGestionRiesgo,
    } = GestionRiesgoController();

    useEffect(() => {
        readGestionRiesgo();
    }, [])

    if (gestionRiesgos === undefined) {
        return <div>Cargando...</div>;
    }

    if (gestionRiesgos.length == 0) {
        return (
            <GestionRiesgoListEmpty getGestionRiesgo={readGestionRiesgo} />
        )
    }

    return (
        <PaginationSearchProvider
            datas={gestionRiesgos}
        >
            <GestionRiesgoList getGestionRiesgo={readGestionRiesgo}/>
        </PaginationSearchProvider>
    )
}