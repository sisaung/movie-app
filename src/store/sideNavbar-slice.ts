import { StateCreator } from "zustand";

type SideNavbarState = {
  openSideNavbar: boolean;
};

type SideNavbarAction = {
  setOpenSideNavbar: (open: boolean) => void;
};

export type SideNavbarSlice = SideNavbarState & SideNavbarAction;

const initialState = {
  openSideNavbar: false,
};

const createdSideNavbarSlice: StateCreator<SideNavbarSlice> = (set) => ({
  ...initialState,
  setOpenSideNavbar: (open) => set({ openSideNavbar: open }),
});

export default createdSideNavbarSlice;
