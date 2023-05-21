import Image from "next/image";
import Link from "next/link";
import ShowProfile from './ShowProfile';
import { IconCameraSearch, IconBrandHipchat, IconPlus } from '@tabler/icons-react';
import { Menu, UnstyledButton, Modal, Drawer } from '@mantine/core';
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
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 lg:col-span-2 flex justify-center items-center">
            <Link href="/home" className="w-full block text-center">
              <Image src="/logo.png" alt="Pickup" width={60} height={48} className="w-[60px] h-[48px] mx-auto" priority></Image>
            </Link>
          </div>
          <div className="col-span-6 lg:col-span-7 hidden lg:flex justify-center items-center relative">
          <Search />
          </div>
          <div className="col-span-2 lg:col-span-3 flex justify-end items-center gap-3 h-full absolute lg:relative right-4 lg:right-0 top-0">
            <div className="relative cursor-pointer leading-none hidden lg:inline-block" title="Bildirimler">
              <Notification />
            </div>
            <div className="relative cursor-pointer leading-none hidden lg:flex justify-center" title="Mesajlar">
              <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBrandHipchat size="1.7rem" stroke={1.0} className="text-343a40" />
            </div>
            <div className="relative cursor-pointer hidden lg:flex justify-center" title="Yeni Ekle">
              <UnstyledButton onClick={open}>  <IconPlus size="1.7rem" stroke={1.0} className="text-f07167" /></UnstyledButton>
              <Modal opened={opened} onClose={close} centered>
                <NewPost />
              </Modal>
            </div>
            <div className="relative cursor-pointer justify-center hidden lg:flex" title="Profilim">
              <Menu shadow="md" width={150} withArrow>
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
