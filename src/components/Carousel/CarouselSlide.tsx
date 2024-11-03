import { ResultDiscover } from "../../Types/discover";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CarouselSlideItem from "./CarouselSlideItem";

interface CarouselSlideProps {
  data: ResultDiscover[] | undefined;
  mediaType?: string;
  activePage?: string;
}

const CarouselSlide = ({ data, mediaType, activePage }: CarouselSlideProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
    align: "start",
    containScroll: "trimSnaps",
    duration: 40,
  });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="sm:flex gap-3 mb-5 touch-manipulation hidden">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
      <div
        className="lg:overflow-hidden overflow-scroll hide-scrollbar scroll-smooth"
        ref={emblaRef}
      >
        <div className="flex gap-5 touch-pan-y touch-pinch-zoom">
          {data?.map((item) => {
            if (item.media_type === "person") return;

            return (
              <div
                key={item.id}
                className="select-none flex-none w-[162px] md:w-[155px] lg:w-[160px] xl:w-[170px] min-w-0 transform translate-z-0"
              >
                <CarouselSlideItem
                  mediaType={item.media_type || mediaType}
                  item={item}
                  exploreItem={activePage}
                  lazyLoadingClassName="h-full"
                  lazyLoadParentClass="h-[230px] md:h-[240px] lg:h-[250px] 2xl:h-[300px]"
                  lazyingLoadingHeight="100%"
                  ratingStyle="-translate-y-1/2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarouselSlide;
