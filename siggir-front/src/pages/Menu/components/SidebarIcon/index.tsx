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
    SidebarFooter,
    SidebarItem,
    SidebarList,
    Tooltip,
    TooltipAction,
    TooltipContent,
} from 'keep-react'

import { IconGridDots, IconBuildingWarehouse } from '@tabler/icons-react';

export default function SidebarIcon() {
    return (
        <Sidebar className='min-h-max max-w-max'>
            <SidebarBody className="space-y-4">
                <Link to="/">
                    <span className="flex p-2 items-center justify-between rounded-md bg-metal-900 text-heading-6 font-semibold text-white dark:bg-metal-800">
                        <Link to="/">
                            <IconGridDots className='size-8' />
                        </Link>
                    </span>
                </Link>

                <SidebarList className="space-y-0.5 hidden max-lg:inline-block">
                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <HouseLine size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Home</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem>
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Procesos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Riesgos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Controles</TooltipContent>
                        </Tooltip>
                    </SidebarItem>

                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <PresentationChart size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Eventos</TooltipContent>
                        </Tooltip>
                    </SidebarItem>
                    <SidebarItem >
                        <Tooltip placement="right" contentOffset={30}>
                            <TooltipAction asChild>
                                <ChartPie size={20} />
                            </TooltipAction>
                            <TooltipContent className="rounded-none text-body-5 font-normal text-white dark:text-metal-900">Reportes</TooltipContent>
                        </Tooltip>
                    </SidebarItem>
                </SidebarList>
            </SidebarBody>

            <SidebarFooter className="hidden max-lg:inline-block">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={`https://unavatar.io/deyvisnvg`} alt="avatar" />
                    </Avatar>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}