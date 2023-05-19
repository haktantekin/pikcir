import Link from "next/link";


export default function TagModal() {
  return (
    <>
      <ul>
        <li className="flex justify-between border-b items-center min-h-[50px]">
          <Link href={'javascript:;'} className="text-sm">#mizah</Link>
          <div className="ml-auto">
            <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
          </div>
        </li>
        <li className="flex justify-between border-b items-center min-h-[50px]">
          <Link href={'javascript:;'} className="text-sm">#komedi</Link>
          <div className="ml-auto">
            <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
          </div>
        </li>
        <li className="flex justify-between border-b items-center min-h-[50px]">
          <Link href={'javascript:;'} className="text-sm">#yetişkin</Link>
          <div className="ml-auto">
          <button className="bg-003049 p-2 rounded font-bold text-white text-xs">Takiptesin</button>
          </div>
        </li>
        <li className="flex justify-between border-b items-center min-h-[50px]">
          <Link href={'javascript:;'} className="text-sm">#karikatür</Link>
          <div className="ml-auto">
            <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
          </div>
        </li>
        <li className="flex justify-between items-center min-h-[50px]">
          <Link href={'javascript:;'} className="text-sm">#sanat</Link>
          <div className="ml-auto">
            <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
          </div>
        </li>
      </ul>
    </>
  )
}
