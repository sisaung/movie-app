import { ReactNode, useState } from "react";
import { HiChevronDown, HiMiniFire } from "react-icons/hi2";
import { HiMiniTv } from "react-icons/hi2";
import { HiStar } from "react-icons/hi2";
import SideNavigationListItems from "./SideNavigationListItems";

type AsideListProps = {
  name: string;
  icon: ReactNode;
  movies?: boolean;
};

const SideNavigationList = ({ name, icon }: AsideListProps) => {
  const [openMovies, setOpenMovies] = useState<boolean>(false);
  const [openTVShows, setOpenTVShows] = useState<boolean>(false);

  const handleSideBarItems = () => {
    if (name === "Movies") {
      setOpenMovies(!openMovies);
    } else {
      setOpenTVShows(!openTVShows);
    }
  };

  return (
    <>
      <div
        onClick={handleSideBarItems}
        className={`hover:bg-gray-700 hover:text-blue-400 flex select-none items-center gap-3 py-3 px-5 text-sm cursor-pointer`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <p> {icon} </p>
            <p> {name} </p>
          </div>
        </div>
        <HiChevronDown
          className={`size-5 duration-300 ${
            openMovies || openTVShows ? "rotate-180" : ""
          }`}
        />
      </div>

      {openMovies && name === "Movies" && (
        <div>
          <SideNavigationListItems
            name="Popular"
            icon={<HiMiniFire className="size-5" />}
            path="/explore/movie/popular"
            type="movie"
          />
          <SideNavigationListItems
            name="TopRated"
            icon={<HiStar className="size-5" />}
            path="/explore/movie/top-rated"
            type="movie"
          />
        </div>
      )}

      {openTVShows && name === "TV Shows" && (
        <div>
          <SideNavigationListItems
            name="Popular"
            icon={<HiMiniFire className="size-5" />}
            path="/explore/tv/popular"
            type="tv"
          />
          <SideNavigationListItems
            name="Airing Today"
            icon={<HiStar className="size-5" />}
            path="/explore/tv/airing-today"
            type="tv"
          />
          <SideNavigationListItems
            name="On TV"
            icon={<HiMiniTv className="size-5" />}
            path="/explore/tv/on-the-air"
            type="tv"
          />

          <SideNavigationListItems
            name="TopRated"
            icon={<HiStar className="size-5" />}
            path="/explore/tv/top-rated"
            type="tv"
          />
        </div>
      )}
    </>
  );
};

export default SideNavigationList;
