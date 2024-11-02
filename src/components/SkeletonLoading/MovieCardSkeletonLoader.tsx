const MovieCardSkeletonLoader = () => {
  return (
    <div className="grid mb-32 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 animate-pulse">
      <div className="col-span-1  bg-gray-700 h-[250px] sm:h-[300px] 2xl:h-[500px] rounded-lg relative">
        <div className="absolute left-2 -bottom-20">
          <div className="size-12 bg-gray-600 rounded-full mb-3"></div>
          <div className="w-36 sm:w-40 h-4 bg-gray-600 mb-3"></div>
          <div className="w-24 h-4 bg-gray-600 "></div>
        </div>
      </div>
      <div className="col-span-1 bg-gray-700 h-[250px] sm:h-[300px] 2xl:h-[500px] rounded-lg relative">
        <div className="absolute left-2 -bottom-20">
          <div className="size-12 bg-gray-600 rounded-full mb-3"></div>
          <div className="w-36 sm:w-40 h-4 bg-gray-600 mb-3"></div>
          <div className="w-24 h-4 bg-gray-600 "></div>
        </div>
      </div>
      <div className="col-span-1 hidden sm:block bg-gray-700 h-[300px]  2xl:h-[500px] rounded-lg relative">
        <div className="absolute left-2 -bottom-20">
          <div className="size-12 bg-gray-600 rounded-full mb-3"></div>
          <div className="w-36 sm:w-40 h-4 bg-gray-600 mb-3"></div>
          <div className="w-24 h-4 bg-gray-600 "></div>
        </div>
      </div>
      <div className="col-span-1 lg:block hidden bg-gray-700 h-[300px] 2xl:h-[500px] rounded-lg relative">
        <div className="absolute left-2 -bottom-20">
          <div className="size-12 bg-gray-600 rounded-full mb-3"></div>
          <div className="w-44 h-4 bg-gray-600 mb-3"></div>
          <div className="w-28 h-4 bg-gray-600 "></div>
        </div>
      </div>
      <div className="col-span-1 hidden xl:block bg-gray-700 h-[300px] 2xl:h-[500px] rounded-lg relative">
        <div className="absolute left-2 -bottom-20  ">
          <div className="size-12 bg-gray-600 rounded-full mb-3"></div>
          <div className="w-44 h-4 bg-gray-600 mb-3"></div>
          <div className="w-28 h-4 bg-gray-600 "></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeletonLoader;
