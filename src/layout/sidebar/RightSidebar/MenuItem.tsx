import { Link } from "react-router-dom";

type MenuItemProps = {
  nav: {
    id: string;
    path: string;
    label: string;
  };
  index: number;
};

export default function MenuItem({ nav, index }: MenuItemProps) {
  return (
    <li className="group capitalize">
      {index === 3 && <hr className="my-2 border-primary-blue" />}
      <Link
        to={nav.path}
        className="block px-3 py-2 transition duration-200 group-hover:text-white"
      >
        {nav.label}
      </Link>
    </li>
  );
}
