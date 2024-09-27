'use client'

import { Link } from 'react-router-dom';
import {
    Barcode,
    CaretDown,
    ChartPie,
    HouseLine,
    PresentationChart,
    Gear,
    Users,
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
    Tooltip,
    TooltipAction,
    TooltipContent,
} from 'keep-react'

import { IconGridDots } from '@tabler/icons-react';
import { DropdownComponent, TooltipComponent } from '@/components';
import { RIESGOS } from '@/core/riesgos';

export default function SidebarIcon() {
    return (
        <Sidebar className='h-max max-w-max'>
            <SidebarBody className="space-y-4">
                <span className="flex p-2 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white">
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

                <SidebarList className="space-y-0.5 hidden max-lg:inline-block">
                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <HouseLine size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white ">Home</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Procesos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Riesgos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Controles</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Eventos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem dropdown>
                        <SidebarDropdown>
                            <SidebarCollapse>
                                <Tooltip placement="right" contentOffset={30}>
                                    <TooltipAction asChild>
                                        <Gear size={20} />
                                    </TooltipAction>
                                    <TooltipContent className="rounded-none text-body-5 font-normal text-white">Mantenimiento</TooltipContent>
                                </Tooltip>
                                <span className="group-open:-rotate-180">
                                    <CaretDown size={20} />
                                </span>
                            </SidebarCollapse>
                            <SidebarDropdownList>
                                <SidebarItem >
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Users size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Usuario</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem >
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Cargo</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Area</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Gerencia</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Macroproceso</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Proceso</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Perfil</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                                <SidebarItem>
                                    <Tooltip placement="right" contentOffset={30}>
                                        <TooltipAction asChild>
                                            <Barcode size={20} />
                                        </TooltipAction>
                                        <TooltipContent className="rounded-none text-body-5 font-normal text-white">Menu</TooltipContent>
                                    </Tooltip>
                                </SidebarItem>
                            </SidebarDropdownList>
                        </SidebarDropdown>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <ChartPie size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Reportes</TooltipContent>
                        </Tooltip>
                    </SidebarItem>
                    <Divider />
                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <SignOut size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white">Log Out</TooltipContent>
                        </Tooltip>
                    </SidebarItem>
                </SidebarList>
            </SidebarBody>

            <SidebarFooter className="hidden max-lg:inline-block">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={`https://unavatar.io/s4vitar`} alt="avatar" />
                    </Avatar>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}