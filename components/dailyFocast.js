import Image from "next/image";

function DailyFocust({ day, high, low, rain }) {
	return (
		<div className="flex flex-col bg-slate-300 p-5 text-sm rounded-2xl h-32 w-28 items-center">
			<p>{day ? day : "..."}</p>
			<Image
				src="/static/cloudy-day-3.svg"
				width={40}
				height={40}
				alt="weather Icon"
			/>
			{/* {rain && <p>{rain}</p>} */}
			<p className="flex flex-row text-xs">
				<span>{high ? high : "..."}° </span>
				<span className="text-white">{low ? low : "..."}°</span>
			</p>
		</div>
	);
}

export default DailyFocust;
