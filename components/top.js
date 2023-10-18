import Unit from "./unit";
import User from "./user";
import WeatherIntervals from "./weatherIntervals";

function Top() {
	return (
		<div className="flex flex-row justify-between w-full">
			<WeatherIntervals />
			<div className="flex flex-row gap-3">
				<Unit />
				<User />
			</div>
		</div>
	);
}

export default Top;
