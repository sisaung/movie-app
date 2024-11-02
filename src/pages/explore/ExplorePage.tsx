import { useParams } from "react-router-dom";
import FilterLists from "../../components/Filter/FilterLists";
import ExploreLists from "./ExploreLists";

const ExplorePage = () => {
  const { mediaType } = useParams();
  const { exploreItem } = useParams();

  return (
    <section className="px-5 mt-20">
      <div className="flex flex-col items-start justify-between gap-5 xl:flex-row xl:gap-0">
        {mediaType === "movie" && (
          <h1 className="text-3xl text-gray-300">
            {exploreItem === "top-rated"
              ? "Top Rated Movies"
              : "Popular Movies"}
          </h1>
        )}

        {mediaType === "tv" && (
          <h1 className="text-3xl text-gray-300">
            {exploreItem === "top-rated"
              ? "Top Rated TV Shows"
              : exploreItem === "airing-today"
              ? "Today airing TV shows"
              : exploreItem === "on-the-air"
              ? "Currently Airing TV shows"
              : "Popular TV Shows"}
          </h1>
        )}

        <FilterLists />
      </div>

      <ExploreLists />
    </section>
  );
};

export default ExplorePage;
