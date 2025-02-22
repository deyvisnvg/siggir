import { EffectCallback, useEffect, useRef } from "react"

export const useEffectOnce = (effect: () => void) => { // | Promise<void>
    const effectRan = useRef<boolean>(false);

    useEffect(() => {
        if (!effectRan.current) {
            effect();
            /* (async () => { await effect(); })(); */
            effectRan.current = true;
        }
    }, [effect])
}