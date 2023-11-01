import React from "react";

const Misc = ({ type, icon, data, secondData }) => {
	return (
		<div className="flex flex-col bg-slate-400 h-52 w-44 rounded-3xl p-3">
			<div className="flex flex-row gap-1">
				{icon}
				<div className="text-xs">{type}</div>
			</div>
			<p className="text-3xl mt-5">{data}</p>
		</div>
	);
};

export default Misc;
