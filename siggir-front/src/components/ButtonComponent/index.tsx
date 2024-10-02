import { Button } from 'keep-react'
import { FC } from 'react';

interface Props {
    handleClick?: () => void;
    iconButton: FC;
    size: any;
    variant?: any;
    text: string;
    color: any;
}

export default function ButtonComponent({
    handleClick,
    iconButton: IconButton,
    size,
    variant,
    text,
    color,
}: Readonly<Props>) {

    return (
        <Button
            type="submit"
            onClick={handleClick}
            size={size}
            variant={variant}
            color={color}
        >
            <IconButton />
            <div className='px-1.5'>
                {text}
            </div>
        </Button>
    )
}