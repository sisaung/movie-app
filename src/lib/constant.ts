export const imageUrl = "https://image.tmdb.org/t/p/w300/";
export const imageUrlP = "https://image.tmdb.org/t/p/w400/";
export const imageOrgUrl = "https://image.tmdb.org/t/p/w780/";

export const sortMovie = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "primary_release_date.desc",
    label: "Release Date Descending",
  },
  { value: "primary_release_date.asc", label: "Release Date Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_title.desc", label: "Title (Z-A)" },
];

export const sortTvShow = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  {
    value: "first_air_date.desc",
    label: "First Air Date Descending",
  },
  { value: "first_air_date.asc", label: "First Air Date Ascending" },
  { value: "original_name.asc", label: "Title (A-Z)" },
  { value: "original_name.desc", label: "Title (Z-A)" },
];
