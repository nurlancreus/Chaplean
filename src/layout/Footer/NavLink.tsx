import { Link } from "react-router-dom";

type NavLinkProps = {
  path: string;
  label: string;
};

export default function NavLink({ path, label }: NavLinkProps) {
  return (
    <li className="text-sm font-semibold text-gray-1 transition duration-300 hover:text-white">
      <Link to={path}>{label}</Link>
    </li>
  );
}
