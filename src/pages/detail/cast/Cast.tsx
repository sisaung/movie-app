import { Link, useParams } from "react-router-dom";
import CastLists from "./CastLists";
import { HiArrowRight } from "react-icons/hi2";
import { useGetData } from "../../../hooks/useGetData";
import { Credits } from "../../../Types/credits";

const Cast = () => {
  const { mediaType, id } = useParams();

  const { data } = useGetData<Credits>(`${mediaType}/${id}/credits`);

  return (
    <section>
      {data?.cast.length !== 0 && (
        <div className="mb-10 xl:w-[1150px] px-7 xl:mt-7 mt-12 xl:mx-auto">
          <h1 className="py-4 text-2xl font-bold text-white">
            Top Billed Cast
          </h1>
          <div className="flex items-center gap-5 overflow-x-scroll hide-scrollbar">
            {data?.cast.slice(0, 6).map((cast) => (
              <CastLists key={cast.id} cast={cast} />
            ))}

            {(data?.cast ?? []).length > 6 && (
              <Link
                to={`/${mediaType}/${id}/cast`}
                className="flex flex-col items-center text-sm text-white -translate-y-16 xl:-translate-y-20 text-nowrap hover:text-gray-400"
              >
                View More <HiArrowRight className="size-5" />
              </Link>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cast;
