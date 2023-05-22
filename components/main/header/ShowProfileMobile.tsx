import { Menu } from '@mantine/core';
import { IconAward, IconAwardFilled, IconHome2, IconMoodSearch, IconListDetails, IconUserCircle, IconMoodWink, IconPackage, IconLogout2 } from "@tabler/icons-react";
import WeeklyWinner from '@/components/layout/content/contentRight/WeeklyWinner';
import MonthlyWinner from '@/components/layout/content/contentRight/MonthlyWinner';

export default function ShowProfileMobile() {
  return (
    <>
      <Menu>
        <Menu.Item href={"/home"} component="a" icon={<IconHome2 size={25} stroke={1.0} />} className="text-sm pb-0">
          Ana Sayfa
        </Menu.Item>
        <Menu.Item href={"/profile"} component="a" icon={<IconUserCircle size={25} stroke={1.0} />} className="text-sm pb-0">
          Profilim
        </Menu.Item>
        <Menu.Item href={"javascript:;"} component="a" icon={<IconMoodWink size={25} stroke={1.0} />} className="text-sm pb-0">
          Piklediklerim
        </Menu.Item>
        <Menu.Item href={"javascript:;"} component="a" icon={<IconPackage size={25} stroke={1.0} />} className="text-sm pb-0">
          Koleksiyonlarım
        </Menu.Item>
        <Menu.Item href={"explore"} component="a" icon={<IconMoodSearch size={25} stroke={1.0} />} className="text-sm">
          Keşfet
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item href={"/home"} component="a" icon={<IconListDetails size={25} stroke={1.0} />} className="text-sm pb-0">
          Listeler
        </Menu.Item>
        <Menu.Item href={"/home"} component="a" icon={<IconAward size={25} stroke={1.0} />} className="text-sm pb-0">
          Haftalık Yarışmalar
        </Menu.Item>
        <Menu.Item href={"/home"} component="a" icon={<IconAwardFilled size={25} stroke={1.0} />} className="text-sm">
          Aylık Yarışmalar
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item href={"javascript:;"} component="a" color="red" icon={<IconLogout2 size={25} stroke={1.0} />} className="text-sm">
          Çıkış Yap
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item href={"/home"} component="a" className="text-sm">
          Hizmet Şartları
        </Menu.Item>
        <Menu.Item href={"/home"} component="a" className="text-sm">
          Gizlilik Sözleşmesi
        </Menu.Item>
        <Menu.Item href={"/home"} component="a" className="text-sm">
          Çerez Politikası
        </Menu.Item>
      </Menu>
      <WeeklyWinner />
      <MonthlyWinner />

    </>
  )
}
