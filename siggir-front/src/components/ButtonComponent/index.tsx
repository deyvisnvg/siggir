import { Button } from 'keep-react'
import { FC } from 'react';
import { ButtonVariant, ColorVariant, Variant, SizeVariant } from '@/types/core';

interface Props {
    type?: ButtonVariant;
    iconButton?: FC;
    size?: SizeVariant;
    variant?: Variant;
    text: string;
    color: ColorVariant;
    onClick?: () => void
}

export default function ButtonComponent({
    type = "button",
    iconButton: IconButton,
    size = "sm",
    variant = "default",
    text,
    color,
    onClick,
}: Readonly<Props>) {
    return (
        <Button
            type={type}
            size={size}
            variant={variant}
            color={color}
            onClick={onClick}
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