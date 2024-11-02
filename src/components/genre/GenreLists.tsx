import { useGetGenre } from "../../hooks/useGetGenre";
import { Genres } from "../../Types/genres";

const GenreLists = ({ genreId }: { genreId: number[] }) => {
  const { data: genreMovieLists } = useGetGenre("movie");

  let genre: Genres[] = [];

  genreId.forEach((id) => {
    const genreList = genreMovieLists?.genres.filter(
      (movieGenre) => movieGenre.id === id
    );

    genre.push(...(genreList ?? []));
  });

  return (
    <div className="flex gap-2 items-center">
      {genre.slice(0, 3).map((g, i) => (
        <p key={i} className="text-nowrap rounded-md text-gray-400  text-sm">
          {g.name}
        </p>
      ))}
    </div>
  );
};

export default GenreLists;
