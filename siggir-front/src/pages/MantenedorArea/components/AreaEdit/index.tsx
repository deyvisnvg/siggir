import { ButtonComponent } from "@/components";

export default function AreaEdit() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="area" className="text-sm font-medium">Nombre del area</label>
                    <input type="text"
                        id="area"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Area"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="gerencia" className="text-sm font-medium">Gerencia perteneciente</label>
                    <input type="text"
                        id="gerencia"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese gerencia perteneciente"
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