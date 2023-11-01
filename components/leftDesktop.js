"use client";
import Image from "next/image";
import { useState, useContext, createContext } from "react";
import SearchResults from "./searchResults";
import { CityContext, UnitContext, WeatherContext } from "@/app/layout";

export const InputContext = createContext();
function LeftDesktop() {
	const [weatherData, setWeatherData] = useContext(WeatherContext);
	const [input, setInput] = useState("");
	const [cities, setCities] = useState([]);
	const [city, setCity] = useContext(CityContext);
	const [unit, setUnit] = useContext(UnitContext);

	const fetchCity = async (value) => {
		try {
			const response = await fetch(
				`http://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${input}`
			);
			const data = await response.json();
			const results = await data?.filter((city) => {
				return value && city && city.name;
			});
			setCities(results);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChange = (value) => {
		setInput(value);
		fetchCity(value);
	};
	const date = new Date();
	const showDay = date.toLocaleDateString("en-US", { weekday: "short" });
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	// Create a time string in HH:MM format
	const showTime = `${hours}:${minutes}`;
	return (
		<div className="flex flex-col min-h-screen max-h-screen w-1/4 p-14 overflow-hidden">
			<input
				className="p-2 placeholder-black w-60"
				type="search"
				placeholder="Search for place"
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<InputContext.Provider value={setInput}>
				<SearchResults cities={cities} setCities={setCities} />
			</InputContext.Provider>
			<Image
				src="/animated/cloudy-day-1.svg"
				width={300}
				height={300}
				alt="Weather"
				priority
			/>
			<p className="text-5xl">
				{weatherData.current
					? `${Math.round(
							unit === "C"
								? weatherData.current.temp_c
								: weatherData.current.temp_f
					  )}°${unit}`
					: "Loading..."}
			</p>

			<p className="my-10">
				<span>{showDay}</span>
				<span>{showTime}</span>
			</p>
			<div className="bg-slate-200 h-[1px] mb-10"></div>
			<div className="flex flex-row items-center">
				<Image
					src="/static/day.svg"
					// src={`http:${weatherData?.current?.condition?.icon}`}
					width={64}
					height={64}
					alt="Weather Conditions"
				/>

				<p>
					{weatherData.current
						? weatherData.current.condition.text
						: "Loading..."}
				</p>
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
			<div className="w-full h-20 rounded-xl bg-black mt-10 text-white p-4 text-center">
				<h1>{weatherData?.location?.name}</h1>
				<h1>{weatherData?.location?.country}</h1>
			</div>
		</div>
	);
}

export default LeftDesktop;
