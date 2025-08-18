import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useSidebar } from "../contexts/SidebarContext";
import { useCallback, type ReactNode } from "react";
import CompanyLogo from "../assets/img/CompanyLogo.png";
import {
  BookIcon,
  ImageIcon,
  LocationIcon,
  Phone,
  ProductIcon,
} from "../assets/icons";

const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  type NavItemType = {
    icon: ReactNode;
    name: string;
    path: string;
  };

  const navItems: NavItemType[] = [
    {
      icon: <BookIcon />,
      name: "About",
      path: "about_us",
    },
    {
      icon: <ProductIcon />,
      name: "Products",
      path: "product_list",
    },
    {
      icon: <ImageIcon />,
      name: "Gallery",
      path: "gallery",
    },
    {
      icon: <LocationIcon />,
      name: "Location",
      path: "location",
    },
    {
      icon: <Phone />,
      name: "Contact Information",
      path: "contact_information",
    },
  ];

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
                width={150}
                height={40}
              />
            ) : (
              <img
                src={CompanyLogo}
                alt="Company Logo"
                width={80}
                height={80}
              />
            )}
          </Link>
        </div>
        <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
          <nav className="mb-6">
            <ul className="flex flex-col gap-1">
              {navItems.map((navItem) => (
                <li key={navItem.name}>
                  <Link
                    to={navItem.path}
                    className={`flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-300 ${
                      isActive(navItem.path)
                        ? "bg-primary text-secondary"
                        : "text-secondary"
                    } hover:bg-secondary hover:text-primary ${
                      !isExpanded && !isHovered
                        ? "lg:justify-center"
                        : "lg:justify-start"
                    } cursor-pointer`}
                    smooth={true}
                    duration={500}
                  >
                    <span className={!isExpanded && !isHovered ? "" : "mr-3"}>
                      {navItem.icon}
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span>{navItem.name}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;
