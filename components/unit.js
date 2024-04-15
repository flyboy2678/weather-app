"use client";
import { useWeatherDataStore } from "@/store/weather_data_store";

function Unit() {
	const { unit, setUnit } = useWeatherDataStore();
	const inactive = "rounded-full p-2";
	const active = inactive + " bg-black text-white";
	return (
		<div className="flex flex-row ">
			<button
				className={unit === "C" ? active : inactive}
				onClick={() => {
					setUnit("C");
				}}
			>
				°C
			</button>
			<button
				className={unit === "F" ? active : inactive}
				onClick={() => {
					setUnit("F");
				}}
			>
				°F
			</button>
		</div>
	);
}

export default Unit;
