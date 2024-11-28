'use client'

import { Plus } from 'phosphor-react'
import { ButtonComponent } from '@/components';
import { ManageModal } from '../../components';
import { useModal } from '@/hooks/useModal';

interface Props {
    getCargo: () => void
}

export default function CargoListEmpty({ getCargo }: Props) {
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    return (
        <>
            <div className="flex flex-col items-center gap-5 p-3.5">
                <div className="">
                    <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Cargo</h2>
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('add', { getCargo })}
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