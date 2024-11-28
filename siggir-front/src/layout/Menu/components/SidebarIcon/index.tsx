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
    SuitcaseSimple,
    BoundingBox,
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
    TooltipProvider,
} from 'keep-react'

import { IconGridDots } from '@tabler/icons-react';
import { BookmarkSquareIcon, Square3Stack3DIcon, Squares2X2Icon, Bars3Icon, UserGroupIcon } from '@heroicons/react/24/outline';
import { DropdownComponent, TooltipComponent } from '@/components';
import { useState } from 'react';
import { SelectRiesgo } from '@/types/Riesgos';
import { RIESGOS } from "@/controllers/Riesgos";

interface Color {
    [key: string]: string;
}

export default function SidebarIcon() {
    const [riesgo, setRiesgo] = useState<SelectRiesgo | null>(null);

    const colores: Color = {
        red: "bg-red-500",
        green: "bg-green-500",
        orange: "bg-orange-500",
        cyan: "bg-cyan-500",
        yellow: "bg-yellow-500"
    };

    const handleRiesgoChange = (name: string, abreviatura: string, color: string) => {
        const riesgoSelected = {
            name,
            abreviatura,
            color,
        }
        /* localStorage.setItem('RIESGO_SELECTED', JSON.stringify(riesgoSelected)) */
        setRiesgo(riesgoSelected);
    }

    const Items = RIESGOS.map(({ name, abreviatura, color }) => {
        return {
            label: name,
            icon: <span className={`font-bold rounded-full p-2 ml-0 m-1.5 ${colores[color]}`}>{abreviatura}</span>,
            onclick: () => handleRiesgoChange(name, abreviatura, color),
        }
    })

    return (
        <Sidebar className='h-max max-w-max'>
            <SidebarBody className="space-y-4">
                <span className="flex p-2 items-center justify-center rounded-md bg-metal-900 text-heading-6 font-semibold text-white">
                    <DropdownComponent
                        iconButtonDropdown={
                            <TooltipComponent
                                label="Despliegue Opciones"
                                positionTooltip="right"
                                content={<IconGridDots />}
                            />
                        }
                        items={Items}
                        positionDropdown='bottom start'
                    />
                </span>

                {
                    riesgo && (
                        <div className={`rounded-s-3xl px-4 pt-2 pb-3.5 text-white min-w-min ${colores[riesgo.color]}`}>
                            <span className='font-semibold'>{riesgo.abreviatura}</span>
                        </div>
                    )
                }

                <SidebarList className="space-y-0.5 hidden max-lg:inline-block relative z-10">
                    <SidebarItem>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <Link to="/home">
                                        <HouseLine size={20} />
                                    </Link>
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white ">Home</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>

                    <SidebarItem>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <PresentationChart size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Procesos</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>

                    <SidebarItem >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <PresentationChart size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Riesgos</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>

                    <SidebarItem >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <PresentationChart size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Controles</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>

                    <SidebarItem >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <PresentationChart size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Eventos</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>

                    <SidebarItem dropdown>
                        <SidebarDropdown>
                            <SidebarCollapse>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipAction asChild>
                                            <Gear size={20} />
                                        </TooltipAction>
                                        <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Mantenimiento</TooltipContent >
                                    </Tooltip>
                                </TooltipProvider>
                                <span className="group-open:-rotate-180">
                                    <CaretDown size={20} />
                                </span>
                            </SidebarCollapse>
                            <SidebarDropdownList>
                                <SidebarItem >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorUsuario">
                                                    <Users size={20} />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Usuario</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem >
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorCargo">
                                                    <SuitcaseSimple size={20} />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Cargo</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorArea">
                                                    <BoundingBox size={20} />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Area</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorGerencia">
                                                    <BookmarkSquareIcon className='size-5' />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Gerencia</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorGestionRiesgo">
                                                    <PresentationChart size={20} />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Gestion Riesgos</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorMacroproceso">
                                                    <Barcode size={20} />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Macroproceso</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorProceso">
                                                    <Square3Stack3DIcon className='size-5' />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Proceso</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorSubProceso">
                                                    <Squares2X2Icon className='size-5' />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Sub Proceso</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorPerfiles">
                                                    <UserGroupIcon className='size-5' />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Perfiles</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                                <SidebarItem>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipAction asChild>
                                                <Link to="/mantenedorMenu">
                                                    <Bars3Icon className='size-5' />
                                                </Link>
                                            </TooltipAction>
                                            <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Menu</TooltipContent >
                                        </Tooltip>
                                    </TooltipProvider>
                                </SidebarItem>
                            </SidebarDropdownList>
                        </SidebarDropdown>
                    </SidebarItem>

                    <SidebarItem >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <ChartPie size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Reportes</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
                    </SidebarItem>
                    <Divider />
                    <SidebarItem>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipAction asChild>
                                    <SignOut size={20} />
                                </TooltipAction>
                                <TooltipContent side="right" sideOffset={15} className="rounded-none text-body-5 font-normal text-white">Cerrar Sesión</TooltipContent >
                            </Tooltip>
                        </TooltipProvider>
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