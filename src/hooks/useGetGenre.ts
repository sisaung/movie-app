import { useQuery } from "@tanstack/react-query";
import { getGenre } from "../services/api";

export const useGetGenre = (mediaType: string) => {
  return useQuery({
    queryKey: ["genre", mediaType],
    queryFn: () => getGenre(mediaType),
  });
};
