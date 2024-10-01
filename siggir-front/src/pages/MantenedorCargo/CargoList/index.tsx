'use client'

import { Plus } from 'phosphor-react'
import {
    Button,
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
import { DropdownComponent, Pagination, SearchBar } from '@/components';
import { useContext } from 'react';
import { MyContext } from '@/contexts';

export function CargoList() {
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
                            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento Cargo</h2>
                        </div>
                        <div className="flex justify-between gap-5 w-full ">
                            <Button variant="outline" className="flex gap-1.5">
                                <Plus className="size-4 fill-metal-900 dark:fill-white" />
                                Registrar
                            </Button>
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
                            <div className="w-auto">Nombre del Cargo</div>
                        </TableHead>
                        <TableHead className='text-center rounded-e-md'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.cargo}</TableCell>
                            <TableCell className='flex justify-around'>
                                <DropdownComponent
                                    iconButton={EllipsisHorizontalCircleIcon}
                                    textTooltip="Más Opciones"
                                    positionTooltip="left"
                                    positionDropdown='top'
                                    simpleTooltip
                                >
                                    <DropdownItem className='focus:outline-0'>Visualizar</DropdownItem>
                                    <DropdownItem>Editar</DropdownItem>
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