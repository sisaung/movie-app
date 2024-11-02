import { useLocation, useParams } from "react-router-dom";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import CarouselImageLoader from "../../../components/SkeletonLoading/CarouselImageLoader";
import { Discover } from "../../../Types/discover";
import { useGetData } from "../../../hooks/useGetData";

const Similar = () => {
  const { mediaType, id } = useParams();
  const location = useLocation();
  const activePage = location?.state ? location?.state : "";

  const { data, isPending } = useGetData<Discover>(
    `${mediaType}/${id}/similar`
  );

  return (
    <section>
      {data?.results.length !== 0 && (
        <div className="px-5 mb-5 xl:mx-auto xl:w-[1150px]">
          <h1 className="mb-3 text-xl text-white select-none">
            Similar {mediaType === "movie" ? "Movies" : "TV Shows"}
          </h1>
          {isPending ? (
            <CarouselImageLoader />
          ) : (
            <CarouselSlide
              data={data?.results}
              mediaType={mediaType}
              activePage={activePage.exploreItem}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Similar;
