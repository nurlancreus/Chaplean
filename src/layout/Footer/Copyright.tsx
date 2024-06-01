import { Link } from "react-router-dom";

export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <p className="mt-auto bg-background-blue py-2 text-center text-xs text-gray-2 md:text-sm">
      Copyright &copy; {year}{" "}
      <Link to="#" className="text-primary-blue">
        Chaplean - Social Music Platform
      </Link>
    </p>
  );
}
