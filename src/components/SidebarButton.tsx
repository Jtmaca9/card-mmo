import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaHome, FaGamepad, FaCog, FaUser, FaBars } from "react-icons/fa";
import path from "path";

type IconType = "home" | "gamepad" | "cog" | "user" | "bars";

const Icon = React.memo(({ iconType }: { iconType: IconType }) => {
  switch (iconType) {
    case "home":
      return <FaHome className="w-[30px] h-[30px]" />;
    case "gamepad":
      return <FaGamepad className="w-[30px] h-[30px]" />;
    case "cog":
      return <FaCog className="w-[30px] h-[30px]" />;
    case "user":
      return <FaUser className="w-[30px] h-[30px]" />;
    case "bars":
      return <FaBars className="w-[30px] h-[30px]" />;
    default:
      return null;
  }
});

interface SidebarButtonProps {
  href: string;
  label: string;
  collapsed: boolean;
  iconType: IconType;
}

function SidebarButton({
  href,
  label,
  iconType,
  collapsed,
}: SidebarButtonProps) {
  const pathname = usePathname();
  const isSelected = pathname == `/${href === "/" ? "" : href}`;

  return (
    <li className="max-h-[46px] overflow-hidden">
      <Link href={href}>
        <div
          className={`flex items-center p-2 rounded ${
            isSelected ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <div className="flex-shrink-0 w-[30px] h-[30px]">
            <Icon iconType={iconType} />
          </div>
          {!collapsed && (
            <span className="ml-4 whitespace-nowrap overflow-hidden truncate">
              {label}
            </span>
          )}
        </div>
      </Link>
    </li>
  );
}

export default SidebarButton;
