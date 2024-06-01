import { useLocation } from "react-router-dom";

export default function NotImplemented() {
  const { pathname } = useLocation();

  const pageName = pathname.slice(1).replace(/-/g, " ");

  return (
    <div className="pt-6 lg:pt-20 text-center">
      <h1 className="text-2xl lg:text-4xl font-bold capitalize text-primary-red">
        "{pageName}" Page is Not Implemented Yet 😔
      </h1>
    </div>
  );
}
