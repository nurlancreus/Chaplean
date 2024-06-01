import { primaryNavList } from "@/helpers/constants";
import NavLink from "./NavLink";

export default function FooterNav() {
  return (
    <nav className="mt-8">
      <ul className="flex flex-col items-center gap-3 md:items-stretch">
        {primaryNavList.map((nav) => (
          <NavLink key={nav.id} path={nav.path} label={nav.label} />
        ))}
      </ul>
    </nav>
  );
}
