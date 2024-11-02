import { HiMiniHome, HiOutlineFilm } from "react-icons/hi2";
import { HiOutlineTv } from "react-icons/hi2";
import { HiOutlineCloud } from "react-icons/hi2";

import AsideList from "./SideNavigationList";
import { memo, ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import SideNavigationList from "./SideNavigationList";
import useStore from "../../store/useStore";

export interface AsideList {
  id: number;
  name: string;
  icon: ReactNode;
  path: string;
  isActive: boolean;
}

const SideNavigation = memo(() => {
  const location = useLocation();

  const activePage = location.state ? location.state : "";

  const { setOpenSideNavbar } = useStore(
    useShallow((state) => ({ setOpenSideNavbar: state.setOpenSideNavbar }))
  );

  return (
    <aside className="w-full">
      <div className="p-5 ">
        <Link to="/" className="mb-5 text-lg font-bold text-white">
          ENS Movie
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 text-sm text-gray-400">
          <NavLink
            to={"/"}
            onClick={() => setOpenSideNavbar(false)}
            className={` ${
              activePage.exploreItem === "home" ? "active" : ""
            } w-full px-5 py-3 flex items-center gap-3 hover:bg-gray-700 hover:text-blue-400 `}
          >
            <p>
              <HiMiniHome className="size-5" />
            </p>
            <p> Home </p>
          </NavLink>
          <div className="flex flex-col gap-3">
            <SideNavigationList
              name="Movies"
              icon={<HiOutlineFilm className="size-5" />}
              movies
            />
            <SideNavigationList
              name="TV Shows"
              icon={<HiOutlineTv className="size-5" />}
            />
          </div>
          <NavLink
            to={"/category/animation"}
            onClick={() => setOpenSideNavbar(false)}
            className={`${
              activePage.exploreItem === "animation" ? "active" : ""
            } flex items-center gap-3 px-5 py-3 hover:bg-gray-700 hover:text-blue-400`}
          >
            <p>
              <HiOutlineCloud className="size-5" />
            </p>
            <p> Animation </p>
          </NavLink>
        </div>
      </div>
    </aside>
  );
});

export default SideNavigation;
