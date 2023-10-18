"use client";
import Image from "next/image";
import React, { useState } from "react";

function LeftDesktop() {
	// const [weatherData, setWeatherData] = useState([]);
	// React.useEffect(() => {
	// 	//cities();
	// }, []);
	// const cities = async () => {
	// 	//Tony what i commented here is dangerous code dont touch
	// 	// const response = await fetch(
	// 	// 	"https://api.teleport.org/api/cities?search=pretoria"
	// 	// );
	// 	// const city = await response.json();
	// 	const another = await fetch(
	// 		"https://api.teleport.org/api/cities/geonameid:964137/"
	// 	);
	// 	const coodinates = await another.json();
	// 	const response = await fetch(
	// 		`https://api.openweathermap.org/data/2.5/weather?lat=${coodinates.location.latlon.latitude}&lon=${coodinates.location.latlon.longitude}&appid=248e9e054c209c8eaa12f32c46e1bd57&units=metric`
	// 	);
	// 	// setWeatherData(await response.json());
	// };

	const date = new Date();
	const showDay = date.toLocaleDateString("en-US", { weekday: "short" });
	const showTime = date.getHours() + " : " + date.getMinutes();

	return (
		<div className="flex flex-col min-h-screen max-h-screen w-1/4 p-14 overflow-hidden">
			<input
				className="p-2 placeholder-black"
				type="search"
				placeholder="Search for place"
			/>
			<Image
				src="/animated/cloudy-day-1.svg"
				width={300}
				height={300}
				alt="Weather"
			/>
			{/* <p className="text-5xl">{weatherData.main.temp}°C</p> */}
			<p className="my-10">
				<span>{showDay}</span>
				<span>{showTime}</span>
			</p>
			<div className="bg-slate-200 h-[1px] mb-10"></div>
			<div className="flex flex-row items-center">
				<Image
					src="/static/cloudy-day-1.svg"
					width={64}
					height={64}
					alt="Weather Conditions"
				/>
				{/* <p>{weatherData.weather[0].description}</p> */}
			</div>
			<div className="flex flex-row items-center">
				<Image
					src="/static/rainy-7.svg"
					width={64}
					height={64}
					alt="rain chance"
				/>
				<p>Rain 0%</p>
			</div>
			<div className="w-full h-20 rounded-xl bg-black mt-10 text-white"></div>
		</div>
	);
}

export default LeftDesktop;
