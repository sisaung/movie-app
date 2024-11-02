import { RefObject } from "react";
import Cast from "./cast/Cast";
import DetailBanner from "./detailBanner/DetailBanner";
import Recommendation from "./recommendation/Recommendation";
import Similar from "./similar/Similar";
import OfficialVideo from "./video/OfficialVideo";

export type OutletContext = {
  scrollContainerRef: RefObject<HTMLDivElement>;
};

const DetailPage = () => {
  return (
    <div className="mt-20">
      <DetailBanner />
      <Cast />
      <OfficialVideo />
      <Similar />
      <Recommendation />
    </div>
  );
};

export default DetailPage;
