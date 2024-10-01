import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    textContent: string;
    positionTooltip: any
}

const TooltipComponent = ({ children, textContent, positionTooltip }: Props) => {
    return (
        <Tooltip placement={positionTooltip}>
            <TooltipAction>{children}</TooltipAction>
            <TooltipContent>
                <p className="text-body-5 font-medium text-white">{textContent}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default TooltipComponent;