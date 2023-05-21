import { IconCameraSearch } from "@tabler/icons-react";

export default function Search() {
  return (
    <>
      <input type="text" className="w-full rounded-3xl h-10 bg-white border border-e15146 px-4 pl-10 text-e15146 font-bold text-sm" ></input>
      <button className="absolute left-2 z-10">
        <IconCameraSearch size="1.7rem" stroke={1.0} className="text-f07167" />
      </button>
    </>
  )
}