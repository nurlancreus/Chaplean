import { rightSidebarMenu } from "@/helpers/constants";
import MenuItem from "./MenuItem";

export default function SidebarMenu() {
  return (
    <nav className="pt-3 text-sm">
      <h4 className="mb-1 px-3 py-1 text-white-blue">On this page</h4>
      <ul className="space-y-1 text-gray-1">
        {rightSidebarMenu.map((nav, index) => (
          <MenuItem key={nav.id} nav={nav} index={index} />
        ))}
      </ul>
    </nav>
  );
}
