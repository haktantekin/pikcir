import Link from "next/link";
import { Menu } from '@mantine/core';
import { IconUserCircle, IconMoodWink, IconPackage, IconLogout2 } from '@tabler/icons-react';

export default function ShowProfile() {
  return (
    <>
      <Menu.Label>Merhaba @haktan</Menu.Label>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconUserCircle size={17} />}>
        Profilim
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconMoodWink size={17} />}>
        Piklediklerim
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconPackage size={17} />}>
        Koleksiyonlarım
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" color="red" icon={<IconLogout2 size={17} />}>
        Çıkış Yap
      </Menu.Item>
    </>
  )
}
