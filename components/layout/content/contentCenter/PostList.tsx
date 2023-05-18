import { IconAdFilled, IconAlarm, IconAlertSquareFilled, IconBrandHipchat, IconBrandMailgun, IconHash, IconMessageDots, IconMoodWink, IconPackage, IconShare3 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { UnstyledButton, Tooltip } from '@mantine/core';

interface PostListProps {
  userName: string,
  userLink: string,
  postLink: string,
  time: string | number,
  image: string,
  commentCount: number
  pikCount:number
}

export default function PostList({ userName, userLink, postLink, time, image, commentCount, pikCount }: PostListProps) {
  return (
    <>
      <div className="bg-white border border-e15146 p-4 rounded mb-4">
        <div className="flex flex-row justify-between border-b pb-2 px-1">
          <Link href={userLink} className="flex flex-row items-center gap-2">
            <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
            <span className="text-xs font-bold flex items-center text-f07167"><IconBrandMailgun size={20} /> {userName}
              <Tooltip label="Yönetici">
                <IconAdFilled size={15} className="ml-1 text-202124" />
              </Tooltip>
            </span>
          </Link>
          <Link href={postLink} className="text-343a40 font-light flex items-center text-sm gap-1">&nbsp; <IconAlarm size={10} /> {time}</Link>
        </div>
        <div className="overflow-hidden max-h-[700px]">
          <Link href={postLink} className="rounded overflow-hidden mt-4 block">
            <Image alt="profile" width={740} height={200} className="w-full m-auto max-h-[1000px]" src={image} />
          </Link>
        </div>
        <div className="flex gap-4 px-3 p-2 border-b ">
          <UnstyledButton className="text-sm bg-f07167 text-white p-2 rounded font-bold">{pikCount} Pik&apos;lenme</UnstyledButton>
          <Link href={postLink} className="flex gap-1 items-center text-sm text-f07167 border border-f07167 p-2 rounded"><IconBrandHipchat size={18} />{commentCount} Laklak</Link>
          <Link href={postLink} className="flex gap-1 items-center text-sm text-f07167 border border-f07167 p-2 rounded"><IconHash size={15} />etiketler</Link>
        </div>
        <div className="flex gap-2 p-3 justify-around pb-0">
          <Tooltip label="Geri Al">
            <Link href="javascript:;" className="flex items-center gap-1 text-sm text-f07167"><IconMoodWink />
              Pikledin
            </Link>
          </Tooltip>
          {/* <Link href="javascript:;" className="flex items-center gap-1 text-sm"><IconMoodWink />Pikle!</Link> */}
          <Link href={postLink} className="flex items-center gap-1 text-sm"><IconMessageDots />Laklak Yap</Link>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm"><IconPackage />Koleksiyona Ekle</Link>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm"><IconShare3 />Paylaş</Link>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm text-ffbeb9"><IconAlertSquareFilled />Bildir</Link>
        </div>
      </div>
    </>
  )
}
