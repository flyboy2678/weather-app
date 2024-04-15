import { useInputStore } from "@/store/input_store";
import { useWeatherDataStore } from "@/store/weather_data_store";

const City = ({ c, setCities }) => {
	const { setCity } = useWeatherDataStore();
	const { clearStore } = useInputStore();

	const handleClick = () => {
		setCity(c.name);
		clearStore();
		setCities([]);
	};
	return (
		<button onClick={handleClick}>
			{c.name}, {c.country}
		</button>
	);
};

export default City;
