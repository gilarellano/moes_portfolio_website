"use client";

import React from "react";
import {
  BioIcon,
  ExperienceIcon,
} from "@/assets/icons";

interface MenuItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className: string }>;
  isExternal?: boolean;
}

interface MenuProps {
  activeItem?: string;
  handleClick?: (item: string) => void;
}

const menuItems: MenuItem[] = [
  {
    href: "#bio",
    label: "Bio",
    icon: BioIcon,
  },
  {
    href: "#experiences",
    label: "Experiences",
    icon: ExperienceIcon,
  },
  {
    href: "#skills",
    label: "Technical Skills",
    icon: ExperienceIcon,
  },
];

const Menu: React.FC<MenuProps> = ({
  activeItem = "",
  handleClick = () => {},
}) => {
  return (
    <nav className="nav hidden lg:block">
      <ul
        role="list"
        className="gap-1 bg-opacity-10 mt-8 p-1.5 flex flex-col border-custom rounded-custom w-fit h-fit bg-card drop-shadow-xl shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      >
        {menuItems.map((item, index) => {
          const isActive = activeItem === item.href;

          return (
            <li
              key={index}
              className={`group/item ${isActive ? "bg-hover rounded-md text-primary" : ""}`}
            >
              {/* Prevents from adding an additional layer of the bg-emerald when hovered over an active item */}
              <a
                href={item.href}
                className={`flex flex-row gap-1.5 items-center rounded-md py-1.5 px-3 
                ${isActive ? "bg-hover" : "hover:bg-hover"}`}
                onClick={() => !item.isExternal && handleClick(item.href)}
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
              >
                <item.icon
                  className={`${isActive ? "stroke-primary" : "stroke-secondary"} w-5 h-5 group-hover/item:stroke-primary shrink-0`}
                />
                <p
                  className={`${isActive ? "text-primary" : "text-secondary-text"} text-sm group-hover/item:text-primary`}
                >
                  {item.label}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
