import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
const menuList = [
	{
		name: "Food Recipes"
	},
];

export default function Nav() {
	const [menu, setMenu] = useState(false);

	return (
		<div className="relative flex items-center justify-end bg-gradient-to-t md:bg-gradient-to-l from-gray-900 to-gray-800 h-14 md:items-start md:h-screen md:w-24">
			<div className="ml-2 mr-auto text-xl text-transparent nav-title bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text">LA Guides</div>
			<div
				className={`md:hidden ${
					menu && "bg-gray-500"
				} mr-1 grid place-items-center rounded-md w-12 h-12 text-white`}
				onClick={() => setMenu(!menu)}
			>
				<MenuIcon />
			</div>
			<div
				className={`${
					!menu && "hidden"
				} absolute z-10 border-t-2 border-gray-500 top-12 bg-gradient-to-b from-gray-600 to-gray-500 p-2 w-full`}
			>
				<div className="my-2 text-2xl font-bold text-center text-white">
					MENU
				</div>
				<div className="grid grid-flow grid-cols-3 gap-2 ">
					{menuList.map((menu, index) => (
						<div
							key={index}
							className="p-3 text-center bg-white shadow-md rounded-md"
						>
							{menu.name}
						</div>
					))}
				</div>
			</div>
			<div className="flex hidden w-full h-screen md:inline-block flex-cols gap-2">
				<div className="py-2 mb-2 text-center text-white">Home</div>
				{menuList.map((menu, index) => (
					<div
						key={index}
						className="py-2 mb-2 text-center text-white shadow-md hover:bg-gray-600"
					>
						{menu.name}
					</div>
				))}
			</div>
		</div>
	);
}
