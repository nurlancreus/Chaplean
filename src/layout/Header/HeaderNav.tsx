import NavLink from "./NavLink";
import { Button } from "@/shared";
import { primaryNavList } from "@/helpers/constants";

type HeaderNavProps = {
  isToggled: boolean;
  handleClose: () => void;
};

export default function HeaderNav({ isToggled, handleClose }: HeaderNavProps) {
  return (
    <nav
      className={`${isToggled ? "z-10 translate-y-full" : "pointer-events-none -z-10 translate-y-10 md:pointer-events-auto md:z-auto md:translate-y-0"} absolute bottom-0 left-0 right-0 mt-14 flex flex-col items-center gap-6 bg-secondary-blue py-4 transition-all duration-200 ease-in md:static md:mt-0 md:flex-row md:bg-transparent md:py-0 lg:gap-8`}
    >
      <ul className="flex flex-col items-center gap-6 py-2 md:flex-row lg:gap-8">
        {primaryNavList.map((nav) => (
          <NavLink
            key={nav.id}
            path={nav.path}
            label={nav.label}
            onClose={handleClose}
          />
        ))}
      </ul>
      <Button variant="contact">Contact Us</Button>
    </nav>
  );
}
