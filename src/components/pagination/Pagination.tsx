import { Fragment, memo, useCallback, useMemo } from "react";

import { useNavigate } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type PaginationProps = {
  mediaType: string;
  explore?: boolean;
  search?: boolean;
  searchQuery?: string | null;
  animation?: boolean;
  exploreItem?: string;
  currentPage: number;
  totalPages: number;
};

const Pagination = memo(
  ({
    totalPages,
    currentPage,
    mediaType,
    explore,
    search,
    searchQuery,
    animation,
    exploreItem,
  }: PaginationProps) => {
    const navigate = useNavigate();

    const pageCount =
      mediaType === "movie"
        ? Math.floor(
            totalPages >= 500 ? totalPages / (totalPages / 500) : totalPages
          )
        : Math.floor(
            totalPages >= 500 ? totalPages / (totalPages / 500) : totalPages
          );

    const getPageNumbers = () => {
      const maxVisiblePages = 4;
      const halfVisible = Math.floor(maxVisiblePages / 2);

      if (maxVisiblePages >= pageCount) {
        return Array.from({ length: pageCount }, (_, i) => i + 1);
      }

      const start = Math.max(2, currentPage - halfVisible);
      const end = Math.min(pageCount - 1, currentPage + halfVisible);

      return [
        1,
        ...(currentPage > halfVisible + 2 ? ["..."] : []),
        ...Array.from({ length: end - start + 1 }, (_, i) => start + i),
        ...(currentPage < pageCount - halfVisible - 1 ? ["..."] : []),
        pageCount,
      ];
    };

    const pages = useMemo(() => getPageNumbers(), [pageCount, currentPage]);

    const handlePreviousBtn = () => {
      onPageChange(Math.max(1, currentPage - 1));
    };

    const handleNextBtn = () => {
      onPageChange(currentPage + 1);
    };

    const handlePageClick = (pageNumber: number) => {
      onPageChange(pageNumber);
    };

    const onPageChange = useCallback(
      (currentPage: number) => {
        if (explore) {
          navigate(`/explore/${mediaType}/${exploreItem}?page=${currentPage}`);
        } else if (search) {
          navigate(`/search?q=${searchQuery}&page=${currentPage}`);
        } else if (animation) {
          navigate(`/category/animation?page=${currentPage}`);
        }
      },
      [handlePreviousBtn, handleNextBtn, handlePageClick]
    );

    return (
      <section className="flex flex-wrap items-center justify-center w-full gap-1 mb-5 ">
        {currentPage >= 2 && pageCount !== 0 && (
          <button
            disabled={currentPage === 1}
            onClick={handlePreviousBtn}
            className="flex items-center justify-center gap-1 px-2 py-1 text-sm leading-tight text-gray-300 bg-gray-800 border border-gray-700 rounded disabled:opacity-30 disabled:pointer-events-none sm:px-3 sm:py-2 sm:text-base hover:bg-gray-900 hover:text-white "
          >
            <HiChevronLeft className="size-4 " />
            <span className="pr-2">Back</span>
          </button>
        )}
        <div className="flex flex-wrap items-center gap-1">
          {pages.map((pageNumber, index) => (
            <Fragment key={index}>
              {pageNumber === "..." ? (
                <span className="text-sm text-gray-100"> {pageNumber} </span>
              ) : (
                <button
                  onClick={() => handlePageClick(pageNumber as number)}
                  className={` sm:px-3 sm:py-2 px-2 py-1 text-sm sm:text-base leading-tight rounded border 
                
                  ${currentPage === pageNumber ? "bg-gray-900" : "bg-gray-800"}

                  border-gray-700 hover:bg-gray-900 text-gray-300  hover:text-white`}
                >
                  {pageNumber}
                </button>
              )}
            </Fragment>
          ))}
        </div>
        {pageCount !== 0 && (
          <button
            onClick={handleNextBtn}
            disabled={currentPage === pageCount}
            className="flex items-center justify-center gap-1 px-2 py-1 text-sm leading-tight text-gray-300 bg-gray-800 border border-gray-700 rounded disabled:opacity-30 disabled:pointer-events-none hover:bg-gray-900 sm:px-3 sm:py-2 sm:text-base hover:text-white"
          >
            <span className="pl-2">Next</span>
            <HiChevronRight className="size-4 " />
          </button>
        )}
      </section>
    );
  }
);

export default Pagination;
