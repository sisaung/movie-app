import { useState } from "react";

interface SwitchTabProps {
  data: string[];
  onTabChange: (tab: string) => void;
}

const SwitchTab = ({ data, onTabChange }: SwitchTabProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabBtn = (i: number, tab: string) => {
    setSelectedTab(i);
    onTabChange(tab);
  };

  return (
    <div className="flex items-center text-sm bg-white rounded-full ">
      <div className="relative flex">
        {data.map((d, i) => (
          <div
            key={i}
            className={`z-40  px-5 sm:px-7 h-7 flex items-center select-none ${
              selectedTab === i ? "  text-white text-sm rounded-full" : ""
            }`}
          >
            <button onClick={() => handleTabBtn(i, d)}>{d}</button>
          </div>
        ))}
        <span
          className={`${
            selectedTab ? "translate-x-full" : "translate-x-0"
          } duration-300 absolute text-sm top-0 left-0 rounded-full z-10 bg-pink-500  w-1/2 h-7 `}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTab;
