import { Link } from "react-router-dom";

export default function Copyright() {
  const year = new Date().getFullYear();

  return (
    <p className="bg-background-blue py-2 text-center text-sm text-gray-2">
      Copyright &copy; {year}{" "}
      <Link to="#" className="text-primary-blue">
        Chaplean - Social Music Platform
      </Link>
    </p>
  );
}
