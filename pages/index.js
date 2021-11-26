import Nav from "./comps/Nav";
import Food from "./comps/Food";
import ScreenInfo from "./comps/ScreenInfo";

export default function Home() {
	return (
		<div className="max-h-screen flex flex-col md:flex-row bg-red-100">
			<Nav />
			<div className="w-full min-h-0 flex flex-col">
				<ScreenInfo />
				<Food />
			</div>
		</div>
	);
}
