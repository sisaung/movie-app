import { useState } from "react";
import SwitchTab from "../../../components/SwitchTab/SwitchTab";
import { useGetTrending } from "../../../hooks/useGetTrending";

import CarouselImageLoader from "../../../components/SkeletonLoading/CarouselImageLoader";
import CarouselSlide from "../../../components/Carousel/CarouselSlide";

const Trending = () => {
  const [time, setTime] = useState<string>("day");

  const { data: trending, isPending } = useGetTrending(time);

  const onTabChange = (tab: string) => {
    setTime(tab === "Day" ? "day" : "week");
  };

  return (
    <section className="px-5">
      <div className="mb-3 flex-row-jb">
        <h2 className="text-2xl font-semibold text-gray-300 select-none">
          Trending
        </h2>
        <SwitchTab data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>

      {isPending ? (
        <CarouselImageLoader />
      ) : (
        <>
          <CarouselSlide data={trending?.results} activePage="home" />
        </>
      )}
    </section>
  );
};

export default Trending;
