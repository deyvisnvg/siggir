'use client'

import { Link } from 'react-router-dom';
import {
    Barcode,
    CaretDown,
    ChartPie,
    CheckSquare,
    Checks,
    HourglassLow,
    HouseLine,
    MagnifyingGlass,
    PencilLine,
    PresentationChart,
    UserCircle,
} from 'phosphor-react'

import {
    Avatar,
    AvatarImage,
    Sidebar,
    SidebarBody,
    SidebarCollapse,
    SidebarDropdown,
    SidebarDropdownList,
    SidebarFooter,
    SidebarItem,
    SidebarList,
} from 'keep-react'

import { IconGridDots, IconBuildingWarehouse } from '@tabler/icons-react';

export default function SidebardMenu() {
    return (
        <Sidebar className='min-h-max max-w-max'>
            <SidebarBody className="space-y-4">
                <Link to="/">
                    <span className="flex p-2 items-center justify-between rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
                        <div className='flex gap-2 items-center'>
                            <IconBuildingWarehouse className='size-7' />
                            <p>SIGGIR</p>
                        </div>
                        <div>
                            <Link to="/">
                                <IconGridDots className='size-8' />
                            </Link>
                        </div>
                    </span>
                </Link>

                <SidebarList className="space-y-0.5">
                    <SidebarItem className=''>
                        <HouseLine size={20} />Home
                    </SidebarItem>
                    <SidebarItem className=''>
                        <PresentationChart size={20} />
                        Procesos
                    </SidebarItem>
                    <SidebarItem className=''>
                        <PresentationChart size={20} />
                        Riesgos
                    </SidebarItem>
                    <SidebarItem className=''>
                        <PresentationChart size={20} />
                        Controles
                    </SidebarItem>
                    <SidebarItem className=''>
                        <PresentationChart size={20} />
                        Eventos
                    </SidebarItem>

                    <SidebarItem dropdown>
                        <SidebarDropdown>
                            <SidebarCollapse>
                                <div className="flex items-center gap-3">
                                    <UserCircle size={20} />
                                    Mantenimiento
                                </div>
                                <span className="group-open:-rotate-180">
                                    <CaretDown size={20} />
                                </span>
                            </SidebarCollapse>

                            <SidebarDropdownList>
                                <SidebarItem>
                                    <PencilLine size={20} />
                                    Usuario
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Cargo
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Area
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Gerencia
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Macroproceso
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Proceso
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Perfil
                                </SidebarItem>
                                <SidebarItem>
                                    <Barcode size={20} />
                                    Menu
                                </SidebarItem>
                            </SidebarDropdownList>
                        </SidebarDropdown>
                    </SidebarItem>

                    <SidebarItem>
                        <ChartPie size={20} />
                        Reportes
                    </SidebarItem>
                </SidebarList>
            </SidebarBody>

            <SidebarFooter>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={`https://unavatar.io/deyvisnvg`} alt="avatar" />
                    </Avatar>
                    <div>
                        <p className="text-body-4 font-medium text-metal-400">Deyvis Valdez</p>
                        <p className="text-body-4 font-normal text-metal-300">devisnvg@gmail.com</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}