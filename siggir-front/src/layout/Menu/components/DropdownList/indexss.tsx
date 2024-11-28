import {
    DropdownItem,
    DropdownLabel,
    DropdownArrow,
    DropdownGroup
} from 'keep-react';
import { IconUserFilled } from '@tabler/icons-react';
import { RIESGOS } from "@/controllers/Riesgos";

interface Color {
    [key: string]: string;
}

interface Props {
    onRiesgoChange?: (name: string, abreviatura: string, color: string) => void
}

export default function DropdownList({ onRiesgoChange }: Props) {
    const colores: Color = {
        red: "text-red-600",
        green: "text-green-600",
        orange: "text-orange-600",
        cyan: "text-cyan-600",
        yellow: "text-yellow-600"
    };

    return (
        <>
            <DropdownLabel className='text-body-4'>Gestión de Riesgos</DropdownLabel>
            <DropdownArrow />
            <DropdownGroup>
                {
                    RIESGOS.map(({ id, name, abreviatura, color }) => (
                        <DropdownItem
                            key={id}
                            className="text-xs"
                        >
                            <div
                                className='flex gap-x-2.5 items-center'
                                onClick={() => onRiesgoChange && onRiesgoChange(name, abreviatura, color)}
                            >
                                <span className={`font-extrabold outline-dashed outline-1 rounded-full p-3 ${colores[color]}`}>{abreviatura}</span>
                                <p className="font-semibold">{name}</p>
                            </div>
                        </DropdownItem>
                    ))
                }
            </DropdownGroup>
            <DropdownLabel className='text-body-4'>Usuario</DropdownLabel>
            <DropdownArrow />
            <DropdownGroup>
                <DropdownItem>
                    <div className='flex gap-3'>
                        <IconUserFilled />
                        <p className=''>Perfil</p>
                    </div>
                </DropdownItem>
            </DropdownGroup>

        </>
    )
}