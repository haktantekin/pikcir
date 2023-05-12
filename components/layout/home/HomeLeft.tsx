import { Menu } from '@mantine/core';
import { IconAward, IconAwardFilled, IconBellRinging, IconHash, IconHome2, IconList, IconUserCircle } from "@tabler/icons-react";
import { IconPackage } from '@tabler/icons-react';

export default function HomeLeft() {
  return (
    <>
      <div className="bg-white rounded w-full h-auto block col-span-2 border border-f07167">
        <div>
          <Menu>
            <Menu.Item href={"/home"} component="a" icon={<IconHome2 size={25} stroke={0.5} />} className="text-sm pb-0">
              Ana Sayfa
            </Menu.Item>
            <Menu.Item href={"/home"} component="a" icon={<IconBellRinging size={25} stroke={0.5} />} className="text-sm pb-0">
              Bildirimlerim
            </Menu.Item>
            <Menu.Item href={"/home"} component="a" icon={<IconPackage size={25} stroke={0.5} />} className="text-sm pb-0">
              Koleksiyonlarım
            </Menu.Item>
            <Menu.Item href={"/home"} component="a" icon={<IconUserCircle size={25} stroke={0.5} />} className="text-sm">
              Profilim
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item href={"/home"} component="a" icon={<IconAward size={25} stroke={0.5} />} className="text-sm pb-0">
              Haftalık Yarışmalar
            </Menu.Item>
            <Menu.Item href={"/home"} component="a" icon={<IconAwardFilled size={25} stroke={0.5} />} className="text-sm">
              Aylık Yarışmalar
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>Pikçır&apos;lar</Menu.Label>
            <div className={"grid grid-cols-2"}>
              <Menu.Item href={"/kategori/serbest"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Serbest
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Spor
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Dizi/Film
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                İlişki
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Eğitim
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Siyasi
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Yetişkin
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Sanat
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Troll
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
                Tweet
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm">
                Karikatür
              </Menu.Item>
            </div>
          </Menu>
        </div>
      </div>
    </>
  )
}