import { IconAdFilled, IconAlarm, IconAlertSquareFilled, IconBrandHipchat, IconBrandMailgun, IconMessageDots, IconPackage, IconPhotoFilled, IconPhoto, IconShare3, IconTags } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { UnstyledButton, Tooltip, Modal, Collapse } from '@mantine/core';
import TagModal from "./TagModal";
import { useState } from 'react';
import PikModal from "./PikModal";
import { useDisclosure } from '@mantine/hooks';
import PostCollapse from "./PostCollapse";


interface PostListProps {
  userName: string,
  userLink: string,
  postLink: string,
  time: string | number,
  image: string,
  commentCount: number
  pikCount: number
  admin: boolean
  postTitle?: string
}

export default function PostList({ userName, userLink, postLink, time, image, commentCount, pikCount, admin, postTitle }: PostListProps) {
  const [tagOpened, setTagOpened] = useState(false);
  const [pikOpened, setPikOpened] = useState(false);
  const [pik, setPik] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <div className="bg-white p-4 rounded mb-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
        <div className="flex flex-row justify-between border-b pb-2 px-1">
          <div className="flex flex-row items-center gap-2">
            <Link href={userLink} className="flex flex-row items-center gap-2">
              <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              <span className="text-xs font-bold flex items-center text-f07167">
                <IconBrandMailgun size={20} />
                {userName}
              </span>
            </Link>
            {admin &&
              <Tooltip label="Yönetici">
                <IconAdFilled size={15} className="-ml-1 text-202124" />
              </Tooltip>
            }
            <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs">takibe al</Link>
          </div>
          <Link href={postLink} className="text-343a40 font-light flex items-center text-sm gap-1">&nbsp; <IconAlarm size={10} /> {time}</Link>
        </div>
        <div className="overflow-hidden max-h-[700px] relative">
          <Link href={postLink} className="rounded overflow-hidden mt-4 block">
            <Image alt="profile" width={740} height={200} className="w-full m-auto max-h-[1000px]" src={image} />
          </Link>
          <UnstyledButton onClick={() => setTagOpened(true)} className="flex gap-1 items-center text-sm bg-f07167 text-white p-2 rounded absolute right-2 bottom-2">
            <IconTags size={20} />
          </UnstyledButton>
          <Modal opened={tagOpened} onClose={() => setTagOpened(false)} centered title="Etiket(ler)">
            <TagModal />
          </Modal>
        </div>

        <div className="flex justify-between gap-4 p-2 border-b items-center">
          <div className="flex flex-col items-center">
            {postTitle && <div className="text-sm text-343a40 lowercase">{postTitle}</div>}
          </div>
          <div className="flex gap-2">
            <UnstyledButton className="text-sm bg-f07167 text-white p-2 rounded font-bold flex gap-1 items-center" onClick={() => setPikOpened(true)}><IconPhoto /> {pikCount} Pik&apos;lenme</UnstyledButton>
            <Modal opened={pikOpened} onClose={() => setPikOpened(false)} centered title="Pikleyen(ler)">
              <PikModal />
            </Modal>
            <UnstyledButton className="flex gap-1 items-center text-sm text-f07167 border border-solid !border-f07167 p-2 rounded" onClick={toggle}>
              <IconBrandHipchat size={18} />{commentCount} Laklak
            </UnstyledButton>
          </div>
        </div>
        <div className="flex gap-2 p-3 justify-around pb-0">

          {pik === false && <button className="flex items-center gap-1 text-sm" onClick={() => setPik(true)}><IconPhoto />Pikle!</button>}
          {pik === true &&
            <button className="flex items-center gap-1 text-sm text-f07167" onClick={() => setPik(false)}>
              <IconPhotoFilled />
              Pikledin
            </button>
          }
          <UnstyledButton className="flex items-center gap-1 text-sm" onClick={toggle}><IconMessageDots />Laklak Yap</UnstyledButton>
          <UnstyledButton onClick={toggle} className="flex items-center gap-1 text-sm"><IconPackage />Koleksiyona Ekle</UnstyledButton>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm"><IconShare3 />Paylaş</Link>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm text-ffbeb9"><IconAlertSquareFilled />Bildir</Link>
        </div>
        <Collapse in={opened} className="w-full">
          <PostCollapse />
        </Collapse>
      </div>
    </>
  )
}
