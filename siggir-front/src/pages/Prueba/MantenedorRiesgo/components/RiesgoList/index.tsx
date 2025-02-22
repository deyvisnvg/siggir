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
import { useContext } from 'react';
import { MyContext } from '@/contexts';
import { ManageModal } from '..';
import { useModal } from '@/hooks/useModal';

interface Props {
    getRiesgoByIdGestion: (id: number) => void
}

export default function RiesgoList({ getRiesgoByIdGestion }: Props) {
    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idRiesgo: number) => [
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
                <Table>
                    <TableHeader>
                        <TableRow className='*:bg-gray-600 *:text-white'>
                            <TableHead>
                                <div className="w-auto">Código</div>
                            </TableHead>
                            <TableHead>
                                <div className="w-auto">Nombre del Riesgo</div>
                            </TableHead>
                            <TableHead className='text-center'>
                                <div className="w-auto">Acción</div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {current.map((item: any) => (
                            <TableRow key={item.riesgo_id}>
                                <TableCell>{item.riesgo_codigo}</TableCell>
                                <TableCell>{item.riesgo_descripcion.toLowerCase()}</TableCell>
                                <TableCell className='flex justify-around'>
                                    <DropdownComponent
                                        iconButtonDropdown={
                                            <TooltipHint
                                                label='Más Opciones'
                                                content={<EllipsisHorizontalCircleIcon />}
                                            />
                                        }
                                        items={Items(item.gerenciaId)}
                                        positionDropdown='bottom'
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
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