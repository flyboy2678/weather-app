"use client";
import HourlyFocust from "@/components/hourlyFocast";
import { useEffect, useState } from "react";

export default function Home() {
	const [weatherData, setWeatherData] = useState([]);

	const getData = async () => {
		//Tony what i commented here is dangerous code dont touch
		// const response = await fetch(
		// 	"https://api.teleport.org/api/cities?search=pretoria"
		// );
		// const city = await response.json();
		const another = await fetch(
			"https://api.teleport.org/api/cities/geonameid:964137/"
		);
		const coodinates = await another.json();
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/hourly?lat=${coodinates.location.latlon.latitude}&lon=${coodinates.location.latlon.longitude}&appid=248e9e054c209c8eaa12f32c46e1bd57&units=metric&cnt=23`
		);
		setWeatherData(await response.json());
	};

	useEffect(() => {
		getData();
	}, []);
	const components = weatherData.list.map((wd) => {
		const date = h.dt_txt;
		const parsedDate = new Date(date);
		const hours = parsedDate.getHours();
		const minutes = parsedDate.getMinutes();
		const timeString = `${hours}:${minutes}`;
		return (
			<HourlyFocust
				key={timeString}
				hour={timeString}
				temp={Math.round(wd.main.temp)}
			/>
		);
	});
	return (
		<div className="flex flex-row items-center py-10 gap-1">
			{components}
		</div>
	);
}
