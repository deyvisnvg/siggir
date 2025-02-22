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
import {
    ButtonComponent,
    DropdownComponent,
    Pagination,
    SearchBar,
    TooltipHint
} from '@/components';
import { useContext, useEffect } from 'react';
import { MyContext } from '@/contexts';
import { useModal } from '@/hooks/useModal';
import { ManageModal } from '..';
import moment from "moment";
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { GestionRiesgoController } from '@/controllers';

interface Props {
    getSubPeriodoAllByIdGestion: (id: number) => void;
    idGestion: string;
}

export default function SubPeriodoList({ getSubPeriodoAllByIdGestion, idGestion }: Props) {
    const context = useContext(MyContext);
    const {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    } = useModal();

    const { gestionRiesgo, findGestionRiesgoById } = GestionRiesgoController();

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    const Items = (idSubperiodo: number) => [
        {
            href: "",
            label: 'Visualizar',
            icon: <EyeIcon className="size-4 fill-white/30" />,
        },
        {
            label: 'Editar',
            icon: <PencilIcon className="size-4 fill-white/30" />,
            onclick: () => handleOpenModal('edit', { getSubPeriodoAllByIdGestion, idGestion, idSubperiodo }),
        },
    ]

    const initialize = () => {
        findGestionRiesgoById(Number(idGestion));
    }

    useEffectOnce(initialize);

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
                            <div className="w-auto">Año</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">SubPeriodo</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Fecha Inicio</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Fecha Fin</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Estado</div>
                        </TableHead>
                        <TableHead className='text-center'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.subperiodoId}>
                            <TableCell>{item['periodo.periodoAnio']}</TableCell>
                            <TableCell>{item.subperiodoDetalle}</TableCell>
                            <TableCell>{moment(item.subperiodoFecInicio).format('DD/MM/YYYY')}</TableCell>
                            <TableCell>{moment(item.subperiodoFecFin).format('DD/MM/YYYY')}</TableCell>
                            <TableCell>{item.subperiodoEstado}</TableCell>
                            <TableCell className='flex justify-around'>
                                <DropdownComponent
                                    iconButtonDropdown={
                                        <TooltipHint
                                            label='Más Opciones'
                                            content={<EllipsisHorizontalCircleIcon />}
                                        />
                                    }
                                    items={Items(item.subperiodoId)}
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