import { create } from "zustand";

export const useWeatherDataStore = create((set) => ({
	//weather data
	weatherData: {},
	setWeatherData: (value) => set({ weatherData: value }),

	//unit
	unit: "C",
	setUnit: (value) => set({ unit: value }),

	//city
	city: "",
	setCity: (value) => set({ city: value }),

	clearStore: () => set({ weatherData: {}, unit: "", city: "" }),
}));
