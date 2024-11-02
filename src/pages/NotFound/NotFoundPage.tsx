import { HiChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-gray-400 text-2xl mb-3">
        Sorry,Something went wrong
      </h1>
      <Link
        to="/"
        className="active:scale-90 duration-300 hover:bg-gray-900 inline-flex items-center gap-1 border border-gray-300 px-4 py-2 rounded text-gray-300"
      >
        <HiChevronLeft />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
