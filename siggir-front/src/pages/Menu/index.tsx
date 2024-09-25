import SidebarMenu from "./components/SidebarMenu";
import SidebarIcon from "./components/SidebarIcon";

export default function Menu() {
    return (
        <div className="flex">
            <div>
                <div className="hidden md:inline-block">
                    <SidebarMenu />
                </div>
                <div className="hidden max-md:inline-block">
                    <SidebarIcon />
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
                Contenido
            </div>
        </div>
    )
}