import { useOutletContext, useParams } from "react-router-dom";
import LazyLoadingImage from "../../../components/LazyLoadingImage/LazyLoadingImage";
import { imageOrgUrl } from "../../../lib/constant";
import { useGetDetails } from "../../../hooks/useGetDetails";
import DetailPoster from "./DetailPoster";
import { OutletContext } from "../DetailPage";
import { useEffect } from "react";

const DetailBanner = () => {
  const { mediaType, id } = useParams();

  const { data, isPending } = useGetDetails(mediaType ?? "", id ?? "");

  const { scrollContainerRef } = useOutletContext<OutletContext>();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer?.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <section className="min-h-[600px] xl:min-h-[600px] 2xl:min-h-full px-5">
        <div
          className="absolute mt-20 w-full h-full xl:h-[600px] 2xl:h-[700px] 
         top-0 left-0"
        >
          {!isPending && (
            <LazyLoadingImage
              width="100%"
              height="100%"
              className="object-cover object-top w-full h-full"
              src={`${imageOrgUrl}/${data?.backdrop_path}`}
              alt={data?.title || data?.name}
            />
          )}
          {/* opacity 85 */}

          <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-85 "></div>
        </div>
        <DetailPoster data={data!} isPending={isPending} />
      </section>
    </>
  );
};

export default DetailBanner;
