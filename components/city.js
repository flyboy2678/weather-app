import { useContext } from "react";
import { CityContext } from "@/app/layout";
import { InputContext } from "./leftDesktop";

const City = ({ c, setCities }) => {
	const [city, setCity] = useContext(CityContext);
	const setInput = useContext(InputContext);
	const handleClick = () => {
		setCity(c.name);
		setInput("");
		setCities([]);
	};
	return (
		<button onClick={handleClick}>
			{c.name}, {c.country}
		</button>
	);
};

export default City;
