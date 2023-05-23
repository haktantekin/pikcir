import { IconAdFilled, IconAlarm, IconAlertSquareFilled, IconBrandHipchat, IconBrandMailgun, IconMessageDots, IconPackage, IconPhotoFilled, IconPhoto, IconShare3, IconTags } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { UnstyledButton, Tooltip, Modal, Collapse, Drawer } from '@mantine/core';
import TagModal from "./TagModal";
import { useState } from 'react';
import PikModal from "./PikModal";
import { useDisclosure } from '@mantine/hooks';
import PostCollapse from "./PostCollapse";
import CollapseCollectionList from "./CollapseCollectionList";
import PostShare from "./PostShare";
import ReportModal from "./ReportModal";


interface PostListProps {
  userName: string,
  userLink: string,
  profileImage: string,
  postLink: string,
  time: string | number,
  image: string,
  commentCount: number
  pikCount: number
  admin: boolean
  postTitle?: string
  profile: boolean
  collectionItem: boolean
}

export default function PostList({ userName, userLink, postLink, time, image, commentCount, pikCount, admin, postTitle, profileImage, profile, collectionItem }: PostListProps) {
  const [tagOpened, setTagOpened] = useState(false);
  const [pikOpened, setPikOpened] = useState(false);
  const [reportOpened, setReportOpened] = useState(false);
  const [pik, setPik] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  const [openDraw, { open, close }] = useDisclosure(false);
  return (
    <>
      <div className={`bg-white p-4 rounded ${!collectionItem ? 'mb-4' : ''} `} style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
        {!collectionItem &&
          <div className="flex flex-row justify-between border-b pb-2 px-1">
            <div className="flex flex-row items-center gap-2">
              <Link href={userLink} className="flex flex-row items-center gap-2">
                <Image alt="profile" src={profileImage} width={400} height={400} className="w-9 rounded-full" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} />
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
              {!profile &&
                <Link href={"javascript:;"} className="flex flex-row ml-0 text-343a40 text-xs">takibe al</Link>
              }
            </div>
            <Link href={postLink} className="text-343a40 font-light flex items-center text-sm gap-1">&nbsp; <IconAlarm size={10} /> {time}</Link>
          </div>
        }
        {!collectionItem &&
          <div className="flex flex-col items-start py-2 mb-1">
            {postTitle && <div className="text-sm italic text-343a40 lowercase">{postTitle}</div>}
          </div>
        }
        <div className="overflow-hidden max-h-[500px] relative">
          <Link href={postLink} className="rounded overflow-hidden block">
            <Image alt="profile" width={740} height={200} className="w-full m-auto max-h-[1000px] " src={image} />
          </Link>
          {collectionItem &&
            <div className="flex flex-col items-start py-2 pb-0">
              {postTitle && <div className="text-sm italic text-343a40 lowercase">{postTitle}</div>}
            </div>
          }
          <UnstyledButton onClick={() => setTagOpened(true)} className="flex gap-1 items-center justify-center text-sm bg-f07167 text-white p-2 lg:min-w-[38px] lg:min-h-[38px] rounded absolute right-2 bottom-2">
            <IconTags size={18} />
          </UnstyledButton>
          <Modal opened={tagOpened} onClose={() => setTagOpened(false)} centered title="Etiket(ler)">
            <TagModal />
          </Modal>
          <div className="flex justify-between gap-2 lg:gap-4  items-center flex-col lg:flex-row absolute bottom-2 left-2">
            <div className="flex gap-2">
              <UnstyledButton className="text-sm bg-f07167 text-white p-1 lg:p-2 rounded font-bold flex gap-1 items-center" onClick={() => setPikOpened(true)}>
                <IconPhoto size={18} /> {pikCount} <span className="hidden lg:inline-block">Pik&apos;lenme</span></UnstyledButton>
              <Modal opened={pikOpened} onClose={() => setPikOpened(false)} centered title="Pikleyen(ler)">
                <PikModal />
              </Modal>
              <UnstyledButton className="flex gap-1 items-center text-sm text-f07167 border border-solid !border-f07167 p-1 lg:p-2 rounded bg-white" onClick={toggle}>
                <IconBrandHipchat size={18} />{commentCount} <span className="hidden lg:inline-block">Laklak</span>
              </UnstyledButton>
            </div>
          </div>
        </div>
        <div className="flex gap-2 p-3 pl-0 pr-0 lg:pr-3 lg:pl-3 justify-between pb-0 min-h-[30px] lg:min-h-[40px] items-center">
          {pik === false && <button className="flex items-center gap-1 text-sm" onClick={() => setPik(true)}><IconPhoto size={18} />Pikle!</button>}
          {pik === true &&
            <button className="flex items-center gap-1 text-sm text-f07167" onClick={() => setPik(false)}>
              <IconPhotoFilled size={18} />
              Pikledin
            </button>
          }
          <UnstyledButton className="flex items-center gap-1 text-sm" onClick={toggle}>
            <IconMessageDots size={18} />
            <span className="hidden lg:inline-block">Laklak Yap</span>
          </UnstyledButton>
          <UnstyledButton onClick={open} className="flex items-center gap-1 text-sm">
            <IconPackage size={18} />
            <span className="hidden lg:inline-block">Koleksiyona Ekle</span>
          </UnstyledButton>
          <Drawer opened={openDraw} onClose={close} title="Koleksiyonlarım">
            <CollapseCollectionList />
          </Drawer>
          <PostShare />
          <button className="flex items-center gap-1 text-sm text-ffbeb9" onClick={() => setReportOpened(true)}>
            <IconAlertSquareFilled size={18} />
          </button>
          <Modal opened={reportOpened} onClose={() => setReportOpened(false)} centered title="Rapor Et">
            <ReportModal />
          </Modal>
        </div>
        <Collapse in={opened} className="w-full">
          <PostCollapse />
        </Collapse>
      </div>
    </>
  )
}
