import "./globals.css";
import { Inter } from "next/font/google";
import Top from "@/components/top";
import LeftDesktop from "@/components/leftDesktop";
import WeatherInfo from "@/components/weatherInfo";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Weather App",
// 	description: "A weather app created by Hope Tsunke",
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="flex min-h-screen flex-row items-center">
					<LeftDesktop />
					<div className="max-h-screen min-h-screen w-3/4 p-14 flex flex-col">
						<Top />
						{children}
						<h1 className="font-semibold">
							Today&apos;s highlights
						</h1>
						<WeatherInfo />
					</div>
				</main>
			</body>
		</html>
	);
}
