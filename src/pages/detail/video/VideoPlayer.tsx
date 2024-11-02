import { DetailsVideoResults } from "../../../Types/detail";
import { useShallow } from "zustand/react/shallow";
import LazyLoadingImage from "../../../components/LazyLoadingImage/LazyLoadingImage";
import { HiMiniPlay } from "react-icons/hi2";
import useStore from "../../../store/useStore";
type VideoPlayerProps = {
  video: DetailsVideoResults;
};

const VideoPlayer = ({ video }: VideoPlayerProps) => {
  const { setOpenModal, setVideoKey } = useStore(
    useShallow((state) => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
      setVideoKey: state.setVideoKey,
    }))
  );

  const handleVideoPlayModal = () => {
    setVideoKey(video.key);
    setOpenModal(true);
  };

  return (
    <>
      <div
        className="flex flex-col mb-auto cursor-pointer hover:opacity-75 group"
        onClick={handleVideoPlayModal}
      >
        <div className="w-[260px] relative group-hover:scale-105 duration-500 ">
          <div className="w-full h-[150px] bg-gray-800">
            <LazyLoadingImage
              src={`https://i.ytimg.com/vi/${video.key}/mqdefault.jpg`}
              className="rounded-lg"
              alt={video.name}
              width="100%"
              height="100%"
            />
          </div>

          <h2 className="mt-2 text-white"> {video.name} </h2>
          <div className="absolute  top-[27%] left-[43%]">
            <HiMiniPlay className="text-white size-10 group-hover:text-pink-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
