import { ButtonComponent } from "@/components";

export default function MenuEdit() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
            <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="menu" className="text-sm font-medium">Nombre del menu</label>
                    <input type="text"
                        id="menu"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre menu"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="url" className="text-sm font-medium">Dirección url</label>
                    <input type="text"
                        id="url"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese dirección url"
                    />
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="estado" className="text-sm font-medium">Estado</label>
                    <input type="text"
                        id="estado"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Select option"
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