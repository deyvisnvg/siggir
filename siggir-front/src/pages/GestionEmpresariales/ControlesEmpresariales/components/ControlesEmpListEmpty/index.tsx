'use client'

import { Plus } from 'phosphor-react'
import {
    ButtonComponent,
} from '@/components';

import { ManageModal } from '..';
import { useModal } from '@/hooks/useModal';
import { useEffect } from 'react';
import { RiesgoController } from '@/controllers';
import { Breadcrumb } from 'antd';

interface Props {
    idRiesgo: string;
    getControlByIdRiesgo: (id: string) => void;
}

export default function ControlesEmpListEmpty({ idRiesgo, getControlByIdRiesgo }: Props) {
    const { riesgo, findRiesgoById } = RiesgoController();

    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    useEffect(() => {
        findRiesgoById(idRiesgo);
    }, [])

    return (
        <>
            <div className="flex flex-col gap-5 p-3.5">
                <Breadcrumb
                    items={[
                        {
                            title: <a href="/riesgosEmpresariales">Riesgos</a>,
                        },
                        {
                            title: 'Controles',
                        },
                    ]}
                />
                <div className="text-center">
                    <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Listado de Controles</h2>
                </div>
                <div className='flex gap-3 w-full py-4'>
                    <span className='font-bold'>Riesgo:</span> {riesgo?.riesgoCodigo} {riesgo?.riesgoDescripcion}
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('add', { getControlByIdRiesgo, idRiesgo })}
                    />
                </div>
                <div className='text-center'>No hay datos disponibles.</div>
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