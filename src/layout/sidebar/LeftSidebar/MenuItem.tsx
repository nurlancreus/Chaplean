import { Link } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

type MenuItemProps = {
  nav: {
    id: string;
    path: string;
    label: string;
    hasDropdown: boolean;
  };
};

export default function MenuItem({ nav }: MenuItemProps) {
  return (
    <li className="group capitalize">
      {nav.hasDropdown ? (
        <MenuDropdown label={nav.label}> </MenuDropdown>
      ) : (
        <Link
          className="block px-3 py-2 transition duration-200 group-hover:text-white"
          to={nav.path}
        >
          {nav.label}
        </Link>
      )}
    </li>
  );
}
