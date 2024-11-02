import ReactPlayer from "react-player";
import { useShallow } from "zustand/react/shallow";
import { HiXMark } from "react-icons/hi2";
import useStore from "../../store/useStore";

type VideoModalProps = {
  videoKey: string;
};

const VideoModal = ({ videoKey }: VideoModalProps) => {
  const { openModal, setOpenModal, setVideoKey } = useStore(
    useShallow((state) => ({
      openModal: state.openModal,
      setOpenModal: state.setOpenModal,
      setVideoKey: state.setVideoKey,
    }))
  );

  const handleCloseModal = () => {
    setOpenModal(false);
    setVideoKey("");
  };

  return (
    <>
      <div
        className={`${
          openModal ? "scale-100" : "scale-0"
        } fixed top-0 left-0 flex justify-center items-center bg-primary opacity-95 w-full h-full z-40`}
      >
        <div
          className={`w-full md:w-3/5 ${
            openModal ? "scale-100 duration-500 ease-in-out" : "scale-0  "
          } max-w-[80%] aspect-video z-50`}
        >
          <div className="flex justify-end">
            <button
              onClick={handleCloseModal}
              className="active:scale-90 duration-300"
            >
              <HiXMark className="text-white size-6" />
            </button>
          </div>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            width="100%"
            height="100%"
            controls
          />
        </div>
      </div>
    </>
  );
};

export default VideoModal;
