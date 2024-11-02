import CarouselDiscover from "../../../components/Carousel/CarouselDiscover";
import { useGetData } from "../../../hooks/useGetData";
import { Discover as TopRated } from "../../../Types/discover";

const Discover = () => {
  const { data: movieDiscover } = useGetData<TopRated>("movie/top_rated");

  return (
    <section className="mt-2">
      <CarouselDiscover discover={movieDiscover!} />
    </section>
  );
};

export default Discover;
