import { IconBrandMailgun } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from '@mantine/core';


export default function CollapseCollectionList() {
  return (
    <>
      <ScrollArea h={150}>
        <ul>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              Atatürk Kolleksiyonu
            </Link>
            <div className="ml-auto">
              <button className="bg-e15146 p-2 rounded font-bold !text-white text-xs">Ekle</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              Goygoy
            </Link>
            <div className="ml-auto">
              <button className="bg-e15146 p-2 rounded font-bold !text-white text-xs">Ekle</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              Whatsapp&apos;tan Atmalık
            </Link>
            <div className="ml-auto">
            <button className="bg-003049 p-2 rounded font-bold text-white text-xs">Ekledin</button>
            </div>
          </li>
          <li className="flex justify-between border-b items-center min-h-[50px]">
            <Link href={"javascript:;"} className="flex flex-row items-center gap-2">
              Aşk
            </Link>
            <div className="ml-auto">
            <button className="bg-003049 p-2 rounded font-bold text-white text-xs">Ekledin</button>
            </div>
          </li>
        </ul>
      </ScrollArea>
    </>
  )
}
