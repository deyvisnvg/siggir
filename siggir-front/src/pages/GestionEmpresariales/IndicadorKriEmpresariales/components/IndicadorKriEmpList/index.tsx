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
import { useContext, useEffect } from 'react';
import { MyContext } from '@/contexts';
import { ManageModal } from '..';
import { useModal } from '@/hooks/useModal';
import { RiesgoController } from '@/controllers';
import { Breadcrumb } from 'antd';
/* import { useRedirect } from '@/hooks/useRedirect'; */

interface Props {
    getIndicadorKriByIdRiesgo: (id: string) => void;
    idRiesgo: string;
}

export default function IndicadorKriEmpList({ getIndicadorKriByIdRiesgo, idRiesgo }: Props) {
    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    const { riesgo, findRiesgoById } = RiesgoController();

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idIndicadorKri: number) => [
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { getIndicadorKriByIdRiesgo, idRiesgo, idIndicadorKri }),
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
                                title: 'Indicadores Kri',
                            },
                        ]}
                    />
                    <div className="text-center">
                        <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Listado Indicadores Kri</h2>
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
                            onClick={() => handleOpenModal('add', { getIndicadorKriByIdRiesgo, idRiesgo })}
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
                                    Nombre del Indicador KRI
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Acción
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                current.map((item: any) => (
                                    <tr key={item.indicadorKri_id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.indicadorKri_codigo}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.indicadorKri_descripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            <DropdownComponent
                                                iconButtonDropdown={
                                                    <TooltipHint
                                                        label='Más Opciones'
                                                        content={<EllipsisHorizontalCircleIcon />}
                                                    />
                                                }
                                                items={Items(item.indicadorKri_id)}
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