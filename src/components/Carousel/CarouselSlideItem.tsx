import { imageUrl } from "../../lib/constant";
import { ResultDiscover } from "../../Types/discover";
import fallback from "../../assets/noImage.jpg";
import FormatDate from "../FormatDate";
import RatingCircleProgress from "../Rating/RatingCircleProgress";
import LazyLoadingImage from "../LazyLoadingImage/LazyLoadingImage";
import { HiMiniPlay } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

interface ImageCarouselSlideProps {
  item: ResultDiscover;
  mediaType: string | undefined;
  lazyingLoadingHeight?: string;
  ratingStyle?: string;
  dateStyle?: string;
  lazyLoadingClassName?: string;
  lazyLoadParentClass?: string;
  exploreItem?: string;
}

const CarouselSlideItem = ({
  item,
  lazyingLoadingHeight,
  ratingStyle,
  dateStyle,
  lazyLoadingClassName,
  lazyLoadParentClass,
  mediaType,
  exploreItem,
}: ImageCarouselSlideProps) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/${mediaType}/${item.id}`, {
      state: { exploreItem: exploreItem, mediaType: mediaType },
    });
  };

  return (
    <div
      onClick={handleDetail}
      className={"duration-500 rounded-lg relative group cursor-pointer"}
    >
      <div
        className={`w-full  ${lazyLoadParentClass} group-hover:opacity-60 duration-300`}
      >
        {item?.poster_path ? (
          <LazyLoadingImage
            src={`${imageUrl}/${item.poster_path}`}
            className={`rounded-lg  object-cover ${lazyLoadingClassName} object-top  z-50`}
            width="100%"
            height={`${lazyingLoadingHeight}`}
            alt={item?.title}
          />
        ) : (
          <img
            src={fallback}
            alt="no image"
            className="object-cover object-center w-full h-full rounded-lg "
          />
        )}
      </div>

      <div className={`${ratingStyle}`}>
        <RatingCircleProgress voteAverage={item?.vote_average} />
      </div>
      <div className={`${dateStyle}`}>
        <h2 className="text-sm text-gray-300 md:text-base">
          {item?.title || item?.name}
        </h2>
        <FormatDate
          date={
            item?.first_air_date ||
            item?.release_date ||
            new Date().toISOString()
          }
          className="text-xs text-gray-500 md:text-sm"
        />
      </div>
      <div className="absolute  top-[30%] left-[40%] hidden group-hover:block">
        <HiMiniPlay className="text-pink-600 size-10" />
      </div>
    </div>
  );
};

export default CarouselSlideItem;
