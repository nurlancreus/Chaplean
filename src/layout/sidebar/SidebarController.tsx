import { TMenu } from "./Sidebar";
import { SvgIcon } from "@/shared";

type SidebarControllerProps = {
  openedMenu: TMenu | "";
  setOpenedMenu: React.Dispatch<React.SetStateAction<"" | TMenu>>;
};

export default function SidebarController({
  openedMenu,
  setOpenedMenu,
}: SidebarControllerProps) {
  const handleOpenLeftMenu = () => {
    setOpenedMenu("left");
  };

  const handleOpenRightMenu = () => {
    setOpenedMenu("right");
  };

  const handleCloseMenu = () => {
    setOpenedMenu("");
  };

  return (
    <div className="absolute left-0 right-0 top-full -z-10 bg-secondary-blue px-4 py-3">
      <div className="container flex items-center justify-between">
        {openedMenu === "" ? (
          <>
            <button onClick={handleOpenLeftMenu}>Menu</button>
            <button onClick={handleOpenRightMenu}>Search</button>
          </>
        ) : (
          <button onClick={handleCloseMenu} className="flex items-center gap-2">
            <SvgIcon
              width={12}
              height={12}
              id="chevron"
              className="rotate-90"
            />
            Back
          </button>
        )}
      </div>
    </div>
  );
}
