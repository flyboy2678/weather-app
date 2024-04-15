"use client";
import HourlyFocust from "@/components/hourlyFocast";
import { iconLogic } from "@/public/iconLogic";
import { staticIcons } from "@/public/staticIcons";
import { useWeatherDataStore } from "@/store/weather_data_store";

export default function Home() {
	const { weatherData, unit } = useWeatherDataStore();

	const components = weatherData.forecast?.forecastday[0]?.hour?.map((wd) => {
		const date = wd.time;
		const parsedDate = new Date(date);
		// Get hours and minutes
		const hours = parsedDate.getHours().toString().padStart(2, "0");
		const minutes = parsedDate.getMinutes().toString().padStart(2, "0");
		// Create a time string in HH:MM format
		const timeString = `${hours}:${minutes}`;
		//performing some icon logic
		const weatherCode = wd.condition.code;
		const isDay = wd.is_day;
		const icon = iconLogic(weatherCode, staticIcons, isDay);
		return (
			<HourlyFocust
				key={timeString}
				hour={timeString}
				temp={Math.round(unit === "C" ? wd.temp_c : wd.temp_f)}
				icon={icon}
			/>
		);
	});

	return (
		<div className="flex flex-row items-center h-52 gap-1 overflow-x-scroll bar">
			{components}
		</div>
	);
}
