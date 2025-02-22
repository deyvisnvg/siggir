'use client'

import { Plus } from 'phosphor-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'keep-react';
import { EllipsisHorizontalCircleIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';
import {
    ButtonComponent,
    DropdownComponent,
    Pagination,
    SearchBar,
    TooltipHint
} from '@/components';
import { useContext, useEffect } from 'react';
import { MyContext } from '@/contexts';
import { ManageModal } from '..';
import { useModal } from '@/hooks/useModal';
import { Breadcrumb } from 'antd';
import { RiesgoController } from '@/controllers';
/* import { useRedirect } from '@/hooks/useRedirect'; */

interface Props {
    idRiesgo: string;
    getControlByIdRiesgo: (id: string) => void;
}

export default function ControlesEmpList({ idRiesgo, getControlByIdRiesgo }: Props) {
    const { riesgo, findRiesgoById } = RiesgoController();

    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    /* const {
        handleRedirect,
    } = useRedirect(); */

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idControl: number) => [
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { getControlByIdRiesgo, idControl }),
        },
    ]

    useEffect(() => {
        findRiesgoById(idRiesgo);
    }, [])

    return (
        <>
            <div className="max-w-4xl m-auto">
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
                    <div className="items-center">
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
                        <SearchBar
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-gray-600">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Código
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre del Control
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                current.map((item: any) => (
                                    <tr key={item.control_id} className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.control_codigo}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.control_descripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            <DropdownComponent
                                                iconButtonDropdown={
                                                    <TooltipHint
                                                        label='Más Opciones'
                                                        content={<EllipsisHorizontalCircleIcon />}
                                                    />
                                                }
                                                items={Items(item.control_id)}
                                                positionDropdown='bottom'
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ManageModal
                modalType={modalType}
                extraProps={extraProps}
                isOpen={openModal}
                closeModal={handleCloseModal}
            />
            <Pagination
                pageCount={pageCount}
                onPageChange={handlePageChange}
            />
        </>
    )
}