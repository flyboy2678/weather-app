"use client";
import {
	WiStrongWind,
	WiThermometer,
	WiRaindrop,
	WiHumidity,
	WiWindDeg,
	WiSunrise,
	WiSunset,
	WiDaySunny,
	WiBarometer,
} from "react-icons/wi";
import Misc from "@/components/misc";
import React, { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useWeatherDataStore } from "@/store/weather_data_store";

const WeatherInfo = () => {
	const { setWeatherData } = useWeatherDataStore();
	const { weatherData } = useWeatherDataStore();
	const { setCity } = useWeatherDataStore();
	const { city } = useWeatherDataStore();
	const { unit } = useWeatherDataStore();

	const getData = async () => {
		const response = await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${city}&days=3&aqi=no&alerts=no`
		);
		setWeatherData(await response.json());
		localStorage.setItem("city", city);
	};

	const getCityOnLoad = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const location = `${position.coords.latitude},${position.coords.longitude}`;
					localStorage.setItem("city", location);
					setCity(location);
					localStorage.setItem("functionHasRan", true);
				},
				(error) => {
					setError(error.message);
				}
			);
		}
	};

	useEffect(() => {
		const hasFunctionRan = localStorage.getItem("functionHasRan");
		if (!hasFunctionRan) {
			getCityOnLoad();
		} else {
			const storedCity = localStorage.getItem("city");
			if (storedCity) {
				setCity(storedCity);
			}
		}
	}, []);

	useEffect(() => {
		getData();
	}, [city]);
	return (
		<div className="text-white grid grid-cols-5 gap-5 mt-10">
			<Misc
				icon={<WiStrongWind />}
				type={"WIND"}
				data={
					unit === "C"
						? `${weatherData?.current?.wind_kph} KM/H`
						: `${weatherData?.current?.wind_mph} MPH`
				}
			/>
			<Misc
				icon={<WiWindDeg />}
				type={"WIND DIRECTION"}
				data={`${weatherData?.current?.wind_degree}°`}
			/>
			<Misc
				icon={<WiDaySunny />}
				type={"UX INDEX"}
				data={weatherData?.current?.uv}
			/>
			<Misc
				icon={<WiSunrise />}
				type={"SUNRISE"}
				data={weatherData?.forecast?.forecastday[0]?.astro?.sunrise}
			/>
			<Misc
				icon={<WiSunset />}
				type={"SUNSET"}
				data={weatherData?.forecast?.forecastday[0]?.astro?.sunset}
			/>
			<Misc
				icon={<WiThermometer />}
				type={"FEEL'S LIKE"}
				data={
					unit === "C"
						? `${weatherData?.current?.feelslike_c}°C`
						: `${weatherData?.current?.feelslike_f}°F`
				}
			/>
			<Misc
				icon={<WiHumidity />}
				type={"HUMIDITY"}
				data={`${weatherData?.current?.humidity}%`}
			/>
			<Misc
				icon={<WiRaindrop />}
				type={"PRECIPITAION"}
				data={
					unit === "C"
						? `${weatherData?.current?.precip_mm} mm`
						: `${weatherData?.current?.precip_in} in`
				}
			/>

			<Misc
				icon={<WiBarometer />}
				type={"PRESSURE"}
				data={
					unit === "C"
						? `${weatherData?.current?.pressure_mb} hPa`
						: `${weatherData?.current?.pressure_in} in`
				}
			/>
			<Misc
				icon={<AiOutlineEye />}
				type={"VIEW DISTANCE"}
				data={
					unit === "C"
						? `${weatherData?.current?.vis_km} KM`
						: `${weatherData?.current?.vis_miles} MILES`
				}
			/>
		</div>
	);
};

export default WeatherInfo;
