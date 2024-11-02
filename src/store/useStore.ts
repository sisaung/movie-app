import { create } from "zustand";
import { StoreState } from "../Types/store";
import createSelectedGenreSlice from "./selectedGenre-slice";
import createSelectedSortSlice from "./selectedSort-slice";
import createdSideNavbarSlice from "./sideNavbar-slice";
import createModalSlice from "./modal-slice";
import createFilterSlice from "./filter-slice";
import createFilterPersistanceSlice from "./filterPersistance-slice";

const useStore = create<StoreState>()((...a) => ({
  ...createSelectedGenreSlice(...a),
  ...createSelectedSortSlice(...a),
  ...createdSideNavbarSlice(...a),
  ...createModalSlice(...a),
  ...createFilterSlice(...a),
  ...createFilterPersistanceSlice(...a),
}));

export default useStore;
