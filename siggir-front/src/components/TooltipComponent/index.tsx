import { Tooltip, TooltipAction, TooltipContent } from 'keep-react'
import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const TooltipComponent = ({ children }: Props) => {
    return (
        <Tooltip placement="right">
            <TooltipAction className=''>{children}</TooltipAction>
            <TooltipContent>
                <p className="text-body-5 font-medium text-white">Despliegue Opciones</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default TooltipComponent;