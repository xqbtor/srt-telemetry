import { create } from "zustand";
import type { SrtData } from "../types/data";

type SrtDataZustand = {
  srtData: SrtData[];
  setSrtData: (data: SrtData[]) => void;
};

export const useSrtDataStore = create<SrtDataZustand>((set) => ({
  srtData: [],
  setSrtData: (data) => set({ srtData: data }),
}));
