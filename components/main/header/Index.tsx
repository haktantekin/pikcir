import Image from "next/image";
import Link from "next/link";


import ShowProfile from './ShowProfile';
import { IconCameraSearch, IconBellRinging, IconBrandHipchat, IconPlus } from '@tabler/icons-react';
import { Menu, Button, Modal, FileButton, Group, UnstyledButton } from '@mantine/core';

export default function Header() {
  return (
    <header className={`h-12 w-full bg-white border-b border-f07167`}>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Link href="/home" className="w-full block">
              <Image src="/logo-dark.png" alt="Pickup" width={160} height={47} className="w-[160px] h-[47px]"></Image>
            </Link>
          </div>
          <div className="col-span-6 flex justify-center items-center relative">
            <input type="text" className="w-full rounded-3xl h-10 bg-white border border-ffbeb9 px-4 pl-10 text-ffbeb9 font-bold text-sm" ></input>
            <button className="absolute left-2 z-10">
              <IconCameraSearch size="1.7rem" stroke={1.0} className="text-f07167" />
            </button>
          </div>
          <div className="col-span-3 flex justify-end items-center gap-3">
            <div className="relative cursor-pointer" title="Bildirimler">
              <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBellRinging size="1.7rem" stroke={1.0} className="text-343a40" />
            </div>
            <div className="relative cursor-pointer" title="Mesajlar">
              <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBrandHipchat size="1.7rem" stroke={1.0} className="text-343a40" />
            </div>
            <div className="relative cursor-pointer" title="Yeni Ekle">
              <Link href="/new-post">
                <IconPlus size="1.7rem" stroke={1.0} className="text-f07167" />
              </Link>
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
