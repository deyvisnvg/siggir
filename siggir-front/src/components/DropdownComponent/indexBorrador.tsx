import {
    Dropdown,
    DropdownAction,
    DropdownContent,
} from 'keep-react'
import { ReactNode } from 'react';
import { Size } from '@/types/core';

interface Props {
    children: ReactNode;
    iconButtonDropdown: ReactNode;
    positionDropdown?: any;
    size?: Size;
}

const DropdownComponent = ({
    children,
    iconButtonDropdown,
    positionDropdown,
    size = "small",
}: Props) => {

    const sizes = {
        small: "p-2.5",
        medium: "p-4",
        large: "p-5",
    };

    return (
        <Dropdown>
            <DropdownAction asChild>
                {iconButtonDropdown}
            </DropdownAction>
            <div className='absolute z-20'>
                <DropdownContent className={`max-w-max shadow-lg shadow-gray-400 ${sizes[size]}`} side={positionDropdown} align='start'>
                    {children}
                </DropdownContent>
            </div>
        </Dropdown>
    )
}

export default DropdownComponent;