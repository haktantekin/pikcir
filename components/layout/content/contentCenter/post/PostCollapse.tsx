import Link from "next/link";
import { Spoiler } from '@mantine/core';
import Image from "next/image";
import { IconAlertSquareFilled, IconMessageForward, IconUserPlus } from "@tabler/icons-react";


export default function PostCollapse() {
  return (
    <>
      <div className="w-full pb-4 pt-2 block -mb-4">
      <div className="grid grid-cols-12 w-full pb-2 relative">
          <div className="col-span-12">
            <textarea placeholder="goygoy yap" className="w-full border text-xs p-3 outline-BF4565" />
          </div>
          <div className="flex justify-center items-center absolute right-2 top-3">
            <button>
              <IconMessageForward size={18} />
            </button>
          </div>
        </div>
        <Spoiler maxHeight={200} showLabel="Tümünü Gör" hideLabel="Gizle" className="show-all">
          <div className="flex lg:py-2 lg:pt-0 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
          <div className="flex py-1 lg:py-2 items-center border-b">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
             <div className="ml-3 flex flex-col w-full">
              <div className="flex gap-2 justify-between lg:justify-start items-center">
                <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">@mustafa</Link>
                <Link href="javascript:void(0);" className="font-normal text-xs block text-343a40">1h</Link>
                <div className="ml-auto flex gap-2">
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs font-bold"><IconUserPlus size={18} /></Link>
                  <Link href={"javascript:;"} className="flex flex-row ml-0 text-ffbeb9 text-xs">     <IconAlertSquareFilled size={18} /></Link>
                </div>
              </div>
              <div className="text-sm">
                çok güldüm, diktiler
              </div>
            </div>
          </div>
        </Spoiler>
      </div>
    </>
  )
}
