import Image from "next/image";
import Link from "next/link";
import ShowProfile from './ShowProfile';
import { IconCameraSearch, IconBrandHipchat, IconPlus } from '@tabler/icons-react';
import { Menu, UnstyledButton, Modal, Button, Group } from '@mantine/core';
import Notification from "./Notification";
import { useDisclosure } from '@mantine/hooks';
import NewPost from "./NewPost";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <header className={`h-12 w-full bg-white border-b border-f07167`}>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Link href="/home" className="w-full block">
              <Image src="/logo-dark.png" alt="Pickup" width={160} height={47} className="w-[160px] h-[47px]" priority></Image>
            </Link>
          </div>
          <div className="col-span-6 flex justify-center items-center relative">
            <input type="text" className="w-full rounded-3xl h-10 bg-white border border-e15146 px-4 pl-10 text-e15146 font-bold text-sm" ></input>
            <button className="absolute left-2 z-10">
              <IconCameraSearch size="1.7rem" stroke={1.0} className="text-f07167" />
            </button>
          </div>
          <div className="col-span-3 flex justify-end items-center gap-3">
            <div className="relative cursor-pointer leading-none" title="Bildirimler">
              <Notification />
            </div>
            <div className="relative cursor-pointer leading-none" title="Mesajlar">
              <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBrandHipchat size="1.7rem" stroke={1.0} className="text-343a40" />
            </div>
            <div className="relative cursor-pointer" title="Yeni Ekle">
              <UnstyledButton onClick={open}>  <IconPlus size="1.7rem" stroke={1.0} className="text-f07167" /></UnstyledButton>
            <Modal opened={opened} onClose={close} centered>
              <NewPost/>
            </Modal>
          </div>
          <div className="relative cursor-pointer" title="Profilim">
            <Menu shadow="md" width={200} withArrow>
              <Menu.Target>
                <UnstyledButton className="bg-none hover:bg-transparent px-0 mx-0">
                  <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown className="py-2">
                <ShowProfile />
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
    </div>
    </header >
  )
}
