import {
    Accordion,
    AccordionAction,
    AccordionContent,
    AccordionIcon,
    AccordionItem,
    AccordionTitle,
    Select,
    SelectAction,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectValue,
    Textarea,
} from 'keep-react'
import { ButtonComponent } from "@/components";

export default function AddMatrizCS() {
    return (
        <form action="">
            <div>
                <Accordion flush={true} type="single" collapsible defaultValue='datos-generales'>
                    <AccordionItem value="datos-generales">
                        <AccordionAction>
                            <AccordionTitle className="first-letter:text-primary-500 text-left text-body-3 pr-3">
                                1. Datos Generales
                            </AccordionTitle>
                            <AccordionIcon />
                        </AccordionAction>
                        <AccordionContent>
                            <div className="grid grid-cols-2 gap-x-6 pt-2 ">
                                <div className='flex flex-col gap-3'>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="gerencia" className="text-sm font-medium">Gerencia</label>
                                        <Select>
                                            <SelectAction className="w-[12rem]">
                                                <SelectValue placeholder="Seleccione" />
                                            </SelectAction>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Member</SelectLabel>
                                                    <SelectItem value="jd">John Doe</SelectItem>
                                                    <SelectItem value="am">Alex Mack</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="cambioSignificativo" className="text-sm font-medium">Cambio Significativo</label>
                                        <input type="text"
                                            id="cambioSignificativo"
                                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese nombre menu"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="proceso" className="text-sm font-medium">Proceso</label>
                                        <Select>
                                            <SelectAction className="w-[12rem]">
                                                <SelectValue placeholder="Seleccione" />
                                            </SelectAction>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Member</SelectLabel>
                                                    <SelectItem value="jd">John Doe</SelectItem>
                                                    <SelectItem value="am">Alex Mack</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="responsable" className="text-sm font-medium">Responsable</label>
                                        <input type="text"
                                            id="responsable"
                                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese nombre menu"
                                        />
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="cambio-significativo">
                        <AccordionAction>
                            <AccordionTitle className="first-letter:text-primary-500 text-left text-body-3 pr-3">
                                2. Cambio Significativo
                            </AccordionTitle>
                            <AccordionIcon />
                        </AccordionAction>
                        <AccordionContent>
                            <div className="grid grid-cols-2 gap-x-6 pt-2 ">
                                <div className='flex flex-col gap-3'>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="descripcion" className="text-sm font-medium">Breve descripción</label>
                                        <input type="text"
                                            id="descripcion"
                                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese nombre menu"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="objetivo" className="text-sm font-medium">Objetivo</label>
                                        <input type="text"
                                            id="objetivo"
                                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese nombre menu"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className="flex flex-col gap-y-0.5">
                                        <label htmlFor="objetivo" className="text-sm font-medium">Procesos impactados</label>
                                        <Textarea placeholder="Write your message here." rows={4} />
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="riesgos-cs">
                        <AccordionAction>
                            <AccordionTitle className="first-letter:text-primary-500 text-left text-body-3 pr-3">
                                3. Riesgos del Cambio Significativo
                            </AccordionTitle>
                            <AccordionIcon />
                        </AccordionAction>
                        <AccordionContent>
                            <div className="grid grid-cols-2 gap-x-6 pt-2 ">
                                <div className="flex flex-col gap-y-0.5">
                                    <label htmlFor="tipoRiesgo" className="text-sm font-medium">Tipo Riesgo</label>
                                    <Select>
                                        <SelectAction className="w-[12rem]">
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectAction>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Tipos de Riesgos</SelectLabel>
                                                <SelectItem value="jd">John Doe</SelectItem>
                                                <SelectItem value="am">Alex Mack</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='flex flex-col gap-3 gap-y-0.5'>
                                    <label htmlFor="riesgo" className="text-sm font-medium">Riesgo</label>
                                    <Select>
                                        <SelectAction className="w-[12rem]">
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectAction>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Código - Riesgo</SelectLabel>
                                                <SelectItem value="jd">John Doe</SelectItem>
                                                <SelectItem value="am">Alex Mack</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="tratamiento-riesgos-cs">
                        <AccordionAction>
                            <AccordionTitle className="first-letter:text-primary-500 text-left text-body-3 pr-3">
                                4. Tratamiento de Riesgos del Cambio Significativo
                            </AccordionTitle>
                            <AccordionIcon />
                        </AccordionAction>
                        <AccordionContent>
                            <div className="flex flex-col gap-y-0.5">
                                <label htmlFor="planAccion" className="text-sm font-medium">Plan de acción</label>
                                <Textarea placeholder="Write your message here." rows={4} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="informacion-relevante">
                        <AccordionAction>
                            <AccordionTitle className="first-letter:text-primary-500 text-left text-body-3 pr-3">
                                5. Información Relevante
                            </AccordionTitle>
                            <AccordionIcon />
                        </AccordionAction>
                        <AccordionContent>
                            <div className="flex flex-col gap-y-0.5">
                                <label htmlFor="informacion" className="text-sm font-medium">Información relevante</label>
                                <Textarea placeholder="Write your message here." rows={4} />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="text-center pt-5">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Registrar"
                    color="primary"
                />
            </div>
        </form>
    )
}