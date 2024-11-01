import { ResultDiscover } from "../../Types/discover";

import CarouselSlideItem from "./CarouselSlideItem";

interface CarouselSlideProps {
  data: ResultDiscover[] | undefined;
  mediaType?: string;
  activePage?: string;
}

const CarouselSlide = ({ data, mediaType, activePage }: CarouselSlideProps) => {
  return (
    <>
      <div className="flex items-center gap-5 overflow-scroll hide-scrollbar ">
        {data?.map((item) => {
          if (item.media_type === "person") return;
          return (
            <div key={item.id} className="mb-auto">
              <CarouselSlideItem
                mediaType={item.media_type || mediaType}
                item={item}
                exploreItem={activePage}
                lazyLoadingClassName="h-full"
                lazyLoadParentClass="w-[160px] sm:w-[165px] h-[230px] md:h-[240px] lg:h-[250px] 2xl:h-[300px]"
                lazyingLoadingHeight="100%"
                ratingStyle="-translate-y-1/2"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CarouselSlide;
