'use client'

import { Plus } from 'phosphor-react'
import {
    DropdownItem,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'keep-react';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { ButtonComponent, DropdownComponent, ModalComponent, Pagination, SearchBar } from '@/components';
import { useContext } from 'react';
import { MyContext } from '@/contexts';
import ProcesoAdd from '../ProcesoAdd';
import ProcesoEdit from '../ProcesoEdit';
import { Link } from 'react-router-dom';

export default function ProcesoList() {
    const context = useContext(MyContext);

    if (!context) {
        throw new Error('UserList debe usarse dentro de un PaginationSearchProvider');
    }

    const { current, handlePageChange, pageCount, searchTerm, setSearchTerm } = context;

    return (
        <>
            <Table>
                <TableCaption>
                    <div className="flex flex-col items-center gap-5">
                        <div className="">
                            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Proceso</h2>
                        </div>
                        <div className="flex justify-between gap-5 w-full ">
                            <ModalComponent
                                formModal={<ProcesoAdd />}
                                titleModal="Registrar Proceso"
                            >
                                <div>
                                    <ButtonComponent
                                        iconButton={Plus}
                                        size="sm"
                                        text="Registrar"
                                        color="success"
                                    />
                                </div>
                            </ModalComponent>
                            <SearchBar
                                placeholder="Buscar..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow className='*:bg-gray-600 *:text-white'>
                        <TableHead className='text-center rounded-s-lg'>
                            <div className="w-auto">Código</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Nombre del Proceso</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Macroproceso</div>
                        </TableHead>
                        <TableHead className='text-center rounded-e-md'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell className='text-center'>{item.codigo}</TableCell>
                            <TableCell>{item.proceso}</TableCell>
                            <TableCell>{item.macroproceso}</TableCell>
                            <TableCell className='text-center'>
                                <DropdownComponent
                                    iconButtonDropdown={
                                        <span className={
                                            `hint--left
                                            hint--no-arrow 
                                            hint--rounded hover:text-green-700 size-6 cursor-pointer`}
                                            aria-label="Más Opciones"
                                        >
                                            <EllipsisHorizontalCircleIcon />
                                        </span>
                                    }
                                    positionDropdown='top'
                                >
                                    <Link to="/mantenedorSubProceso" state={{ id_proceso: item.id, id_macroproceso: item.id_macroproceso }} className='focus:outline-0'>
                                        <DropdownItem>Ver SubProcesos</DropdownItem>
                                    </Link>
                                    <DropdownItem className='focus:outline-0'>Visualizar</DropdownItem>
                                    <ModalComponent
                                        formModal={<ProcesoEdit />}
                                        titleModal="Editar Proceso"
                                    >
                                        <div><DropdownItem>Editar</DropdownItem></div>
                                    </ModalComponent>
                                </DropdownComponent>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                pageCount={pageCount}
                onPageChange={handlePageChange}
            />
        </>
    )
}