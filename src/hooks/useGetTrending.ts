import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../services/api";

export const useGetTrending = (endPoint: string) => {
  return useQuery({
    queryKey: ["trending", endPoint],
    queryFn: () => getTrending(endPoint),
  });
};
