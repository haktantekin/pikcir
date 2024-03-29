import Image from "next/image";
import Link from "next/link";
import ShowProfile from './ShowProfile';
import { IconBrandHipchat, IconLetterC, IconLetterI, IconLetterK, IconLetterP, IconLetterR, IconPlus } from '@tabler/icons-react';
import { Menu, Modal, Drawer } from '@mantine/core';
import Notification from "./Notification";
import { useDisclosure } from '@mantine/hooks';
import NewPost from "./NewPost";
import ShowProfileMobile from "./ShowProfileMobile";
import { useState } from "react";
import Search from "../Search";

export default function Header() {
  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState(false);
  return (
    <header className={`h-12 w-full bg-white flex relative`} style={{ boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
      <div className="container">
        <div className="grid grid-cols-12 w-full min-h-full">
          <div className="col-span-12 lg:col-span-2">
            <Link href="/home" className="flex justify-center items-center gap-2 h-full">
              <Image src="/logo.png" alt="Pickup" width={32} height={40} className="w-[32px] h-[40px]" priority></Image>
              <div className="text-sm font-bold text-BF4565 flex justify-center items-center">
                <IconLetterP size={20} stroke={2.0} />
                <IconLetterI size={15} className="-ml-[6px]" stroke={2.0} />
                <IconLetterK size={15} className="-ml-[2px]" stroke={2.0} />
                <IconLetterC size={15} className="-ml-[2px]" stroke={2.0} />
                <IconLetterI size={15} className="-ml-[2px]" stroke={2.0} />
                <IconLetterR size={15} className="-ml-[2px]" stroke={2.0} />
              </div>
            </Link>
          </div>
          <div className="col-span-6 lg:col-span-7 hidden lg:flex justify-center items-center relative">
            <Search />
          </div>
          <div className="col-span-2 lg:col-span-3 flex justify-end items-center gap-3 h-full absolute lg:relative right-4 lg:right-0 top-0">
            <div className="relative cursor-pointer leading-[0] hidden lg:inline-block" title="Bildirimler">
              <Notification />
            </div>
            <div className="relative cursor-pointer leading-[0] hidden lg:flex justify-center" title="Mesajlar">
              <div className="rounded-3xl bg-BF4565 border border-BF4565 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBrandHipchat size="1.7rem" stroke={1.0} className="text-343a40" />
            </div>
            <div className="relative cursor-pointer hidden lg:flex justify-center" title="Yeni Ekle">
              <button onClick={open}>  <IconPlus size="1.7rem" stroke={1.0} className="text-BF4565" /></button>
              <Modal opened={opened} onClose={close} centered>
                <NewPost />
              </Modal>
            </div>
            <div className="relative cursor-pointer justify-center hidden lg:flex" title="Profilim">
              <Menu shadow="md" width={150} withArrow>
                <Menu.Target>
                  <button className="bg-none hover:bg-transparent px-0 mx-0">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </button>
                </Menu.Target>
                <Menu.Dropdown className="py-2">
                  <ShowProfile />
                </Menu.Dropdown>
              </Menu>
            </div>
            <div className="relative cursor-pointer justify-center flex lg:hidden" title="Profilim">
              <button onClick={() => setProfile(true)}><Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" /></button>
              <Drawer opened={profile} onClose={() => setProfile(false)} title="Menüler">
                <ShowProfileMobile />
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}
