import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main className="h-max m-auto bg-slate-50">
      <Outlet />
    </main>
  );
}