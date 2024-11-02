import { HiMiniPlay } from "react-icons/hi2";
import LazyLoadingImage from "../../../components/LazyLoadingImage/LazyLoadingImage";
import RatingCircleProgress from "../../../components/Rating/RatingCircleProgress";
import { imageUrlP } from "../../../lib/constant";
import { Details, DetailsVideos } from "../../../Types/detail";
import FormatDate from "../../../components/FormatDate";
import { useParams } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";
import fallBack from "../../../assets/noImage.jpg";
import DetailLPosterLoader from "../../../components/SkeletonLoading/DetailLPosterLoader";
import { useGetData } from "../../../hooks/useGetData";
import { Credits } from "../../../Types/credits";
import useStore from "../../../store/useStore";

type DetailPosterProps = {
  data: Details;
  isPending: boolean;
};

const DetailPoster = ({ data, isPending }: DetailPosterProps) => {
  const { mediaType, id } = useParams();

  const { data: credits } = useGetData<Credits>(`${mediaType}/${id}/credits`);
  const { data: video } = useGetData<DetailsVideos>(
    `${mediaType}/${id}/videos`
  );

  const { setOpenModal, setVideoKey } = useStore(
    useShallow((state) => ({
      setOpenModal: state.setOpenModal,
      setVideoKey: state.setVideoKey,
    }))
  );

  const director = credits?.crew?.filter((crew) => crew.job === "Director");

  const writer = credits?.crew.filter(
    (crew) =>
      crew.job === "Writer" || crew.job === "Screenplay" || crew.job === "Story"
  );

  const formateRuntime = (runtime: number) => {
    const hour = Math.floor(runtime / 60);
    const minute = runtime % 60;

    return `${hour}h ${minute > 0 ? `${minute}min` : ""}`;
  };

  const handlePlayTrailer = () => {
    setOpenModal(true);
    setVideoKey(video?.results[0]?.key ?? "");
  };

  return (
    <div className="relative left-0 z-30 mt-3 top-10">
      {isPending ? (
        <DetailLPosterLoader />
      ) : (
        <div
          className=" mx-0 xl:mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-8
        w-full lg:w-[900px] xl:w-[1000px]
        "
        >
          <div className="col-span-1 mx-auto">
            {data?.poster_path ? (
              <LazyLoadingImage
                width="100%"
                height="100%"
                className="object-cover object-top rounded-lg"
                src={`${imageUrlP}/${data?.poster_path}`}
                alt={data?.title || data?.name}
              />
            ) : (
              <img
                src={fallBack}
                className="object-cover w-full h-full rounded-lg"
              />
            )}
          </div>
          <div className="w-4/5 col-span-2 xl:w-full">
            <h1 className="text-2xl font-semibold text-white lg:text-3xl">
              {data?.title || data?.name}
              <span className="pl-2 text-2xl text-white">
                (
                {data?.release_date?.slice(0, 4) ||
                  data?.first_air_date?.slice(0, 4)}
                )
              </span>
            </h1>
            {(data?.release_date || data?.first_air_date) && (
              <div className="flex items-center gap-3 mb-3 text-nowrap">
                <p className="text-gray-300 ">Release Date:</p>
                <FormatDate
                  date={data?.release_date! || data?.first_air_date!}
                  className="text-sm text-gray-400"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {data?.genres.map((genre) => (
                <p
                  className="text-gray-200 bg-pink-600 text-xs font-medium py-0.5 px-2 rounded-md"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-5 mb-5">
              <RatingCircleProgress voteAverage={data?.vote_average!} />
              <h2 className="text-xl font-semibold text-white text-nowrap">
                User Score
              </h2>
              <button
                onClick={handlePlayTrailer}
                className="flex items-center gap-2 text-sm text-gray-300 sm:text-base text-nowrap group hover:text-pink-500"
              >
                <HiMiniPlay className="text-gray-300 size-5 group-hover:text-pink-500 " />
                Play Trailer
              </button>
            </div>
            <p className="mb-5 italic font-semibold text-gray-400">
              {data?.tagline}
            </p>
            <p className="text-xl font-semibold text-white"> Overview </p>
            <p className="mb-5 text-sm text-gray-300 ">
              {data?.overview ||
                "We don't have an overview translated in English. Help us expand our database by adding one."}
            </p>
            <div className="flex flex-col items-start gap-5 mb-5 sm:flex-row sm:items-center">
              {data?.status && (
                <div className="flex items-center gap-3">
                  <p className="font-semibold text-white"> Status: </p>
                  <p className="text-gray-400"> {data?.status} </p>
                </div>
              )}

              {data?.runtime && (
                <div className="flex items-center gap-3 text-nowrap">
                  <p className="font-semibold text-white"> Runtime: </p>
                  <p className="text-gray-400">
                    {formateRuntime(data?.runtime!)}
                  </p>
                </div>
              )}
            </div>
            {director?.length !== 0 && (
              <div className="flex items-center gap-3 mb-5">
                <p className="font-semibold text-white">Director:</p>

                <div className="flex flex-wrap gap-2">
                  {director?.map((d, index) => (
                    <p key={index} className="text-gray-400">
                      {d.name}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {writer?.length !== 0 && (
              <div className="flex gap-3 mb-5">
                <p className="font-semibold text-white">Writer:</p>

                <div className="flex flex-wrap gap-2">
                  {writer?.map((w, index) => (
                    <p key={index} className="text-gray-400">
                      {w.name} {writer?.length === 1 ? "" : ","}
                    </p>
                  ))}
                </div>
              </div>
            )}
            <a
              href={
                data?.homepage
                  ? data?.homepage
                  : "https://tv.apple.com/KH/channel/tvs.sbd.4000?mttn3pid=bandsintown_amplified&mttnagencyid=a9p&mttncc=KH&mttnsiteid=143238&mttnsubad=cf-500143463&mttnsubkw=themoviedb.org&mttnsubplmnt=100006536"
              }
              target="_blank"
              className="px-4 py-2 text-white bg-pink-600 rounded-lg"
            >
              Play Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPoster;
