import City from "./city";

const SearchResults = ({ cities, setCities }) => {
	return (
		<div className="fixed w-60 h-fit z-50 max-h-52 overflow-scroll bar flex flex-col top-28 bg-white p-2 items-start">
			{cities?.map((c) => {
				return <City key={c.id} c={c} setCities={setCities} />;
			})}
		</div>
	);
};

export default SearchResults;
