import {
    Avatar,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
} from 'keep-react'

import { Riesgos } from "@/types/Riesgos";
import { ReactNode } from 'react';
import { IconUserFilled } from '@tabler/icons-react';

interface Props {
    RiesgosData: Riesgos[];
    children: ReactNode;
}

interface Color {
    [key: string]: string;
}

const DropdownComponent = ({ RiesgosData, children }: Props) => {
    const colores: Color = {
        red: "text-red-600",
        green: "text-green-600",
        orange: "text-orange-600",
        cyan: "text-cyan-600",
        yellow: "text-yellow-600"
    };

    return (
        <Dropdown>
            <DropdownAction asChild>
                {children}
            </DropdownAction>
            <DropdownContent className='shadow-2xl'>
                <div className='cursor-default'>
                    <p className='text-black text-body-4 pb-2'>Gestión de Riesgos</p>
                </div>
                <DropdownList>
                    {RiesgosData.map(({ id, name, abreviatura, color }) => (
                        <DropdownItem key={id} className="text-xs focus:outline-none">
                            <div>
                                <Avatar className='size-11'>
                                    <span className={`font-extrabold ${colores[color]}`}>{abreviatura}</span>
                                </Avatar>
                            </div>
                            <div className=''>
                                <p className="font-semibold">{name}</p>
                            </div>
                        </DropdownItem>
                    ))}
                </DropdownList>
                <DropdownList>
                    <div className='cursor-default'>
                        <p className='text-black text-body-4 pb-2'>Usuario</p>
                    </div>
                    <DropdownItem>
                        <div className='flex gap-3'>
                            <IconUserFilled />
                            <p className=''>Perfil</p>
                        </div>
                    </DropdownItem>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default DropdownComponent;