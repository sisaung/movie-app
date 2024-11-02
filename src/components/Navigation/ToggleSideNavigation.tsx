import { useShallow } from "zustand/react/shallow";
import SideNavigation from "./SideNavigation";
import useStore from "../../store/useStore";

const ToggleSideNavigation = () => {
  const { openSideNavbar, setOpenSideNavbar } = useStore(
    useShallow((state) => ({
      openSideNavbar: state.openSideNavbar,
      setOpenSideNavbar: state.setOpenSideNavbar,
    }))
  );

  const handleOverLay = () => {
    setOpenSideNavbar(false);
  };

  return (
    <>
      <div
        className={`z-[70] bg-secondary absolute min-w-[230px] lg:hidden h-screen duration-500 ${
          openSideNavbar ? "translate-x-0" : "-translate-x-full"
        } top-0 left-0`}
      >
        <SideNavigation />
      </div>
      <div>
        {openSideNavbar && (
          <div
            onClick={handleOverLay}
            className="lg:hidden block z-[65]  fixed bg-primary opacity-70  top-0 left-0 w-full h-full "
          ></div>
        )}
      </div>
    </>
  );
};

export default ToggleSideNavigation;
