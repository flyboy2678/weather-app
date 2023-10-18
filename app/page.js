import HourlyFocust from "@/components/hourlyFocast";

export default function Home() {
	const hours = [];
	for (let i = 0; i < 10; i++) {
		hours.push({ id: i, hour: "16:00", temp: "23" });
	}
	const comp = hours.map((h) => {
		return <HourlyFocust key={h.id} hour={h.hour} temp={h.temp} />;
	});
	return <div className="flex flex-row items-center py-10 gap-1">{comp}</div>;
}
