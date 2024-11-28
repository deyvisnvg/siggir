import { useState } from "react";
import { ColorSpanish } from '@/utils/ColorTailwindcss';

interface ActiveColor {
    nameColor: string;
    colorStyle: string;
}

export function useColor() {
    const [activeColor, setActiveColor] = useState<ActiveColor | null>(null);

    const handleClickColor = (color: string) => {
        const [_, colorName, tonalidad] = color.split("-");

        if (colorName in ColorSpanish) {
            const colorSpanish = ColorSpanish[colorName];
            setActiveColor({
                nameColor: tonalidad
                    ? `${colorSpanish} ${tonalidad}`
                    : `${colorSpanish}`,
                colorStyle: color
            })
        }
    }

    return {
        activeColor,
        setActiveColor,
        handleClickColor,
    }
}

