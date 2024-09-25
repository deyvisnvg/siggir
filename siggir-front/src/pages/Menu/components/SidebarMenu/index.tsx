'use client'

import { Link } from 'react-router-dom';
import {
    Barcode,
    CaretDown,
    ChartPie,
    HouseLine,
    PresentationChart,
    Users,
    Gear,
    SignOut,
} from 'phosphor-react'

import {
    Avatar,
    AvatarImage,
    Divider,
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
import { DropdownComponent, TooltipComponent } from '@/components';
import { RIESGOS } from '@/core/riesgos';

export default function SidebardMenu() {
    return (
        <Sidebar className='h-max max-w-max'>
            <SidebarBody className="space-y-4">
                <span className="flex items-center justify-between gap-4 p-2 rounded-md bg-metal-900 text-heading-6 font-semibold text-white">
                    <div className='flex gap-2 items-center'>
                        <IconBuildingWarehouse className='size-7' />
                        <p>SIGGIR</p>
                    </div>
                    <div className="cursor-pointer z-10">
                        <DropdownComponent
                            RiesgosData={RIESGOS}
                        >
                            <div>
                                <TooltipComponent>
                                    <IconGridDots />
                                </TooltipComponent>
                            </div>
                        </DropdownComponent>
                    </div>
                </span>

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
                                    <Gear size={20} />
                                    Mantenimiento
                                </div>
                                <span className="group-open:-rotate-180">
                                    <CaretDown size={20} />
                                </span>
                            </SidebarCollapse>

                            <SidebarDropdownList>
                                <SidebarItem>
                                    <Users size={20} />
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
                    <Divider />
                    <SidebarItem>
                        <SignOut size={20} />
                        Cerrar Sesión
                    </SidebarItem>
                </SidebarList>
            </SidebarBody>

            <SidebarFooter>
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={`https://unavatar.io/s4vitar`} alt="avatar" />
                    </Avatar>
                    <div>
                        <p className="text-body-4 font-medium text-metal-400">S4vitar Valdez</p>
                        <p className="text-body-4 font-normal text-metal-300">deyvisnvg@gmail.com</p>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}