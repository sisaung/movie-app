import { useLocation, useOutletContext } from "react-router-dom";

import CarouselSlideItem from "../../components/Carousel/CarouselSlideItem";
import Pagination from "../../components/pagination/Pagination";
import { OutletContext } from "../detail/DetailPage";
import { useEffect } from "react";
import { useGetData } from "../../hooks/useGetData";
import { Discover } from "../../Types/discover";
import MovieCardSkeletonLoader from "../../components/SkeletonLoading/MovieCardSkeletonLoader";

const SearchPage = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const searchQuery = queryParams.get("q");
  const pageQuery = queryParams.get("page");

  const { data, isPending } = useGetData<Discover>(`search/multi`, {
    query: searchQuery,
    page: parseInt(pageQuery ?? "1"),
  });

  const { scrollContainerRef } = useOutletContext<OutletContext>();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (data?.page === parseInt(pageQuery ?? "1")) {
      scrollContainer?.scrollTo(0, 0);
    }
  }, [scrollContainerRef, pageQuery, data?.page]);

  return (
    <section className="px-5 mt-20">
      <h1 className="mb-5 text-2xl font-semibold text-white">
        {data?.results.length !== 0
          ? `Search Results of "${searchQuery}"`
          : `Sorry Results not found ${searchQuery} `}
      </h1>
      {isPending && <MovieCardSkeletonLoader />}
      <div className="grid grid-cols-2 gap-5 mb-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data?.results.map((result) => (
          <CarouselSlideItem
            key={result.id}
            item={result}
            mediaType={result?.media_type}
            ratingStyle="-translate-y-[50%]"
            dateStyle="-mt-2"
            lazyingLoadingHeight="100%"
            lazyLoadingClassName="h-full"
            lazyLoadParentClass="h-[270px] md:h-[280px] lg:h-[300px] 2xl:h-[550px]"

            // style="-translate-y-[80%]"
          />
        ))}
      </div>
      {data?.results.length !== 0 && (
        <Pagination
          mediaType="multi"
          search
          searchQuery={searchQuery}
          totalPages={data?.total_pages ?? 0}
          currentPage={parseInt(pageQuery ?? "1")}
        />
      )}
    </section>
  );
};

export default SearchPage;
