import { ReactNode, useState } from "react";
import { SvgIcon } from "@/shared";

type MenuDropdownProps = {
  children: ReactNode;
  label: string;
};

export default function MenuDropdown({ children, label }: MenuDropdownProps) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleDropdown = () => {
    setIsToggled((p) => !p);
  };
  return (
    <div
      className="cursor-pointer"
      role="button"
      onClick={handleToggleDropdown}
    >
      <div
        className={`${isToggled ? "text-primary-blue" : "group-hover:text-white"} flex cursor-pointer items-center transition duration-200`}
      >
        <p className="px-3 py-2">{label}</p>
        <span className="ml-auto block">
          <SvgIcon
            width={12}
            height={12}
            id="chevron"
            className={`${isToggled ? "" : "-rotate-90"} stroke-current transition-transform duration-200`}
          />
        </span>
      </div>
      {isToggled && children}
    </div>
  );
}
