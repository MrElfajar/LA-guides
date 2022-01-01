import { useRecoilValue } from "recoil";

import { menuAtom } from "../atoms/menuAtom";

export default function ScreenInfo() {
  const menuActive = useRecoilValue(menuAtom);
  return <div className="p-2 font-bold bg-green-400">{menuActive}</div>;
}
