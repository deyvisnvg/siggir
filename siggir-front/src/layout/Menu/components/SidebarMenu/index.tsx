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
    SuitcaseSimple,
    BoundingBox
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
import { BookmarkSquareIcon, Square3Stack3DIcon, Squares2X2Icon, Bars3Icon, UserGroupIcon } from '@heroicons/react/24/outline';
import { DropdownComponent, TooltipComponent } from '@/components';
import { useEffect } from 'react';
import { GestionRiesgoController } from "@/controllers";
import { useRiesgoSelect } from "@/hooks/useRiesgoSelect";

interface Item {
    label: string;
    icon: JSX.Element;
    onclick: () => void;
}

export default function SidebardMenu() {
    const { gestionRiesgos, readGestionRiesgo } = GestionRiesgoController();
    const { riesgoSelect, setRiesgoSelect, handleclickRiesgo } = useRiesgoSelect();
    const riesgoStorage = localStorage.getItem('RIESGO_SELECTED');

    useEffect(() => {
        readGestionRiesgo();
        if (riesgoStorage) {
            setRiesgoSelect(JSON.parse(riesgoStorage));
        }
    }, [])

    const Items: Item[] = gestionRiesgos ? gestionRiesgos.map(({ gestionNombre, gestionAbreviatura, gestionColor }) => {
        return {
            label: gestionNombre,
            icon: <span className={`font-bold rounded-full p-2 ml-0 m-1.5 ${gestionColor}`}>{gestionAbreviatura}</span>,
            onclick: () => handleclickRiesgo({
                name: gestionNombre,
                abreviatura: gestionAbreviatura,
                color: gestionColor
            }),
        }
    }) : []

    return (
        <Sidebar className='h-max max-w-max border-collapse'>
            <SidebarBody className="space-y-4">
                <span className="flex items-center justify-between gap-4 p-2 rounded-md bg-metal-900 text-heading-6 font-semibold text-white">
                    <div className='flex gap-2 items-center'>
                        <IconBuildingWarehouse className='size-7' />
                        <p>SIGIR</p>
                    </div>
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
                    riesgoSelect && (
                        <div className={`rounded-s-3xl px-4 pt-2 pb-3.5 text-white min-w-min ${riesgoSelect.color}`}>
                            <span className='font-semibold'>{riesgoSelect.abreviatura}</span>
                            <p className="line-clamp-2 text-xs">{riesgoSelect.name}</p>
                        </div>
                    )
                }

                {
                    riesgoSelect?.abreviatura == "GCS" ?
                        <SidebarList className="space-y-0.5">
                            <Link to="/home">
                                <SidebarItem className=''>
                                    <HouseLine size={20} />
                                    Home
                                </SidebarItem>
                            </Link>
                            <Link to="/matrizCambioSignificativo">
                                <SidebarItem className=''>
                                    <HouseLine size={20} />
                                    Cambio Significativo
                                </SidebarItem>
                            </Link>
                        </SidebarList>
                        :
                        <SidebarList className="space-y-0.5">
                            <Link to="/pruebaComponent">
                                <SidebarItem className=''>
                                    <HouseLine size={20} />
                                    Prueba
                                </SidebarItem>
                            </Link>
                            <Link to="/home">
                                <SidebarItem className=''>
                                    <HouseLine size={20} />
                                    Home
                                </SidebarItem>
                            </Link>
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
                                        <Link to="/mantenedorUsuario">
                                            <SidebarItem>
                                                <Users size={20} />
                                                Usuario
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorCargo">
                                            <SidebarItem>
                                                <SuitcaseSimple size={20} />
                                                Cargo
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorArea">
                                            <SidebarItem>
                                                <BoundingBox size={20} />
                                                Area
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorGerencia">
                                            <SidebarItem>
                                                <BookmarkSquareIcon className='size-5' />
                                                Gerencia
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorGestionRiesgo">
                                            <SidebarItem>
                                                <PresentationChart size={20} />
                                                Gestion Riesgos
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorMacroproceso">
                                            <SidebarItem>
                                                <Barcode size={20} />
                                                Macroproceso
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorProceso">
                                            <SidebarItem>
                                                <Square3Stack3DIcon className='size-5' />
                                                Proceso
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorSubProceso">
                                            <SidebarItem>
                                                <Squares2X2Icon className='size-5' />
                                                Sub Proceso
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorPerfiles">
                                            <SidebarItem>
                                                <UserGroupIcon className='size-5' />
                                                Perfiles
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorMenu">
                                            <SidebarItem>
                                                <Bars3Icon className='size-5' />
                                                Menu
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorGrupoInteres">
                                            <SidebarItem>
                                                <Bars3Icon className='size-5' />
                                                Grupo Interes
                                            </SidebarItem>
                                        </Link>
                                        <Link to="/mantenedorFoda">
                                            <SidebarItem>
                                                <Bars3Icon className='size-5' />
                                                Foda
                                            </SidebarItem>
                                        </Link>
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
                }
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