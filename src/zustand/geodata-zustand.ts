import { create } from "zustand";
import type { SrtData } from "../types/data";

type SrtDataZustand = {
  srtData: SrtData[];
  setSrtData: (data: SrtData[]) => void;

  filename?: string;
  setFilename: (name: string) => void;
};

export const useSrtDataStore = create<SrtDataZustand>((set) => ({
  srtData: [],
  setSrtData: (data) => set({ srtData: data }),

  filename: undefined,
  setFilename: (name) => set({ filename: name }),
}));
