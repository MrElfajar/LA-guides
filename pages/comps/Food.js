import { CogIcon } from "@heroicons/react/outline";

import { useState, useEffect, useRef } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import SearchBar from "./SearchBar";
import Item from "./Item";
import { foodAtom, foodLoadingAtom } from "../atoms/foodAtom";
import { searchAtom } from "../atoms/searchAtom";

export default function Food() {
  const [gridCount, setGridCount] = useState(4);
  const [showSetting, setShowSetting] = useState(false);
  const [viewImages, setViewImages] = useState(true);
  const [viewNames, setViewNames] = useState(true);
  const [viewInfos, setViewInfos] = useState(false);
  const [viewInfo, setViewInfo] = useState(null);
  const [search] = useRecoilValue(searchAtom);
  const [foods, setFoods] = useRecoilState(foodAtom);
  const [loading, setLoading] = useRecoilState(foodLoadingAtom);
  const [elLoading, setElLoading] = useState({ index: null, loaded: false });

  const handleSetView = (set, data) => {
    if (!data) {
      let views = [viewNames, viewInfos, viewImages].filter((v) => v === true);
      if (views.length > 1) {
        set(data);
      }
      return;
    } else {
      set(data);
    }
  };

  useEffect(() => {
    fetch(`/api/foods?key=${process.env.NEXT_PUBLIC_API_KEY}`)
      .then((res) => res.json())
      .then((data) => (setFoods([...data]), setLoading(false)));
  }, []);

  return (
    <div className="bg-white min-h-0 flex-grow flex flex-col w-full">
      <div className="flex p-2 justify-center bg-gray-100 inline-block">
        <SearchBar />
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
                checked={viewImages}
                onChange={(e) => handleSetView(setViewImages, e.target.checked)}
              />
            </label>
            <label className="flex gap-2">
              Show Name
              <input
                type="checkbox"
                checked={viewNames}
                onChange={(e) => handleSetView(setViewNames, e.target.checked)}
              />
            </label>
            <label className="flex gap-4">
              Show Info
              <input
                type="checkbox"
                checked={viewInfos}
                onChange={(e) => (
                  handleSetView(setViewInfos, e.target.checked),
                  setViewInfo(null)
                )}
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
        className={`min-h-0 flex-grow overflow-scroll grid content-start ${
          viewInfos && "md:grid-cols-2"
        } bg-white ${
          !viewInfos && viewImages && "grid-cols-4 md:grid-cols-5 foodder"
        } p-2 gap-2 md:w-full pb-6`}
      >
        {loading && <div>Loading...</div>}
        {foods.map((food, index) => (
          <Item
            key={index}
            index={index}
            name={food.name}
            ingredients={food.ingredient}
            effects={food.effects}
            search={search}
            viewInfos={viewInfos}
            viewInfo={viewInfo}
            setViewInfo={setViewInfo}
            viewImages={viewImages}
          />
        ))}
        <div data-name="" className="h-80"></div>
      </div>
    </div>
  );
}
