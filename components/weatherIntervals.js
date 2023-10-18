"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function WeatherIntervals() {
	const pathname = usePathname();
	const inactiveLink = "font-semibold text-slate-400 ";
	const activeLink =
		inactiveLink + "border-b-2 border-slate-400 text-slate-900";
	return (
		<div className="flex flex-row gap-2">
			<Link href="/">
				<button
					className={pathname === "/" ? activeLink : inactiveLink}
				>
					Today
				</button>
			</Link>
			<Link href="week">
				<button
					className={
						pathname.match("week") ? activeLink : inactiveLink
					}
				>
					Week
				</button>
			</Link>
		</div>
	);
}

export default WeatherIntervals;
