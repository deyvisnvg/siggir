import {
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownList,
} from 'keep-react'
import { FC, ReactNode } from 'react';
import TooltipComponent from '../TooltipComponent';

interface Props {
    children: ReactNode;
    iconButton: FC;
    textTooltip: string;
    positionTooltip?: string;
    positionDropdown?: any;
    simpleTooltip?: boolean;
}

const DropdownComponent = ({
    children,
    iconButton: IconButton,
    textTooltip,
    positionTooltip,
    positionDropdown,
    simpleTooltip
}: Props) => {
    return (
        <Dropdown placement={positionDropdown}>
            {
                simpleTooltip ?
                    <DropdownAction asChild>
                        {/* <button> */}
                            <span className={
                                `hint--${positionTooltip}
                                hint--no-arrow 
                                hint--rounded hover:text-green-700 size-6 cursor-pointer focus:outline-none`}
                                aria-label={textTooltip}
                            >
                                <IconButton />
                            </span>
                        {/* </button> */}
                    </DropdownAction>
                    :
                    <TooltipComponent
                        textContent={textTooltip}
                        positionTooltip={positionTooltip}
                    >
                        <DropdownAction asChild>
                            <IconButton />
                        </DropdownAction>
                    </TooltipComponent>
            }
            <DropdownContent className="max-w-max border border-metal-100 p-5 shadow-2xl">
                <DropdownList>
                    {children}
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}

export default DropdownComponent;