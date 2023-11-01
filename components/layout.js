import LeftDesktop from "./leftDesktop";
import Top from "./top";

function Layout({ children }) {
	return (
		<main className="flex min-h-screen flex-row items-center">
			<LeftDesktop />
			<div className="max-h-screen min-h-screen w-3/4 p-14 flex flex-col">
				<Top />
				{children}
				<div>
					<h1 className="font-semibold">Today&apos;s highlights</h1>
				</div>
			</div>
		</main>
	);
}

export default Layout;
