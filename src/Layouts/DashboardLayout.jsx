import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useState } from "react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:bg-[#F4E1D3] bg-white bg-cover bg-center p-0 md:px-5 md:py-5 min-h-screen md:sflex gap-10 font-IBM-plex-sans">
      {/* Sidebar */}
      <aside className={`w-75 md:w-1/6 px-0 pb-10 mx-0 my-0 h-full fixed z-50  transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <SideBar />
      </aside>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-72">
        <Outlet context={{ toggleSidebar: () => setOpen(!open) }} />
      </main>
    </div>
  );
};

export default DashboardLayout;
