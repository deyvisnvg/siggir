import { ButtonComponent } from "@/components";

export default function CargoAdd() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col">
                    <label htmlFor="cargo" className="text-sm font-medium">Nombre del cargo</label>
                    <input type="text"
                        id="cargo"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese Cargo"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="area" className="text-sm font-medium">Area perteneciente</label>
                    <input type="text"
                        id="area"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese área perteneciente"
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