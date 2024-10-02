import {
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownList,
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
        <Dropdown placement={positionDropdown}>
            <DropdownAction asChild>
                {iconButtonDropdown}
            </DropdownAction>
            <div className='absolute z-20'>
                <DropdownContent className={`max-w-max shadow-2xl ${sizes[size]}`}>
                    <DropdownList>
                        {children}
                    </DropdownList>
                </DropdownContent>
            </div>
        </Dropdown>
    )
}

export default DropdownComponent;