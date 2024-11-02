import CarouselSlide from "../../../components/Carousel/CarouselSlide";
import CarouselImageLoader from "../../../components/SkeletonLoading/CarouselImageLoader";
import { useGetData } from "../../../hooks/useGetData";
import { Discover } from "../../../Types/discover";

const Popular = () => {
  const { data: popular, isPending } = useGetData<Discover>("tv/popular");

  return (
    <section className="px-5 mt-5">
      <h2 className="mb-5 text-2xl font-semibold text-gray-300">
        What's Popular
      </h2>

      {isPending ? (
        <CarouselImageLoader />
      ) : (
        <CarouselSlide
          data={popular?.results}
          mediaType="tv"
          activePage="home"
        />
      )}
    </section>
  );
};

export default Popular;
