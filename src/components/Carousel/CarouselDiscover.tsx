import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Discover } from "../../Types/discover";
import CarouselDiscoverImage from "./CarouselDiscoverImage";

interface CarouselDiscoverProps {
  discover: Discover;
}
const CarouselDiscover = ({ discover }: CarouselDiscoverProps) => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  return (
    <div className="overflow-hidden mb-5 mt-20" ref={emblaRef}>
      <div className="flex -ml-4 touch-pan-y touch-pinch-zoom">
        {discover?.results.map((movie) => (
          <div
            className="transform translate-z-0 flex-none w-full min-w-0 pl-4"
            key={movie.id}
          >
            <CarouselDiscoverImage movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselDiscover;
