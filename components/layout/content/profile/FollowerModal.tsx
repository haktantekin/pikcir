import { IconBrandMailgun } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from '@mantine/core';


export default function FollowerModal() {
  return (
    <>
      <ScrollArea h={250}>
        <ul>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"can"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"kamil"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-003049 p-2 rounded font-bold text-white text-xs">Takiptesin</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-343a40 gap-[2px]"><IconBrandMailgun size={20} /> {"natkah"}</span>
            </Link>
            <div className="ml-auto">
              <button className="bg-BF4565 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </li>
        </ul>
      </ScrollArea>
    </>
  )
}
