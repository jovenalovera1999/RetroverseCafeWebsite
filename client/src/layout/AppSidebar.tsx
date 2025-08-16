import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../contexts/SidebarContext";
import { useCallback } from "react";
import CompanyLogo from "../assets/img/CompanyLogo.png";

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  return (
    <>
      <aside
        className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-primary text-secondary h-screen transition-all duration-300 ease-in-out z-50 border-r border-secondary ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="py-8 flex justify-center items-center">
          <Link to="/">
            {isExpanded || isHovered || isMobileOpen ? (
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-[150px] h-[40px]"
              />
            ) : (
              <img
                src={CompanyLogo}
                alt="Company Logo"
                className="w-[150px] h-[32px]"
              />
            )}
          </Link>
        </div>
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
          <nav className="mb-6">
            <ul className="flex flex-col gap-1"></ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
