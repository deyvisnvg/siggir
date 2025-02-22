'use client'

import { Plus } from 'phosphor-react'
import {
    ButtonComponent,
} from '@/components';

import { useModal } from '@/hooks/useModal';
import { ManageModal } from '..';
import { GestionRiesgoController } from '@/controllers';
import { useEffect } from 'react';

interface Props {
    getSubPeriodoAllByIdGestion: (id: number) => void;
    idGestion: string;
}

export default function SubPeriodoList({ getSubPeriodoAllByIdGestion, idGestion }: Props) {
    const { gestionRiesgo, findGestionRiesgoById } = GestionRiesgoController();
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    useEffect(() => {
        findGestionRiesgoById(Number(idGestion));
    }, [])

    return (
        <>
            <div className="flex flex-col items-center gap-5 p-3.5">
                <div className="">
                    <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento SubPeriodo</h2>
                </div>
                <div className='flex gap-3 w-full py-4'>
                    <span className='font-bold'>Sistema:</span> {gestionRiesgo?.gestionNombre}
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('add', { getSubPeriodoAllByIdGestion, idGestion })}
                    />
                </div>
                <div>No hay datos disponibles.</div>
            </div>
            <ManageModal
                modalType={modalType}
                extraProps={extraProps}
                isOpen={openModal}
                closeModal={handleCloseModal}
            />
        </>
    )
}