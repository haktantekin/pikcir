import ShowProfileMobile from "../header/ShowProfileMobile";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Modal, UnstyledButton } from '@mantine/core';
import Image from "next/image";
import Notification from "../header/Notification";
import { IconBrandHipchat, IconHome2, IconPlus, IconCameraSearch } from "@tabler/icons-react";
import NewPost from "../header/NewPost";
import Link from "next/link";

export default function Footer() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <footer className="flex lg:hidden fixed bottom-0 w-full h-12 bg-white border-t-2 border-e15146 justify-between px-4">
        <Link href="/home" className="flex justify-center items-center">
          <IconHome2 size={"1.7rem"} stroke={1.0} />
        </Link>

        <Link href="/home" className="flex justify-center items-center">
          <IconCameraSearch size={"1.7rem"} stroke={1.0} />
        </Link>
        <div className="relative cursor-pointer flex justify-center" title="Yeni Ekle">
          <UnstyledButton onClick={open}>
            <IconPlus size="1.7rem" stroke={1.0} className="text-f07167" />
          </UnstyledButton>
          <Modal opened={opened} onClose={close} centered>
            <NewPost />
          </Modal>
        </div>
        <div className="relative cursor-pointer leading-none flex justify-center items-center" title="Mesajlar">
          <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute top-1 -right-1 text-white text-center text-xs">2</div>
          <IconBrandHipchat size="1.7rem" stroke={1.0} className="text-343a40" />
        </div>
        <div className="relative cursor-pointer leading-none flex items-center" title="Bildirimler">
          <Notification />
        </div>
        <div className="relative cursor-pointer hidden lg:flex justify-center items-center" title="Yeni Ekle">
          <UnstyledButton onClick={open}>
            <IconPlus size="1.7rem" stroke={1.0} className="text-f07167" /></UnstyledButton>
          <Modal opened={opened} onClose={close} centered>
            <NewPost />
          </Modal>
        </div>
      </footer>
    </>
  )
}
