import { imageOrgUrl } from "../../lib/constant";
import { ResultDiscover } from "../../Types/discover";
import GenreLists from "../genre/GenreLists";
import RatingStar from "../Rating/RatingStar";
import fallback from "../../assets/noImage.jpg";
import { useNavigate } from "react-router-dom";

interface ImageSlideProps {
  movie: ResultDiscover;
}

const CarouselDiscoverImage = ({ movie }: ImageSlideProps) => {
  const navigate = useNavigate();

  const handleWatchBtn = () => {
    navigate(`movie/${movie.id}`, { state: { exploreItem: "home" } });
  };

  return (
    <div className="relative z-[80]">
      {movie?.backdrop_path ? (
        <div className="h-[230px] sm:h-[300px] md:h-[350px] lg:h-[520px] xl:h-full">
          <img
            src={`${imageOrgUrl}/${movie?.backdrop_path}`}
            alt={movie?.title}
            className="w-full h-full object-cover object-top "
          />
        </div>
      ) : (
        <img src={fallback} alt="title" />
      )}
      <div className="w-[86%] overflow-hidden absolute top-[12%] sm:top-[35%] md:top-[40%] lg:top-[50%] left-0 translate-x-6 md:translate-x-10 space-y-2 z-30">
        <h1 className=" truncate text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          {movie?.title}
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-10">
          <GenreLists genreId={movie?.genre_ids} />
          <RatingStar voteAverage={movie?.vote_average} />
        </div>
        <button
          onClick={handleWatchBtn}
          className="px-4 py-3 text-xs md:text-sm bg-pink-600 text-white rounded-lg"
        >
          Watch Now
        </button>
      </div>
      <div className="absolute top-0 left-0 opacity-65 bg-primary w-full h-full"></div>
    </div>
  );
};

export default CarouselDiscoverImage;
