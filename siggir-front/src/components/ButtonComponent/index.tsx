import { Button } from 'keep-react'
import { FC } from 'react';
import { ButtonVariant } from '@/types/core'

interface Props {
    type?: ButtonVariant;
    iconButton?: FC;
    size: any;
    variant?: any;
    text: string;
    color: any;
}

export default function ButtonComponent({
    type = "button",
    iconButton: IconButton,
    size,
    variant,
    text,
    color,
}: Readonly<Props>) {

    return (
        <Button
            type={type}
            size={size}
            variant={variant}
            color={color}
        >
            {
                IconButton ? <IconButton /> : ""
            }

            <div className='px-1.5'>
                {text}
            </div>
        </Button>
    )
}