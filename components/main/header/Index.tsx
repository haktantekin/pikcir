import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import ShowProfile from './ShowProfile';
import { IconCameraSearch, IconBellRinging, IconBrandHipchat, IconPlus } from '@tabler/icons-react';
import { Menu, Button } from '@mantine/core';

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);

  function profileShow(value: boolean) {
    if (value === true) {
      setShowProfile(true);
    }
    else {
      setShowProfile(false);
    }
  }

  return (
    <header className={`h-12 w-full bg-f07167`}>
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <Link href="/home" className="w-full block">
              <Image src="/logo.png" alt="Pickup" width={384} height={114} className="w-[166px]"></Image>
            </Link>
          </div>
          <div className="col-span-6 flex justify-center items-center relative">
            <input type="text" className="w-full rounded-3xl h-10 bg-ffbeb9 border border-white px-4 pl-10 text-white font-bold text-sm" ></input>
            <button className="absolute left-2 z-10">
              <IconCameraSearch size="1.7rem" stroke={1.5} className="text-white" />
            </button>
          </div>
          <div className="col-span-3 flex justify-end items-center gap-3">
            <div className="relative cursor-pointer" title="Bildirimler">
              <div className="rounded-3xl bg-e15146 border border-white p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBellRinging size="1.7rem" stroke={1.5} className="text-white" />
            </div>
            <div className="relative cursor-pointer" title="Mesajlar">
              <div className="rounded-3xl bg-e15146 border border-white p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">2</div>
              <IconBrandHipchat size="1.7rem" stroke={1.5} className="text-white" />
            </div>
            <div className="relative cursor-pointer" title="Yeni Ekle">
              <IconPlus size="1.7rem" stroke={1.5} className="text-white" />
            </div>
            <div className="relative cursor-pointer" title="Profilim">
              <Menu shadow="md" width={200} withArrow>
                <Menu.Target>
                  <Button className="bg-none hover:bg-transparent px-0 mx-0">
                    <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
                  </Button>
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
