import { ButtonComponent } from "@/components";

export default function SubProcesoAdd() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="codigo" className="text-sm font-medium">Código subproceso</label>
                    <input type="text"
                        id="codigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código subproceso"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subproceso" className="text-sm font-medium">Nombre subproceso</label>
                    <input type="text"
                        id="subproceso"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre subproceso"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cargo" className="text-sm font-medium">Cargo responsable</label>
                    <input type="text"
                        id="cargo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Select option"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="macroproceso" className="text-sm font-medium">Macroproceso perteneciente</label>
                    <input type="text"
                        id="macroproceso"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Select option"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="proceso" className="text-sm font-medium">Proceso perteneciente</label>
                    <input type="text"
                        id="proceso"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Select option"
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