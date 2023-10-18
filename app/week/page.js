import DailyFocust from "@/components/dailyFocast";

function Weekly() {
	const days = [];
	for (let i = 0; i < 8; i++) {
		days.push({ id: i, day: "Sun", high: "23", low: "17" });
	}
	const comp = days.map((d) => {
		return <DailyFocust key={d.id} day={d.day} high={d.high} low={d.low} />;
	});
	return <div className="flex flex-row items-center py-10 gap-1">{comp}</div>;
}

export default Weekly;
