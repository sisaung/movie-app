import { MultiValue } from "react-select";
import { Genre } from "../components/Filter/FilterLists";
import { StateCreator } from "zustand";

type SelectedGenreState = {
  selectedGenre: MultiValue<Genre> | null;
};

type SelectedGenreAction = {
  setSelectedGenre: (genre: MultiValue<Genre> | null) => void;
};

export type SelectedGenreSlice = SelectedGenreState & SelectedGenreAction;

const initialState = {
  selectedGenre: null,
};

const createSelectedGenreSlice: StateCreator<SelectedGenreSlice> = (set) => ({
  ...initialState,
  setSelectedGenre: (genre) => set({ selectedGenre: genre }),
});

export default createSelectedGenreSlice;
