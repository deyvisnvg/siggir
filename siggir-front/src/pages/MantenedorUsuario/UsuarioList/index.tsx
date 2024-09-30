'use client'

import { Plus } from 'phosphor-react'
import {
    Button,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'keep-react';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { Pagination, SearchBar } from '@/components';
import { useContext } from 'react';
import { MyContext } from '@/contexts';

export function UsuarioList() {
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
                            <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Mantenimiento de Usuarios</h2>
                        </div>
                        <div className="flex justify-between gap-5 w-full ">
                            <Button variant="outline" className="flex gap-1.5">
                                <Plus className="size-4 fill-metal-900 dark:fill-white" />
                                Add Product
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
                            <div className="w-auto">Nombres</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Apellidos</div>
                        </TableHead>
                        <TableHead>
                            <div className="w-auto">Estado</div>
                        </TableHead>
                        <TableHead className='text-center rounded-e-md'>
                            <div className="w-auto">Acción</div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {current.map((item: any) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.nombres}</TableCell>
                            <TableCell>{item.apellidos}</TableCell>
                            <TableCell>{item.estado}</TableCell>
                            <TableCell className='flex justify-around'>
                                <Dropdown placement='top'>
                                    <DropdownAction asChild>
                                        <button>
                                            <div className='
                                            hint--left
                                            hint--no-arrow 
                                            hint--rounded'
                                                aria-label='Más opciones'
                                            >
                                                <EllipsisHorizontalCircleIcon className="size-6 hover:text-green-700" />
                                            </div>
                                        </button>
                                    </DropdownAction>
                                    <DropdownContent className="max-w-max border border-metal-100 p-3 shadow-2xl">
                                        <DropdownList>
                                            <DropdownItem>Visualizar</DropdownItem>
                                            <DropdownItem>Editar</DropdownItem>
                                        </DropdownList>
                                    </DropdownContent>
                                </Dropdown>
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