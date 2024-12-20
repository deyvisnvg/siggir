import { ButtonComponent } from "@/components";

interface Props {
    /* getGerencia: () => void; */
    idProcesoMacro: string | number;
    /* setOpenModal: (open: boolean) => void; */
}

export default function ProcesoEditMacro({ idProcesoMacro }: Props) {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="codigo" className="text-sm font-medium">Código proceso</label>
                    <input type="text"
                        id="codigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código proceso"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="proceso" className="text-sm font-medium">Nombre proceso</label>
                    <input type="text"
                        id="proceso"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre proceso"
                    />
                </div>
            </div>
            <div className="text-center pt-7">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Registrar"
                    color="primary"
                />
            </div>
        </form>
    )
}