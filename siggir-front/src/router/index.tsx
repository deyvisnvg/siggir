import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "@/pages";
import { MainLayout, MenuLayout } from "@/layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Login />} />
                    <Route element={<MenuLayout />}>
                        <Route path="/home" element={<Home />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}