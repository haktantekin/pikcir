import { IconMoodSearch } from "@tabler/icons-react";

export default function Search() {
  return (
    <>
      <input type="text" className="w-full rounded-3xl h-10 bg-white border border-BF4565 px-4 pl-10 text-BF4565 font-bold text-sm" ></input>
      <button className="absolute left-2 z-10">
        <IconMoodSearch size="1.7rem" stroke={1.5} className="text-BF4565" />
      </button>
    </>
  )
}