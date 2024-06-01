import { leftSidebarMenu } from "@/helpers/constants";
import MenuSection from "./MenuSection";

export default function SidebarMenu() {
  return (
    <nav className="flex flex-col gap-3 space-y-4 pt-6 text-sm font-semibold">
      {leftSidebarMenu.map((menu) => (
        <MenuSection key={menu.label} section={menu} />
      ))}
    </nav>
  );
}
