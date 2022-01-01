import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { menuAtom, menuListAtom } from "../atoms/menuAtom";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const menuList = useRecoilValue(menuListAtom);
  const [menuActive, setMenuActive] = useRecoilState(menuAtom);

  return (
    <div className="relative flex items-center justify-end bg-gradient-to-t md:bg-gradient-to-l from-gray-900 to-gray-800 h-14 md:items-start md:h-screen md:w-60 md:pt-2 md:flex-col">
      <div className="ml-2 mr-auto text-xl text-transparent nav-title bg-gradient-to-r from-yellow-400 to-yellow-100 bg-clip-text">
        LA Guides
      </div>
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
        <div className="flex flex-col  gap-2">
          {menuList.map((menu, index) => (
            <div
              key={index}
              onClick={() => (setMenuActive(menu.name), setMenu(!menu))}
              className={`${
                menuActive === menu.name && "bg-white"
              } py-2 flex justify-center text-lg font-bold items-center shadow-md rounded-md`}
            >
              {menu.name}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-2 hidden w-full h-screen md:inline-block flex-cols gap-2">
        {menuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => setMenuActive(menu.name)}
            className={`${
              menuActive === menu.name ? "bg-gray-100 text-black" : "text-white"
            } py-2 text-center shadow-md hover:bg-gray-200 hover:text-black cursor-pointer z-10 relative`}
          >
            <span
              className={`ribbon absolute ${
                menuActive === menu.name
                  ? "w-5 h-5 top-full before:rounded-tr-xl right-0 bg-gray-100 before:absolute before:w-5 before:h-5 before:bg-gray-900 before:top-0 before:left-0"
                  : "hidden"
              }`}
            ></span>
            <span
              className={`ribbon absolute ${
                menuActive === menu.name
                  ? "w-5 h-5 bottom-full before:rounded-br-xl right-0 bg-gray-100 before:absolute before:w-5 before:h-5 before:bg-gray-900 before:top-0 before:left-0"
                  : "hidden"
              }`}
            ></span>
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
}
