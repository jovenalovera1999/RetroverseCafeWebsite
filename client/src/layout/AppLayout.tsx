import { Outlet } from "react-router-dom";
import { SidebarProvider, useSidebar } from "../contexts/SidebarContext";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import Backdrop from "./Backdrop";

const LayoutContent = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <>
      <div className="min-h-screen xl:flex">
        <div>
          <AppSidebar />
          <Backdrop />
        </div>
        <div
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
          } ${isMobileOpen ? "ml-0" : ""}`}
        >
          <AppHeader />
          <div className="relative min-h-screen w-full bg-retroverse bg-cover bg-center">
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative z-10 p-4 lg:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <>
      <SidebarProvider>
        <LayoutContent />
      </SidebarProvider>
    </>
  );
};

export default AppLayout;
