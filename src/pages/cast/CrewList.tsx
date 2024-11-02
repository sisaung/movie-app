import { useParams } from "react-router-dom";
import { Credits, Crews } from "../../Types/credits";
import AllCastList from "./AllCastList";
import { useGetData } from "../../hooks/useGetData";

type CrewListProps = {
  crew: Crews;
};

const CrewList = ({ crew }: CrewListProps) => {
  const { mediaType, id } = useParams();

  const { data } = useGetData<Credits>(`${mediaType}/${id}/credits`);

  const filter = data?.crew.filter((el) => el.department === crew.department);

  return (
    <div>
      <h1 className="text-gray-200 font-semibold mb-3 text-lg ">
        {crew.department}
      </h1>
      <div className="flex flex-col gap-5">
        {filter?.map((filter, index) => (
          <AllCastList key={index} allCasts={filter} crew />
        ))}
      </div>
    </div>
  );
};

export default CrewList;
