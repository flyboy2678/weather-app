"use client";
import DailyFocust from "@/components/dailyFocast";
import { useState, useEffect } from "react";

function Weekly() {
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
			`https://api.openweathermap.org/data/2.5/hourly?lat=${coodinates.location.latlon.latitude}&lon=${coodinates.location.latlon.longitude}&appid=248e9e054c209c8eaa12f32c46e1bd57&units=metric&cnt=7`
		);
		setWeatherData(await response.json());
	};

	useEffect(() => {
		getData();
	}, []);
	const components = weatherData.list.map((wd) => {
		return (
			<DailyFocust
				key={wd.dt}
				day={"Mon"}
				high={Math.round(wd.temp.max)}
				low={Math.round(wd.temp.min)}
			/>
		);
	});
	return (
		<div className="flex flex-row items-center py-10 gap-1">
			{components}
		</div>
	);
}

export default Weekly;
