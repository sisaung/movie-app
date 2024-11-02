import { useQuery } from "@tanstack/react-query";
import { getDetail } from "../services/api";

export const useGetDetails = (endPoint: string, id: string) => {
  return useQuery({
    queryKey: ["detail", endPoint, id],
    queryFn: () => getDetail(endPoint, id),
  });
};
