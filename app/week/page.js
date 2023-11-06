"use client";
import DailyFocust from "@/components/dailyFocast";
import { useContext } from "react";
import { CityContext, UnitContext, WeatherContext } from "../layout";
import { iconLogic } from "@/public/iconLogic";
import { staticIcons } from "@/public/staticIcons";

function Weekly() {
	const [weatherData, setWeatherData] = useContext(WeatherContext);
	const [unit, setUnit] = useContext(UnitContext);

	const components = weatherData.forecast?.forecastday?.map((wd) => {
		const dateObject = new Date(wd.date);
		const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const dayOfWeek = daysOfWeek[dateObject.getDay()];
		//some icon logic here
		const weatherCode = wd.day.condition.code;
		const isDay = 1;
		const icon = iconLogic(weatherCode, staticIcons, isDay);
		return (
			<DailyFocust
				key={wd.date}
				day={dayOfWeek}
				high={Math.round(
					unit === "C" ? wd.day.mintemp_c : wd.day.mintemp_f
				)}
				low={Math.round(
					unit === "C" ? wd.day.maxtemp_c : wd.day.maxtemp_f
				)}
				icon={icon}
			/>
		);
	});
	return (
		<div className="flex flex-row items-center h-52 gap-1">
			{components}
		</div>
	);
}

export default Weekly;
