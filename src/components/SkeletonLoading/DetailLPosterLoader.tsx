const DetailLPosterLoader = () => {
  return (
    <div className="min-h-[550px]">
      <div className="grid w-full animate-pulse lg:w-[900px] xl:w-[1000px] grid-cols-1 lg:grid-cols-3 gap-8 xl:mx-auto">
        <div className="col-span-1">
          <div className="bg-gray-700 w-full rounded-lg h-[400px] lg:h-[500px]"></div>
        </div>
        <div className="w-4/5 col-span-2 space-y-3 xl:w-full ">
          <div className="w-full h-5 bg-gray-700 rounded-lg"></div>
          <div className="w-1/3 h-5 bg-gray-700 rounded-lg"></div>

          <div className="flex items-center gap-5">
            <div className="w-20 h-3 bg-gray-700 rounded-lg"></div>
            <div className="w-20 h-3 bg-gray-700 rounded-lg"></div>
            <div className="w-20 h-3 bg-gray-700 rounded-lg"></div>
            <div className="w-20 h-3 bg-gray-700 rounded-lg"></div>
          </div>

          <div className="flex items-center gap-5 mb-5">
            <div className="bg-gray-700 rounded-full size-12"></div>

            <div className="w-24 h-5 bg-gray-700 rounded-lg"></div>

            <div className="w-24 h-5 bg-gray-700 rounded-lg"></div>
          </div>
          <div className="w-1/3 h-5 mb-5 bg-gray-700 rounded-lg"></div>
          <div className="w-24 h-5 bg-gray-700 rounded-lg"></div>

          <div className="w-full mb-5 bg-gray-700 rounded-lg h-1/4"></div>
          <div className="flex flex-col items-center w-full gap-5 mb-5 md:flex-row">
            <div className="flex items-center w-full gap-3 ">
              <div className="w-32 h-4 bg-gray-700 rounded-lg"> </div>
              <div className="w-32 h-4 bg-gray-700 rounded-lg"> </div>
            </div>

            <div className="flex items-center w-full gap-3 ">
              <div className="w-24 h-4 bg-gray-700 rounded-lg"> </div>
              <div className="w-24 h-4 bg-gray-700 rounded-lg"> </div>
            </div>
          </div>

          <div className="flex items-center w-full gap-3 ">
            <div className="w-24 h-6 bg-gray-700 rounded-lg"> </div>
            <div className="w-24 h-6 bg-gray-700 rounded-lg"> </div>
          </div>
          <div className="flex items-center w-full gap-3 ">
            <div className="w-32 h-6 bg-gray-700 rounded-lg"> </div>
            <div className="w-20 h-4 bg-gray-700 rounded-lg"></div>
            <div className="w-20 h-4 bg-gray-700 rounded-lg"></div>
          </div>

          <div className="h-10 bg-gray-700 rounded-lg w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailLPosterLoader;
