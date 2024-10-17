import { ButtonComponent } from "@/components";

export default function AsigPerfilesAdd() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="perfiles" className="text-sm font-medium">Perfiles</label>
                    <input type="text"
                        id="perfiles"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Select option"
                    />
                </div>
            </div>
            <div className="text-center pt-7">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Asignar"
                    color="primary"
                />
            </div>
        </form>
    )
}