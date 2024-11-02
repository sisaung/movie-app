import { ReactNode } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import useStore from "../../store/useStore";

type SideNavListItemsProps = {
  name: string;
  icon: ReactNode;
  path: string;
  type: "movie" | "tv";
};

const SideNavigationListItems = ({
  name,
  icon,
  path,
  type,
}: SideNavListItemsProps) => {
  const { mediaType } = useParams();
  const location = useLocation();

  const activePage = location?.state ? location.state : "";

  const activeName =
    activePage.exploreItem === "popular"
      ? "Popular"
      : activePage.exploreItem === "top-rated"
      ? "TopRated"
      : activePage.exploreItem === "airing-today"
      ? "Airing Today"
      : activePage.exploreItem === "on-the-air"
      ? "On TV"
      : "";

  const { setOpenSideNavbar } = useStore(
    useShallow((state) => ({ setOpenSideNavbar: state.setOpenSideNavbar }))
  );

  const handleSideNavigationListItems = () => {
    setOpenSideNavbar(false);
  };

  return (
    <NavLink
      to={path}
      onClick={handleSideNavigationListItems}
      className={`${
        type === mediaType && activeName === name ? "active" : ""
      }  flex gap-3 items-center py-3 px-[51px] hover:bg-gray-700 hover:text-blue-400`}
    >
      <p> {icon} </p>
      <p> {name} </p>
    </NavLink>
  );
};

export default SideNavigationListItems;
