import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import AllCastList from "./AllCastList";
import CrewList from "./CrewList";
import { useEffect } from "react";

import { imageUrl } from "../../lib/constant";
import LazyLoadingImage from "../../components/LazyLoadingImage/LazyLoadingImage";
import { HiArrowLeft } from "react-icons/hi2";
import { useGetData } from "../../hooks/useGetData";
import { Credits } from "../../Types/credits";
import { Details } from "../../Types/detail";
import { OutletContext } from "../detail/DetailPage";

const CastPage = () => {
  const { mediaType, id } = useParams();

  const { data } = useGetData<Credits>(`${mediaType}/${id}/credits`);

  const { data: detail } = useGetData<Details>(`${mediaType}/${id}`);
  const { scrollContainerRef } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const sortedCredits = data?.crew.sort((a, b) => {
    if (a.department > b.department) {
      return 1;
    } else if (a.department < b.department) {
      return -1;
    } else {
      return 0;
    }
  });

  const filterCrew = sortedCredits?.filter(
    (filter, index, array) =>
      index === array.findIndex((arr) => arr.department === filter.department)
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current;
    if (scrollContainer) {
      scrollContainer.scrollTo(0, 0);
    }
  }, [scrollContainerRef]);

  const handleBackToMain = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="mt-20 bg-gray-800 px-5 mb-5 h-[120px] flex items-center gap-5">
        <div className="h-[100px] w-[80px]">
          <LazyLoadingImage
            width="100%"
            height="100%"
            className="object-cover w-full h-full rounded-lg"
            src={`${imageUrl}/${detail?.poster_path}`}
            alt={detail?.name || detail?.title}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">
            {detail?.name || detail?.title} ( {detail?.release_date.slice(0, 4)}
            )
          </h1>
          <button
            onClick={handleBackToMain}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-400"
          >
            <HiArrowLeft /> Back to Main
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 px-5 md:grid-cols-2">
        <div className="col-span-1">
          <h1 className="mb-5 text-2xl text-white ">
            Cast <span className="text-gray-400">{data?.cast.length}</span>
          </h1>
          <div className="flex flex-col gap-5 ">
            {data?.cast.map((cast) => (
              <AllCastList key={cast.id} allCasts={cast} />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <h1 className="mb-5 text-2xl text-white ">
            Crew <span className="text-gray-400"> {data?.crew.length} </span>
          </h1>
          <div className="flex flex-col gap-5">
            {filterCrew?.map((crew, index) => (
              <CrewList key={index} crew={crew} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CastPage;
