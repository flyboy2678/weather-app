"use client";
import HourlyFocust from "@/components/hourlyFocast";
import { useContext } from "react";
import { CityContext, UnitContext, WeatherContext } from "./layout";

export default function Home() {
	const [weatherData, setWeatherData] = useContext(WeatherContext);
	const [unit, setUnit] = useContext(UnitContext);

	const components = weatherData.forecast?.forecastday[0]?.hour?.map((wd) => {
		const date = wd.time;
		const parsedDate = new Date(date);
		// Get hours and minutes
		const hours = parsedDate.getHours().toString().padStart(2, "0");
		const minutes = parsedDate.getMinutes().toString().padStart(2, "0");
		// Create a time string in HH:MM format
		const timeString = `${hours}:${minutes}`;
		return (
			<HourlyFocust
				key={timeString}
				hour={timeString}
				temp={Math.round(unit === "C" ? wd.temp_c : wd.temp_f)}
			/>
		);
	});

	return (
		<div className="flex flex-row items-center h-52 gap-1 overflow-x-scroll bar">
			{components}
		</div>
	);
}
