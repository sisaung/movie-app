import { StateCreator } from "zustand";
import { Sort } from "../components/Filter/FilterLists";

type SelectedSortState = {
  selectedSort: Sort | null;
};

type SelectedSortAction = {
  setSelectedSort: (sort: Sort | null) => void;
};

export type SelectedSortSlice = SelectedSortState & SelectedSortAction;

const initialState = {
  selectedSort: null,
};

const createSelectedSortSlice: StateCreator<SelectedSortSlice> = (set) => ({
  ...initialState,
  setSelectedSort: (sort) => set({ selectedSort: sort }),
});

export default createSelectedSortSlice;
