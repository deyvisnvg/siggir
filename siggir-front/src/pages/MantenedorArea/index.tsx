import { PaginationSearchProvider } from "@/contexts";
import AreaList from "./components/AreaList";
import { useEffect } from "react";
import { AreaListEmpty } from "./components";
import { AreaController } from "@/controllers";

export default function MantenedorArea() {
    const {
        areas,
        readArea,
    } = AreaController();

    useEffect(() => {
        readArea();
    }, [])

    if (areas === undefined) {
        return <div>Cargando...</div>;
    }

    if (areas.length == 0) {
        return (
            <AreaListEmpty getArea={readArea} />
        )
    }
    return (
        <PaginationSearchProvider
            datas={areas}
        >
            <AreaList getArea={readArea} />
        </PaginationSearchProvider>
    )
}