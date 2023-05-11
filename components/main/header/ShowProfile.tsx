import Link from "next/link";
import { Menu } from '@mantine/core';
import { IconUserCircle, IconMoodWink, IconPackage, IconLogout2 } from '@tabler/icons-react';

export default function ShowProfile() {
  return (
    <>
      <Menu.Label>Merhaba @haktan</Menu.Label>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconUserCircle size={17} stroke={1.0} />}>
        Profilim
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconMoodWink size={17} stroke={1.0} />}>
        Piklediklerim
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" icon={<IconPackage size={17} stroke={1.0} />}>
        Koleksiyonlarım
      </Menu.Item>
      <Menu.Item href={"javascript:;"} component="a" color="red" icon={<IconLogout2 size={17} stroke={1.0} />}>
        Çıkış Yap
      </Menu.Item>
    </>
  )
}
