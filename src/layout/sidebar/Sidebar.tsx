
import RightSidebar from "./RightSidebar";
import LeftSidebar from "./LeftSidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export type TMenu = "left" | "right";

const getClasses = (
  menu: TMenu,
  openedMenu: TMenu | "",
  isBelowMediumScreens: boolean,
) => {
  let baseClasses = "";

  if (isBelowMediumScreens) {
    baseClasses =
      "fixed inset-[6.375rem_0_0_0] bg-background-blue transition-all duration-300";

    if (menu === "left") {
      baseClasses +=
        openedMenu === "left" ? " translate-x-0" : " -translate-x-full";
    } else if (menu === "right") {
      baseClasses +=
        openedMenu === "right" ? " translate-x-0" : " translate-x-full";
    }
  }

  return baseClasses;
};

type SidebarProps = {
  menu: TMenu;
  openedMenu: TMenu | "";
};

export default function Sidebar({ menu, openedMenu }: SidebarProps) {
  const isBelowMediumScreens = useMediaQuery("(max-width: 768px)");

  const classes = getClasses(menu, openedMenu, isBelowMediumScreens);

  return (
    <aside className={`${classes} p-4`}>
      {menu === "left" ? (
        <>
          <LeftSidebar />
          <div className="hidden md:mt-10 md:block lg:hidden">
            <RightSidebar />
          </div>
        </>
      ) : (
        <div className="md:hidden lg:block">
          <RightSidebar />
        </div>
      )}
    </aside>
  );
}
