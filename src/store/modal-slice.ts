import { StateCreator } from "zustand";

type ModalState = {
  openModal: boolean;
  videoKey: string;
};
type ModalAction = {
  setOpenModal: (modal: boolean) => void;
  setVideoKey: (videoKey: string) => void;
};

export type ModalSlice = ModalState & ModalAction;

const initialState = {
  openModal: false,
  videoKey: "",
};

const createModalSlice: StateCreator<ModalSlice> = (set) => ({
  ...initialState,
  setOpenModal: (modal) => set({ openModal: modal }),
  setVideoKey: (videoKey) => set({ videoKey: videoKey }),
});
export default createModalSlice;
