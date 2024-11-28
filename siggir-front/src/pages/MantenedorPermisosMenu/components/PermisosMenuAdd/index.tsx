import {
    Select,
    SelectAction,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue
} from "keep-react";
import { ButtonComponent } from "@/components";

export default function PermisosMenuAdd() {
    return (
        <form action="" className="px-2">
            <div className="flex flex-col gap-y-3 pt-3.5">
                <div className="flex flex-col gap-y-0.5">
                    <label htmlFor="usaurios" className="text-sm font-medium">Menu</label>
                    <Select>
                        <SelectAction className="w-[12rem]">
                            <SelectValue placeholder="Seleccione" />
                        </SelectAction>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Menu</SelectLabel>
                                <SelectItem value="jd">Menu 1</SelectItem>
                                <SelectItem value="am">Menu 2</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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