import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyLoadingImageProps {
  src: string;
  className?: string;
  alt: string | undefined;
  width: string;
  height?: string;
}

const LazyLoadingImage = ({
  src,
  className,
  alt,
  width,
  height,
}: LazyLoadingImageProps) => {
  return (
    <>
      <LazyLoadImage
        width={width}
        height={height}
        className={className}
        src={src}
        effect="blur"
        alt={alt}
        placeholderSrc={src}
      />
    </>
  );
};

export default LazyLoadingImage;
