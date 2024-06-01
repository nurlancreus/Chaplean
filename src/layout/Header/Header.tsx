import { ReactNode, useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";
import ToggleBtn from "./ToggleBtn";
import { Logo } from "@/shared/";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const [isToggled, setIsToggled] = useState(false);

  const isAboveMediumScreens = useMediaQuery("(width > 768px)");

  useEffect(() => {
    if (isAboveMediumScreens && isToggled) setIsToggled(false);
  }, [isAboveMediumScreens, isToggled]);

  const handleToggleHeaderNav = () => {
    setIsToggled((p) => !p);
  };

  const handleCloseHeaderNav = () => {
    setIsToggled(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 isolate z-50 bg-secondary-blue font-poppins text-sm md:static">
      <div className="container flex items-center justify-between bg-inherit py-3">
        <Logo variant="header" />
        <HeaderNav isToggled={isToggled} handleClose={handleCloseHeaderNav} />
        <ToggleBtn
          onToggleHeaderNav={handleToggleHeaderNav}
          isMenuToggled={isToggled}
        />
      </div>
      {children}
    </header>
  );
}
