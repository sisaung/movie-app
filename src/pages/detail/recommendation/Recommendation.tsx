import { useLocation, useParams } from "react-router-dom";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import CarouselImageLoader from "../../../components/SkeletonLoading/CarouselImageLoader";
import { useGetData } from "../../../hooks/useGetData";
import { Discover } from "../../../Types/discover";

const Recommendation = () => {
  const { mediaType, id } = useParams();
  const location = useLocation();
  const activePage = location?.state ? location?.state : "";

  const { data, isPending } = useGetData<Discover>(
    `${mediaType}/${id}/recommendations`
  );

  return (
    <section>
      {data?.results.length !== 0 && (
        <div className="px-5 mb-10 xl:w-[1150px] xl:mx-auto">
          <h1 className="text-xl text-white select-none"> Recommendations </h1>
          <div>
            {isPending ? (
              <CarouselImageLoader />
            ) : (
              <CarouselSlide
                data={data?.results}
                activePage={activePage.exploreItem}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Recommendation;
