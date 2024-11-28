import { ButtonComponent } from "@/components";
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from "keep-react";

interface Props {
    /* getGerencia: () => void; */
    idAsigPerfil: string | number;
    /* setOpenModal: (open: boolean) => void; */
}

export default function AsigPerfilesEdit({ idAsigPerfil }: Props) {
    return (
        <form action="" className="px-2">
            <div className="grid grid-cols-2 gap-x-8 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="perfiles" className="text-sm font-medium">Perfiles</label>
                    <Select defaultValue="jd">
                        <SelectAction className="w-[12rem]">
                            <SelectValue placeholder="Seleccione" />
                        </SelectAction>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Perfiles</SelectLabel>
                                <SelectItem value="jd">Perfil 1</SelectItem>
                                <SelectItem value="am">Perfil 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="estado" className="text-sm font-medium">Estado</label>
                    <Select>
                        <SelectAction className="w-[12rem]">
                            <SelectValue placeholder="Seleccione" />
                        </SelectAction>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Estado</SelectLabel>
                                <SelectItem value="jd">Activo</SelectItem>
                                <SelectItem value="am">Inactivo</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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