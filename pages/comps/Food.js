import { SearchIcon, CogIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";

import { useState, useLayoutEffect, useEffect, useRef } from "react";

import Image from "next/image";

export default function Food() {
	const [gridCount, setGridCount] = useState(4);
	const [showSetting, setShowSetting] = useState(false);
	const [viewImage, setViewImage] = useState(true);
	const [viewName, setViewName] = useState(true);
	const [viewInfo, setViewInfo] = useState(false);
	const foodsRef = useRef(null);
	const [search, setSearch] = useState("");
	const [foods, setFoods] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("/api/foods")
			.then((res) => res.json())
			.then((data) => (setFoods([...data]), setLoading(false)));
	}, []);

	useLayoutEffect(() => {
		//Object.entries(foodsRef.current.children).forEach((el, index) => console.log(el[1].getAttribute("data -name")))// el.textContent() === "Hney"&& console.log(el))
		Object.entries(foodsRef.current.children).forEach(
			(el, index) =>
				search &&
				el[1]
					.getAttribute("data-name")
					.toLowerCase()
					.includes(search.toLowerCase()) &&
				(el[1].classList.add("opacity-60"), el[1].scrollIntoView())
		);
		//console.log(foodsRef.current.children[0].dataset["name"]);
	}, [search]);

	const camelCase = (str) => {
		return str
			.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
				return index == 0 ? word.toLowerCase() : word.toUpperCase();
			})
			.replace(/\s+/g, "");
	};

	return (
		<div className="bg-white min-h-0 flex-grow flex flex-col w-full">
			<div className="flex p-2 justify-center bg-gray-100 inline-block">
				<div className="flex relative">
					<div className="w-10 text-gray-300">
						<SearchIcon />
					</div>
					<input
						onChange={(e) => setSearch(e.target.value)}
						value={search}
						className="p-2 rounded-sm border focus:outline-none"
						type="text"
						placeholder="Search..."
					/>
					<div
						onClick={() => setSearch("")}
						className="w-4 text-gray-700 absolute top-1/2 right-2 transform-all -translate-y-1/2"
					>
						<XCircleIcon />
					</div>
				</div>
				<div
					onClick={() => setShowSetting(!showSetting)}
					className="relative w-6 ml-auto self-center hover:bg-gray-300"
				>
					<CogIcon />
					<div
						className={`${
							!showSetting && "hidden"
						} absolute z-10 rounded-md shadow-2xl font-bold top-0 right-8 p-2 whitespace-nowrap bg-yellow-400`}
					>
						<label className="flex gap-2">
							Show Image
							<input
								type="checkbox"
								checked={viewImage}
								onChange={(e) => setViewImage(e.target.checked)}
							/>
						</label>
						<label className="flex gap-2">
							Show Name
							<input
								type="checkbox"
								checked={viewName}
								onChange={(e) => setViewName(e.target.checked)}
							/>
						</label>
						<label className="flex gap-4">
							Show Info
							<input
								type="checkbox"
								checked={viewInfo}
								onChange={(e) => setViewInfo(e.target.checked)}
							/>
						</label>
						<form
							onSubmit={(e) => (
								e.preventDefault(), setGridCount(parseInt(e.target[0].value))
							)}
						>
							Grid Counts
							<input className="w-10" type="number" />
							<button className="bg-gray-200 rounded-sm px-1" type="submit">
								ok
							</button>
						</form>
					</div>
				</div>
			</div>
			<div
				ref={foodsRef}
				className={`min-h-0 flex-grow overflow-scroll grid content-start ${
					!viewInfo && "grid-cols-4 md:grid-cols-5 foodder"
				} p-2 gap-2 bg-yellow-300 md:w-full pb-6`}
			>
				{foods.map((food) => (
					<div
						data-name={food.name}
						className={`${viewInfo && "flex"} bg-yellow-400 shadow-sm relative`}
					>
						<div
							className={`${!viewImage && "hidden"} ${
								viewInfo && "w-40"
							} bg-gray-300`}
						>
							<Image
								src={"/img/" + camelCase(food.name) + ".jpg"}
								alt={food.name}
								width="30"
								height="30"
								layout="responsive"
							/>
						</div>
						<div
							className={`${!viewName && "hidden"} ${
								!viewInfo && "absolute bottom-0"
							} whitespace-nowrap break-normal overflow-y-auto self-stretch text-black text-center w-full font-bold`}
						>
							<div className="bg-black text-white bg-opacity-40 w-full">
								{food.name}
							</div>
						</div>
					</div>
				))}
				<div data-name="" className="h-80"></div>
			</div>
		</div>
	);
}
