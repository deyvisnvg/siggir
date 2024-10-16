import { ButtonComponent } from "@/components";

export default function MacroprocesoEdit() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="codigo" className="text-sm font-medium">Código macroproceso</label>
                    <input type="text"
                        id="codigo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese código macroproceso"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="macroproceso" className="text-sm font-medium">Nombre macroproceso</label>
                    <input type="text"
                        id="macroproceso"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre macroproceso"
                    />
                </div>
            </div>
            <div className="text-center pt-7">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Editar"
                    color="primary"
                />
            </div>
        </form>
    )
}