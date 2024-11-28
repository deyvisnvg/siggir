import { Tooltip, TooltipAction, TooltipArrow, TooltipContent, TooltipProvider } from 'keep-react'
import { ReactNode } from 'react';

interface Props {
    label: string;
    positionTooltip: any
    content: ReactNode;
}

const TooltipComponent = ({ label, positionTooltip, content }: Props) => {
    return (
        <TooltipProvider delayDuration={350}>
            <Tooltip>
                <TooltipAction asChild className='rounded-md size-8 p-1 hover:bg-green-600'>
                    {content}
                </TooltipAction>
                <TooltipContent side={positionTooltip}>
                    <TooltipArrow />
                    <p className="text-body-5 font-medium text-white">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default TooltipComponent;