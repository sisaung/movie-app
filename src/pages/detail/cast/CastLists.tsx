import LazyLoadingImage from "../../../components/LazyLoadingImage/LazyLoadingImage";
import { imageUrl } from "../../../lib/constant";
import { Cast } from "../../../Types/credits";
import fallBack from "../../../assets/no-profile.avif";

type CastListsProps = {
  cast: Cast;
};

const CastLists = ({ cast }: CastListsProps) => {
  return (
    <div className="bg-gray-800 rounded-lg max-w-[80%] w-[150px] h-[280px] lg:min-h-[350px] ">
      <div className="w-[148px] h-[140px] md:h-[160px] lg:h-[170px]">
        {cast.profile_path ? (
          <LazyLoadingImage
            src={`${imageUrl}/${cast.profile_path}`}
            className="w-full h-full object-cover rounded-lg"
            width="100%"
            height="100%"
            alt={cast.name || cast.original_name}
          />
        ) : (
          <img src={fallBack} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="px-3 mt-3">
        <p className="text-white font-bold"> {cast.original_name} </p>
        <p className="text-gray-400  text-sm">{cast.character || cast.name}</p>
      </div>
    </div>
  );
};

export default CastLists;
