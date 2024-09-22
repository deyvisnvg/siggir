import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Menu } from "@/pages";
import { MainLayout } from "@/layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/menu" element={<Menu />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}