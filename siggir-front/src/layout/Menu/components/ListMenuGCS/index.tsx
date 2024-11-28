import { SidebarItem } from "keep-react";
import { PresentationChart } from "phosphor-react";

export default function ListMenuCambiosSignificativos() {
    return (
        <>
            <SidebarItem className=''>
                <PresentationChart size={20} />
                Cambios Significativos
            </SidebarItem>
        </>
    )
}