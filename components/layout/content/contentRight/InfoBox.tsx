import Image from "next/image";
import Link from "next/link";
import { Tabs, Spoiler } from '@mantine/core';

export default function InfoBox() {
  return (
    <>
      <div className="bg-white rounded w-full h-auto block col-span-2 border border-f07167 p-3 mt-3">
        <Tabs defaultValue="pik" className="tab-active">
          <Tabs.List className="w-full justify-around border-b-0">
            <Tabs.Tab className="px-0" value="pik">En Fazla Pik&apos;lenenler</Tabs.Tab>
            <Tabs.Tab className="px-0" value="create">En Üretkenler</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="pik" pt="xs">
            <Spoiler maxHeight={150} showLabel="Tümünü Gör" hideLabel="Gizle" className="show-all">
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Mustafa</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@mustafa</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Kemal</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@kemal</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    24 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Atatürk</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@ataturk</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    20 Pik
                  </Link>
                </div>
              </div>
            </Spoiler>
          </Tabs.Panel>

          <Tabs.Panel value="create" pt="xs">
            <Spoiler maxHeight={150} showLabel="Tümünü Gör" hideLabel="Gizle" className="show-all">
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Yüksel</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">haktan</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
              <div className="flex py-2 justify-center items-center">
                <div>
                  <Link href="javascript:void(0);">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Link>
                </div>
                <div className="ml-3">
                  <Link href="javascript:void(0);" className="font-bold text-sm">Can.</Link>
                  <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
                </div>
                <div className="ml-auto text-xs text-e15146">
                  <Link href="javascript:void(0);" className="font-bold text-sm">
                    32 Paylaşım
                  </Link>
                </div>
              </div>
            </Spoiler>
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}
