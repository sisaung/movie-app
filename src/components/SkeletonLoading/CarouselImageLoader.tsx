const CarouselImageLoader = () => {
  const arrLoader = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="h-[300px] mb-5 flex gap-6 animate-pulse overflow-x-scroll hide-scrollbar">
      {arrLoader.map((i) => (
        <div
          key={i}
          className="w-[150px] h-[200px] lg:w-[165px] lg:h-[230px] rounded-lg bg-gray-700 relative flex-shrink-0"
        >
          <div className=" absolute bottom-0 left-0 translate-y-2/3">
            <div className="size-12 bg-gray-600 rounded-full translate-x-3 mb-3"></div>
            <div className="w-36 h-4  bg-gray-700 mb-3"></div>
            <div className="w-28 h-3   bg-gray-700"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselImageLoader;
// w-[150px] md:w-[155px]
