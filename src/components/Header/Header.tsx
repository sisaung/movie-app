import { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { useShallow } from "zustand/react/shallow";
import useStore from "../../store/useStore";

type HeaderProps = {
  scrollContainerRef: RefObject<HTMLDivElement>;
};
const Header = ({ scrollContainerRef }: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { setOpenSideNavbar } = useStore(
    useShallow((state) => ({
      setOpenSideNavbar: state.setOpenSideNavbar,
    }))
  );

  const throttle = (func: () => void, limit: number) => {
    let lastRan: number;

    return function () {
      if (!lastRan) {
        func.apply(null, []);
        lastRan = Date.now();
      } else if (Date.now() - lastRan >= limit) {
        func.apply(null, []);
        lastRan = Date.now();
      }
    };
  };

  const toggleSearchBar = () => {
    if (scrollY > 100 && scrollY > lastScrollY) {
      setOpenSearchBar(false);
    } else if (scrollY < lastScrollY) {
      setOpenSearchBar(true);
    }

    setLastScrollY(scrollY);
  };
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleScroll = () => {
      setScrollY(scrollContainer?.scrollTop ?? 0);
    };

    if (scrollContainer) {
      scrollContainer?.addEventListener("scroll", throttle(handleScroll, 300));
    }

    return () => {
      if (scrollContainer) {
        scrollContainer?.addEventListener("scroll", handleScroll);
      }
    };
  }, [scrollContainerRef]);

  useEffect(() => {
    toggleSearchBar();
  }, [scrollY, toggleSearchBar]);

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(inputRef.current?.value);
      navigate(`/search?q=${inputRef.current?.value}`);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleSideNavigation = () => {
    setOpenSideNavbar(true);
  };

  return (
    <header>
      <div
        className={`fixed ${
          openSearchBar ? "translate-y-0" : "-translate-y-full"
        } duration-500 w-full lg:w-[80%] xl:w-[84%] flex lg:justify-end justify-between items-center  py-3.5 px-5 bg-gray-900 z-[60]`}
      >
        <button className="lg:hidden block" onClick={handleSideNavigation}>
          <HiBars3 className="size-7 text-white  " />
        </button>

        <div className="relative w-4/5 md:w-1/3 xl:w-1/2">
          <HiOutlineMagnifyingGlass className="text-white size-5 absolute top-0 left-0 translate-x-full translate-y-1/2 " />
          <input
            type="text"
            onKeyUp={handleKeyUp}
            ref={inputRef}
            placeholder="Search"
            className="focus:text-white w-full  py-2 border  border-gray-400 rounded-lg focus:outline-none bg-transparent placeholder:text-sm ps-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
