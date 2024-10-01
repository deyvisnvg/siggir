import {
    DropdownItem,
    Avatar
} from 'keep-react';
import { IconUserFilled } from '@tabler/icons-react';
import { RIESGOS } from "@/core/Riesgos";

interface Color {
    [key: string]: string;
}

export default function DropdownList() {
    const colores: Color = {
        red: "text-red-600",
        green: "text-green-600",
        orange: "text-orange-600",
        cyan: "text-cyan-600",
        yellow: "text-yellow-600"
    };

    return (
        <>
            <div>
                <div className='cursor-default'>
                    <p className='text-black text-body-4 pb-2'>Gestión de Riesgos</p>
                </div>
                {
                    RIESGOS.map(({ id, name, abreviatura, color }) => (
                        <DropdownItem key={id} className="text-xs">
                            <div>
                                <Avatar className='size-11'>
                                    <span className={`font-extrabold ${colores[color]}`}>{abreviatura}</span>
                                </Avatar>
                            </div>
                            <div className=''>
                                <p className="font-semibold">{name}</p>
                            </div>
                        </DropdownItem>
                    ))
                }
            </div>
            <div>
                <div className='cursor-default'>
                    <p className='text-black text-body-4 pb-2'>Usuario</p>
                </div>
                <DropdownItem>
                    <div className='flex gap-3'>
                        <IconUserFilled />
                        <p className=''>Perfil</p>
                    </div>
                </DropdownItem>
            </div>
        </>
    )
}