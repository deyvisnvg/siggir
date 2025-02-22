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

interface Props {
    getMacroproceso: () => void
}

export default function MacroprocesoList({ getMacroproceso }: Props) {
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

    const Items = (idMacroproceso: number) => [
        {
            href: "/mantenedorProceso",
            label: 'Ver Procesos',
            icon: <PencilIcon className="size-4 fill-white/30" />,
        },
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { idMacroproceso, getMacroproceso }),
        },
    ]

    return (
        <div className='max-w-4xl m-auto'>
            <div className="flex flex-col items-center gap-5 p-3.5">
                <div className="">
                    <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Macroproceso</h2>
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('add', { getMacroproceso })}
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
                        <TableHead className='text-center'>
                            <div className="w-auto">Código</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Nombre del Macroproceso</div>
                        </TableHead>
                        <TableHead className='text-center'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell className='text-center'>{item.macroproCodigo}</TableCell>
                            <TableCell>{item.macroproNombre}</TableCell>
                            <TableCell className='text-center'>
                                {/* <Link to="/mantenedorProceso" state={{ id: item.id }} className='focus:outline-0'>
                                    <DropdownItem>Ver Procesos</DropdownItem>
                                </Link> */}
                                <DropdownComponent
                                    iconButtonDropdown={
                                        <TooltipHint
                                            label='Más Opciones'
                                            content={<EllipsisHorizontalCircleIcon />}
                                        />
                                    }
                                    items={Items(item.macroprocesoId)}
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
        </div>
    )
}