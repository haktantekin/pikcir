import Link from "next/link";
import { Spoiler } from '@mantine/core';
import Image from "next/image";
import { IconSend } from "@tabler/icons-react";


export default function PostCollapse() {
  return (
    <>
      <div className="w-full border-t mt-4 pt-2">
        <Spoiler maxHeight={200} showLabel="Tümünü Gör" hideLabel="Gizle" className="show-all">
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                Ahahahah yarıldım lan bu kadar komik olma
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Haktan</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@haktan</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                çok güldüm diktiler
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">DeliDumrul</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@deli</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                aldım koleksiyona
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                Ahahahah yarıldım lan bu kadar komik olma
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Haktan</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@haktan</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                çok güldüm diktiler
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col justify-center">
              <div className="flex gap-2 justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">DeliDumrul</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@deli</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">- 1h -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold">takibe al -</Link>
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">rapor et</Link>
              </div>
              <div className="text-sm">
                aldım koleksiyona
              </div>
            </div>
          </div>
        </Spoiler>
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-11">
            <input type="text" placeholder="goygoy yap" className="w-full border-b text-xs" />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <button>
              <IconSend />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}