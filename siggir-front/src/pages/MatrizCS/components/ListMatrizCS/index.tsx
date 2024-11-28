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
import { EllipsisHorizontalCircleIcon, EyeIcon, PencilIcon } from '@heroicons/react/24/outline';
import { ButtonComponent, DropdownComponent, Pagination, SearchBar, TooltipHint } from '@/components';
import { useContext } from 'react';
import { MyContext } from '@/contexts';
import { ManageModal } from '../../components';
import { useModal } from '@/hooks/useModal';

export default function ListMatrizCS() {
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

    const Items = (idGerencia: string | number) => [
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { idGerencia }),
        },
    ]

    return (
        <>
            <div className="flex flex-col items-center gap-5 p-3.5">
                <div className="">
                    <h2 className="text-heading-6 font-semibold text-metal-900">Matriz Cambios Significativos</h2>
                </div>
                <div className="flex justify-between gap-5 w-full">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('add', {})}
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
                            <div className="w-auto">Descripción</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Objetivo</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Fecha Registro</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Estado</div>
                        </TableHead>
                        <TableHead className='text-center' colSpan={2}>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.descripcion}</TableCell>
                            <TableCell>{item.objetivo}</TableCell>
                            <TableCell>{item.fecha_registro}</TableCell>
                            <TableCell>{item.estado}</TableCell>
                            {
                                item.estado == "Pendiente" && (
                                    <TableCell className='flex justify-center pb-0'>
                                        <ButtonComponent
                                            size="xs"
                                            text="Enviar"
                                            color="success"
                                        />
                                    </TableCell>
                                )
                            }
                            <TableCell className='flex justify-center'>
                                <DropdownComponent
                                    iconButtonDropdown={
                                        <TooltipHint
                                            label='Más Opciones'
                                            content={<EllipsisHorizontalCircleIcon />}
                                        />
                                    }
                                    items={Items(item.id)}
                                    positionDropdown='bottom'
                                />
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
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