import axios from "axios";
import { Discover } from "../Types/discover";
import { GenreLists } from "../Types/genres";
import { Details } from "../Types/detail";
import { QueryParams } from "../Types/query";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_TMDB_API_ACCESS_TOKEN
}`;

export const getDetail = async (endPoint: string, id: string) => {
  const res = await axiosInstance.get<Details>(`/${endPoint}/${id}`);
  return res.data;
};

export const getTrending = async (endPoint: string) => {
  const res = await axiosInstance.get<Discover>(`/trending/movie/${endPoint}`);
  return res.data;
};

export const getGenre = async (mediaType: string) => {
  const res = await axiosInstance.get<GenreLists>(
    `/genre/${mediaType}/list?language=en`
  );
  return res.data;
};

export const fetchData = async <T>(
  endPoint: string,
  params?: QueryParams | undefined
): Promise<T> => {
  //params have or not
  const searchParams = new URLSearchParams(
    Object.entries(params ?? {})
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, value!.toString()])
  );

  const completeUrl = searchParams.toString()
    ? `${endPoint}?${searchParams.toString()}`
    : endPoint;

  const res = await axiosInstance.get<T>(`/${completeUrl}`);
  return res.data;
};
