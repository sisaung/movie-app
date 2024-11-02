import {
  keepPreviousData,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { fetchData } from "../services/api";
import { QueryParams } from "../Types/query";

export const useGetData = <T>(
  endPoint: string,
  params?: QueryParams
): UseQueryResult<T> => {
  return useQuery<T, Error>({
    queryKey: ["discover", endPoint, params],
    queryFn: () => fetchData(endPoint, params),
    placeholderData: keepPreviousData,
  });
};
