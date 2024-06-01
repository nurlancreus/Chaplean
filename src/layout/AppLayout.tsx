import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SidebarController from "./Sidebar/SidebarController";
import Sidebar from "./Sidebar";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TMenu } from "./Sidebar/Sidebar";

export default function AppLayout() {
  const [openedMenu, setOpenedMenu] = useState<TMenu | "">("");
  const isBelowMediumScreens = useMediaQuery("(width < 768px)");

  useEffect(() => {
    if (!isBelowMediumScreens) setOpenedMenu("");
  }, [isBelowMediumScreens]);

  useEffect(() => {
    if (openedMenu !== "") document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openedMenu]);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header>
        {isBelowMediumScreens && (
          <SidebarController
            openedMenu={openedMenu}
            setOpenedMenu={setOpenedMenu}
          />
        )}
      </Header>
      <main className="container md:px-0 grid grid-cols-1 md:grid-cols-[270px_1fr] lg:grid-cols-[270px_1fr_270px]">
        <Sidebar menu="left" openedMenu={openedMenu} />
        <div className="pb-8 pt-[7.25rem] md:px-4 md:pt-3">
          <Outlet />
        </div>
        <Sidebar menu="right" openedMenu={openedMenu} />
      </main>
      <Footer />
    </div>
  );
}
