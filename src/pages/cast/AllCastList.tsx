import { imageUrl } from "../../lib/constant";
import { Cast, Crews } from "../../Types/credits";
import fallBack from "../../assets/no-profile.avif";

type AllCastListProps = {
  allCasts: Cast | Crews;
  crew?: boolean;
};

const AllCastList = ({ allCasts, crew }: AllCastListProps) => {
  return (
    <>
      <div className="flex items-center gap-5 ">
        {allCasts.profile_path ? (
          <img
            src={`${imageUrl}/${allCasts.profile_path}`}
            className="size-20 object-cover rounded-full object-center "
            alt={allCasts.name || allCasts.original_name}
          />
        ) : (
          <img
            src={fallBack}
            className="size-20 object-cover rounded-full object-center "
          />
        )}

        <div className="flex flex-col">
          <p className="text-white font-bold"> {allCasts.original_name} </p>
          <p className="text-gray-400 text-sm">
            {crew
              ? (allCasts as Crews)?.job
              : allCasts.character || allCasts.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default AllCastList;
