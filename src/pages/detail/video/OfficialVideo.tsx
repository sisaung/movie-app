import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import { useShallow } from "zustand/react/shallow";
import VideoModal from "../../../components/video/VideoModal";
import useStore from "../../../store/useStore";
import { useGetData } from "../../../hooks/useGetData";
import { DetailsVideos } from "../../../Types/detail";

const OfficialVideo = () => {
  const { mediaType, id } = useParams();

  const { data } = useGetData<DetailsVideos>(`${mediaType}/${id}/videos`);

  const { videoKey } = useStore(
    useShallow((state) => ({
      videoKey: state.videoKey,
    }))
  );

  return (
    <section>
      {data?.results.length !== 0 && (
        <div className="px-5 mb-10 xl:mx-auto w-full xl:w-[1150px] z- ">
          <h1 className="mb-3 text-xl text-white"> Official Videos </h1>
          <div className="flex items-center gap-5 overflow-x-auto hide-scrollbar ">
            {data?.results.slice(0, 4).map((video) => (
              <VideoPlayer key={video.id} video={video} />
            ))}
          </div>

          <VideoModal videoKey={videoKey} />
        </div>
      )}
    </section>
  );
};

export default OfficialVideo;
