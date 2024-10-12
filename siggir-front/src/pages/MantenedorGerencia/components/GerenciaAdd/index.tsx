import { ButtonComponent } from "@/components";

export default function GerenciaAdd() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <label htmlFor="gerencia" className="text-sm font-medium">Nombre de gerencia</label>
                <input type="text"
                    id="gerencia"
                    className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                    placeholder="Ingrese gerencia"
                />
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