export type ResultDiscover = {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  release_date: string;
  first_air_date: string;
  media_type: string;
};

export type Discover = {
  page: number;
  total_pages: number;
  total_results: number;
  results: ResultDiscover[];
};
