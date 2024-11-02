import { StateCreator } from "zustand";
type FilterState = {
  with_genres: string | null;
  sort_by: string | null;
};

type FilterAction = {
  setWithGenres: (genres: string) => void;
  setSortBy: (sort: string) => void;
  clearGenres: () => void;
  clearSortBy: () => void;
};

export type FilterSlice = FilterState & FilterAction;

const initialState = {
  with_genres: null,
  sort_by: null,
};

const createFilterSlice: StateCreator<FilterSlice> = (set) => ({
  ...initialState,
  setWithGenres: (genres) => set({ with_genres: genres }),
  setSortBy: (sort) => set({ sort_by: sort }),
  clearGenres: () => set({ with_genres: null }),
  clearSortBy: () => set({ sort_by: null }),
});

export default createFilterSlice;
