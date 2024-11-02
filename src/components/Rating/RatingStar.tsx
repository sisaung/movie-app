import { HiStar } from "react-icons/hi2";

const RatingStar = ({ voteAverage }: { voteAverage: number }) => {
  return (
    <div className="flex justify-end items-center gap-1">
      <HiStar className="text-yellow-400" />
      <p className="text-yellow-400 text-sm"> {voteAverage.toFixed(1)} </p>
    </div>
  );
};

export default RatingStar;
