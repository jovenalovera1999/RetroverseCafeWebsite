import type { MouseEvent, ReactNode } from "react";
import { Link } from "react-router-dom";

interface DropdownItemProps {
  tag?: "a" | "button";
  to?: string;
  onClick?: () => void;
  onItemClick?: () => void;
  baseClassName?: string;
  className?: string;
  children: ReactNode;
}

const DropdownItem = ({
  tag,
  to,
  onClick,
  onItemClick,
  baseClassName = "block w-full text-left px-4 py-2 text-sm font-medium text-secondary hover:text-primary hover:bg-secondary",
  className = "",
  children,
}: DropdownItemProps) => {
  const combinedClasses = `${baseClassName} ${className}`.trim();

  const handleClick = (event: MouseEvent) => {
    if (tag === "button") {
      event.preventDefault();
    }

    if (onClick) onClick;
    if (onItemClick) onItemClick;
  };

  if (tag === "a" && to) {
    return (
      <Link to={to} className={combinedClasses} onClick={handleClick}>
        children
      </Link>
    );
  }

  return (
    <>
      <button className={combinedClasses} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default DropdownItem;
