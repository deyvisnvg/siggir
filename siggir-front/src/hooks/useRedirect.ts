import { useState } from "react";
import { useNavigate } from 'react-router-dom';

interface Props {
    id: number;
}

export function useRedirect() {
    const navigate = useNavigate();

    const handleRedirect = (type: string, props: Props) => {
        navigate(`${type}`, { state: props });
    };

    return {
        handleRedirect
    }
}