import { FilterSlice } from "../store/filter-slice";
import { FilterPersistanceSlice } from "../store/filterPersistance-slice";
import { ModalSlice } from "../store/modal-slice";
import { SelectedGenreSlice } from "../store/selectedGenre-slice";
import { SelectedSortSlice } from "../store/selectedSort-slice";
import { SideNavbarSlice } from "../store/sideNavbar-slice";

export type StoreState = SelectedGenreSlice &
  SelectedSortSlice &
  SideNavbarSlice &
  ModalSlice &
  FilterSlice &
  FilterPersistanceSlice;
