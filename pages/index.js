import Nav from "./comps/Nav";
import Food from "./comps/Food";
import ScreenInfo from "./comps/ScreenInfo";

import { useRecoilValue } from "recoil";
import { menuAtom } from "./atoms/menuAtom";
import SpecialItems from "./comps/SpecialItems";

export default function Home() {
  const menuActive = useRecoilValue(menuAtom);
  return (
    <div className="max-h-screen flex flex-col md:flex-row bg-red-100">
      <Nav />
      <div className="w-full min-h-0 flex flex-col">
        <ScreenInfo />
        {menuActive === "Food Recipes" && <Food />}
        {menuActive === "Special Items" && <SpecialItems />}
      </div>
    </div>
  );
}
