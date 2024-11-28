import { ButtonComponent } from "@/components";

interface Props {
    /* getGerencia: () => void; */
    idPerfil: string | number;
    /* setOpenModal: (open: boolean) => void; */
}

export default function PerfilesEdit({ idPerfil }: Props) {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="perfil" className="text-sm font-medium">Nombre del Perfil</label>
                    <input type="text"
                        id="perfil"
                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                        placeholder="Ingrese nombre perfil"
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