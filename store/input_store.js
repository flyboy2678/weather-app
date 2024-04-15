import { create } from "zustand";

export const useInputStore = create((set) => ({
	input: "",
	setInput: (value) => set({ input: value }),

	clearStore: () => set({ input: "" }),
}));
