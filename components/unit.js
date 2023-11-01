"use client";

import { UnitContext } from "@/app/layout";
import { useContext } from "react";

function Unit() {
	const [unit, setUnit] = useContext(UnitContext);
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
