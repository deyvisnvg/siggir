import SidebarMenu from "./components/SidebarMenu";
import SidebarIcon from "./components/SidebarIcon";
import { Outlet } from "react-router-dom";

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
            <main className="flex justify-center w-full p-5">
                <div className="w-full p-4 bg-white">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}