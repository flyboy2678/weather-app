import Image from "next/image";

function HourlyFocust({ hour, rain, temp, icon }) {
	return (
		<div className="flex flex-col bg-slate-300 p-5 text-sm rounded-2xl h-32 w-20 items-center">
			<p>{hour}</p>
			<Image src={icon} width={40} height={40} alt="weather Icon" />
			{/* {rain && <p>{rain}</p>} */}
			<p>{temp}°</p>
		</div>
	);
}

export default HourlyFocust;
