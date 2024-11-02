export type QueryParams = {
  page: number;
  with_genres?: string;
  sort_by?: string;
  query?: string | null;
  searchParams?: string | null;
  "vote_count.gte"?: number;
  "air_date.gte"?: string;
  "air_date.lte"?: string;
};
