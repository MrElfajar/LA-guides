import { SearchIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { searchAtom } from "../atoms/searchAtom";

export default function SearchBar() {
  const [search, setSearch] = useRecoilState(searchAtom);

  return (
    <div className="flex relative">
      <div className="w-10 text-gray-300">
        <SearchIcon />
      </div>
      <input
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        value={search}
        className="p-2 rounded-sm border focus:outline-none"
        type="text"
        placeholder="Search..."
      />
      <div
        onClick={() => setSearch("")}
        className="w-4 text-gray-700 absolute top-1/2 right-2 transform-all   -translate-y-1/2"
      >
        <XCircleIcon />
      </div>
    </div>
  );
}
