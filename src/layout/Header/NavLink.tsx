import { Button } from "@/shared";
import { Link, useLocation } from "react-router-dom";

type NavLinkProps = {
  id: string;
  path: string;
  label: string;
  onClose: () => void;
};

export default function NavLink({ id, path, label, onClose }: NavLinkProps) {
  const { pathname } = useLocation();

  const isCurrentPage = pathname == path;

  return (
    <li onClick={onClose}>
      {id === "contact-us" ? (
        <Button variant="contact">{label}</Button>
      ) : (
        <Link
          to={path}
          className={`transition duration-200 hover:text-primary-blue ${isCurrentPage ? "text-primary-blue" : ""}`}
        >
          {label}
        </Link>
      )}
    </li>
  );
}
