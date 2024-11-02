const RatingCircleProgress = ({ voteAverage }: { voteAverage: number }) => {
  const voteProgressColor =
    voteAverage <= 3
      ? "text-red-500"
      : voteAverage <= 7
      ? "text-yellow-500"
      : voteAverage <= 10
      ? "text-emerald-500"
      : "";

  return (
    <div className="translate-x-2">
      <div className="relative size-8 sm:size-10 rounded-full bg-white">
        <svg
          className="size-full -rotate-[90deg]"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle (Gauge) */}
          <circle
            cx={18}
            cy={18}
            r={16}
            fill="none"
            className="stroke-current text-gray-200 "
            strokeWidth="2"
            strokeDasharray={`100 100`}
            strokeLinecap="round"
          />
          {/* Gauge Progress */}
          <circle
            cx={18}
            cy={18}
            r={16}
            fill="none"
            className={`stroke-current ${voteProgressColor}`}
            strokeWidth="2"
            strokeDasharray={`${
              voteAverage === undefined
                ? "0"
                : parseFloat(voteAverage.toFixed(1)) * 10
            } 100`}
            strokeLinecap="round"
          />
        </svg>
        {/* Value Text */}
        <div className=" absolute top-1/2 start-1/2  -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-xs sm:text-sm font-bold text-primary">
            {voteAverage === undefined || voteAverage === 0
              ? "NR"
              : voteAverage.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RatingCircleProgress;
