import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { useRef } from "react";
import SideNavigation from "./Navigation/SideNavigation";
import ToggleSideNavigation from "./Navigation/ToggleSideNavigation";
import Footer from "./Footer/Footer";

const MainLayout = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="flex w-full h-screen hide-scrollbar">
      <ToggleSideNavigation />

      <div className="hidden w-1/4 bg-secondary xl:w-1/5 lg:flex">
        <SideNavigation />
      </div>

      <div
        ref={scrollContainerRef}
        className={`w-full  overflow-y-scroll h-full hide-scrollbar relative`}
      >
        <Header scrollContainerRef={scrollContainerRef} />

        <Outlet context={{ scrollContainerRef }} />
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
