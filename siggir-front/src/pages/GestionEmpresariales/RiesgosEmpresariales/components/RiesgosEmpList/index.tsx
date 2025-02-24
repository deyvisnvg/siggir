'use client'

import { Plus } from 'phosphor-react'
import { EllipsisHorizontalCircleIcon, PencilIcon, EyeIcon } from '@heroicons/react/24/outline';
import {
    ButtonComponent,
    DropdownComponent,
    Pagination,
    SearchBar,
    TooltipHint
} from '@/components';
import { useContext } from 'react';
import { MyContext } from '@/contexts';
import { ManageModal } from '../../components';
import { useModal } from '@/hooks/useModal';
import { useRedirect } from '@/hooks/useRedirect';
/* import { useRedirect } from '@/hooks/useRedirect'; */

interface Props {
    getRiesgoByIdGestion: (id: number) => void;
}

export default function RiesgosEmpList({ getRiesgoByIdGestion }: Props) {
    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    const {
        handleRedirect,
    } = useRedirect();

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idRiesgo: number) => [
        {
            label: 'Controles',
            icon: <EyeIcon className="size-4 fill-white/30" />,
            onclick: () => handleRedirect('/controlesEmpresariales', { id: idRiesgo }),
        },
        {
            label: 'Plan de Acción',
            icon: <EyeIcon className="size-4 fill-white/30" />,
            onclick: () => handleRedirect('/planAccionEmpresariales', { id: idRiesgo }),
        },
        {
            label: 'Indicadores Kri',
            icon: <EyeIcon className="size-4 fill-white/30" />,
            onclick: () => handleRedirect('/indicadorKriEmpresariales', { id: idRiesgo }),
        },
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { getRiesgoByIdGestion, idRiesgo }),
        },
    ]

    return (
        <>
            <div className="max-w-4xl m-auto">
                <div className="flex flex-col items-center gap-5 p-3.5">
                    <div className="">
                        <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Listado de Riesgos</h2>
                    </div>
                    <div className="flex justify-between gap-5 w-full ">
                        <ButtonComponent
                            iconButton={Plus}
                            size="sm"
                            text="Registrar"
                            color="success"
                            onClick={() => handleOpenModal('add', { getRiesgoByIdGestion })}
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
                                    Nombre del Riesgo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                current.map((item: any) => (
                                    <tr key={item.riesgoId} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.riesgoCodigo}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.riesgoDescripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            <DropdownComponent
                                                iconButtonDropdown={
                                                    <TooltipHint
                                                        label='Más Opciones'
                                                        content={<EllipsisHorizontalCircleIcon />}
                                                    />
                                                }
                                                items={Items(item.riesgoId)}
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