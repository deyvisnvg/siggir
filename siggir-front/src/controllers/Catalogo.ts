import { read } from "@/services";
import { useState } from "react";
import { toast } from "keep-react";
import { CatalogoData } from "@/types/Catalogo";

export default function CatalogoController() {
    const [catalogos, setCatalogos] = useState<CatalogoData[] | undefined>(undefined);

    async function findCatalogoByCodigo(codigoCatalogo: Array<string>) {
        try {
            const { ok, data } = await read({
                url: "catalogo/all",
                params: { codigo: JSON.stringify(codigoCatalogo) }
            });
            console.log("Catalogoo", data)

            if (!ok) {
                toast.error("No se pudo obtener la data");
                return;
            }
            setCatalogos(data);
        } catch (error) {
            toast.error("Error al obtener la data");
        }
    }

    return {
        catalogos,
        findCatalogoByCodigo,
    }
}