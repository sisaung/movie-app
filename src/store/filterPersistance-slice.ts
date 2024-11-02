import { StateCreator } from "zustand";

type FilterPersistanceState = {
  storeExploreItem: string;
  storeMediaType: string;
};

type FilterPersistanceAction = {
  setExplore: (explore: string) => void;
  setStoreMediaType: (mediaType: string) => void;
};

export type FilterPersistanceSlice = FilterPersistanceState &
  FilterPersistanceAction;

const initialState = {
  storeExploreItem: "",
  storeMediaType: "",
};

const createFilterPersistanceSlice: StateCreator<FilterPersistanceSlice> = (
  set
) => ({
  ...initialState,
  setExplore: (explore) => set({ storeExploreItem: explore }),
  setStoreMediaType: (mediaType) => set({ storeMediaType: mediaType }),
});

export default createFilterPersistanceSlice;
