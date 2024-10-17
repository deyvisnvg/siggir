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
import SubProcesoAdd from '../SubProcesoAdd';
import SubProcesoEdit from '../SubProcesoEdit';
import SubProcesoAddProceso from '../SubProcesoAddProceso';
import SubProcesoEditProceso from '../SubProcesoEditProceso';

export default function SubProcesoList() {
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
                            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Sub Proceso</h2>
                        </div>
                        <div className='flex flex-col gap-3 w-full py-4 items-start'>
                            <p><span className='font-bold'>MACROPROCESO:</span> {current[0].macroproceso}</p>
                            <p><span className='font-bold'>PROCESO:</span> {current[0].proceso}</p>
                        </div>
                        <div className="flex justify-between gap-5 w-full ">
                            <ModalComponent
                                formModal={<SubProcesoAddProceso />}
                                titleModal="Registrar Sub Proceso"
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
                        <TableHead className='rounded-s-lg'>
                            <div className="w-auto">Código</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Nombre del Sub Proceso</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Cargo Responsable</div>
                        </TableHead>
                        <TableHead className='text-center rounded-e-md'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.codigo}</TableCell>
                            <TableCell>{item.subproceso}</TableCell>
                            <TableCell>{item.responsable}</TableCell>
                            <TableCell className='flex justify-around'>
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
                                    <DropdownItem className='focus:outline-0'>Visualizar</DropdownItem>
                                    <ModalComponent
                                        formModal={<SubProcesoEditProceso />}
                                        titleModal="Editar Sub Proceso"
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