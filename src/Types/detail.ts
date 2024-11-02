export type DetailsVideoResults = {
  id: number;
  key: string;
  name: string;
};

export type Details = {
  id: number;
  homepage: string;
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
  genres: { id: number; name: string }[];
  status: string;
  tagline: string;
  runtime: number;
};

export type DetailsVideos = {
  results: DetailsVideoResults[];
};
