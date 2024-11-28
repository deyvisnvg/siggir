import { ReactNode } from "react"

interface Props {
    label: string;
    content: ReactNode;
}

export default function TooltipHint({ label, content }: Props) {
    return (
        <span className={
            `hint--left
            hint--no-arrow 
            hint--rounded hover:text-green-700 size-6 cursor-pointer`}
            aria-label={label}
        >
            {content}
        </span>
    )
}