import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div className="h-max m-auto bg-slate-50">
        <Outlet />
      </div>
    </>
  );
}