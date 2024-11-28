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
    getProceso: () => void
}

export default function ProcesoListMacro({ getProceso }: Props) {
    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    if (!context) {
        throw new Error('ProcesoList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idProcesoMacro: string | number) => [
        {
            href: "/mantenedorSubProceso",
            label: 'Ver SubProcesos',
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
            onclick: () => handleOpenModal('editMacro', { idProcesoMacro }),
        },
    ]

    return (
        <>
            <div className="flex flex-col items-center gap-5 p-3.5">
                <div className="">
                    <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Proceso</h2>
                </div>
                <div className='flex gap-3 w-full py-4'>
                    <span className='font-bold'>MACROPROCESO:</span> {current[0].macroproceso}
                </div>
                <div className="flex justify-between gap-5 w-full ">
                    <ButtonComponent
                        iconButton={Plus}
                        size="sm"
                        text="Registrar"
                        color="success"
                        onClick={() => handleOpenModal('addMacro', {})}
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
                            <div className="w-auto">Nombre del Proceso</div>
                        </TableHead>
                        <TableHead className='text-center'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.codigo}</TableCell>
                            <TableCell>{item.proceso}</TableCell>
                            <TableCell className='flex justify-around'>
                                {/* <Link to="/mantenedorSubProceso" state={{ id_proceso: item.id, id_macroproceso: item.id_macroproceso }} className='focus:outline-0'>
                                    <DropdownItem>Ver SubProcesos</DropdownItem>
                                </Link> */}
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