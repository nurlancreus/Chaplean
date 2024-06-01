import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
  path: string;
  label: string;
  onClose: () => void;
};

export default function NavLink({ path, label, onClose }: NavLinkProps) {
  const { pathname } = useLocation();

  const isCurrentPage = pathname == path;

  return (
    <li onClick={onClose}>
      <Link
        to={path}
        className={`transition duration-200 hover:text-primary-blue ${isCurrentPage ? "text-primary-blue" : ""}`}
      >
        {label}
      </Link>
    </li>
  );
}
