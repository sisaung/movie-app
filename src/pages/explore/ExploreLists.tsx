import { useEffect } from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import CarouselSlideItem from "../../components/Carousel/CarouselSlideItem";
import Pagination from "../../components/pagination/Pagination";

import { useShallow } from "zustand/react/shallow";

import { OutletContext } from "../detail/DetailPage";
import MovieCardSkeletonLoader from "../../components/SkeletonLoading/MovieCardSkeletonLoader";
import { useGetData } from "../../hooks/useGetData";
import { Discover } from "../../Types/discover";
import useStore from "../../store/useStore";

const ExploreLists = () => {
  const { mediaType } = useParams();
  const { exploreItem } = useParams();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const pageQuery = queryParams.get("page");

  const { scrollContainerRef } = useOutletContext<OutletContext>();

  const {
    setSelectedGenre,
    setSelectedSort,
    with_genres,
    setSortBy,
    sort_by,
    clearGenres,
    clearSortBy,
    storeExploreItem,
    storeMediaType,
    setExplore,
    setStoreMediaType,
  } = useStore(
    useShallow((state) => ({
      setSelectedGenre: state.setSelectedGenre,
      setSelectedSort: state.setSelectedSort,
      with_genres: state.with_genres,
      sort_by: state.sort_by,
      setSortBy: state.setSortBy,
      clearGenres: state.clearGenres,
      clearSortBy: state.clearSortBy,
      storeExploreItem: state.storeExploreItem,
      storeMediaType: state.storeMediaType,
      setExplore: state.setExplore,
      setStoreMediaType: state.setStoreMediaType,
    }))
  );

  const { data, isPending } = useGetData<Discover>(`discover/${mediaType}`, {
    page: parseInt(pageQuery ?? "1"),
    with_genres: with_genres ?? undefined,
    sort_by: sort_by ?? undefined,
    "vote_count.gte": exploreItem === "top-rated" ? 200 : 0,
    "air_date.lte":
      exploreItem === "airing-today" || exploreItem === "on-the-air"
        ? "2024-9-19"
        : undefined,
    "air_date.gte":
      exploreItem === "airing-today" || exploreItem === "on-the-air"
        ? "1952-12-26"
        : undefined,
  });

  //scrollTop when page change
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (data?.page === parseInt(pageQuery ?? "1")) {
      scrollContainer?.scrollTo(0, 0);
    }
  }, [pageQuery, data?.page, exploreItem]);

  useEffect(() => {
    setExplore(exploreItem ?? "");
    setStoreMediaType(mediaType ?? "");
  }, [exploreItem]);

  useEffect(() => {
    if (storeExploreItem !== exploreItem || storeMediaType !== mediaType) {
      setSelectedGenre(null), setSelectedSort(null);
      clearGenres();
      if (exploreItem === "top-rated") {
        setSortBy("vote_average.desc");
      } else {
        clearSortBy();
      }
    }
  }, [exploreItem, mediaType]);

  return (
    <section>
      {isPending && <MovieCardSkeletonLoader />}

      <div className="grid grid-cols-2 gap-5 mb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.results.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            There is no {mediaType === "movie" ? "Movie" : "Tv Show"}
          </p>
        ) : (
          data?.results.map((result) => (
            <CarouselSlideItem
              key={result.id}
              item={result}
              mediaType={mediaType}
              exploreItem={exploreItem}
              ratingStyle="-translate-y-[50%]"
              dateStyle="-mt-2"
              lazyingLoadingHeight="100%"
              lazyLoadingClassName="h-full"
              lazyLoadParentClass="h-[250px] md:h-[280px] lg:h-[300px] 2xl:h-[550px]"
            />
          ))
        )}
      </div>

      {data?.results.length !== 0 && (
        <Pagination
          exploreItem={exploreItem}
          mediaType={mediaType ?? ""}
          totalPages={data?.total_pages ?? 0}
          currentPage={parseInt(pageQuery ?? "1")}
          explore
        />
      )}
    </section>
  );
};
export default ExploreLists;
