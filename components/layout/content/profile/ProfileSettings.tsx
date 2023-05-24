
import { Menu } from '@mantine/core';
import { IconAlertCircleFilled, IconDotsVertical, IconLink, IconMoodSilence } from '@tabler/icons-react';

export default function ProfileSettings() {
  return (
    <>
      <Menu shadow="md" width={150} withArrow>
        <Menu.Target>
          <button className="text-202124 rounded text-sm font-bold justify-center items-center" title="Mesaj At"><IconDotsVertical size={20} /></button>
        </Menu.Target>
        <Menu.Dropdown className="py-2">
          <Menu.Item href={"javascript:;"} component="a" icon={<IconLink size={17} stroke={1.0} />}>
            Profil Linki
          </Menu.Item>
          <Menu.Item href={"javascript:;"} component="a" icon={<IconMoodSilence size={17} stroke={1.0} />}>
            Sessize Al
          </Menu.Item>
          <Menu.Item href={"javascript:;"} component="a" color="red" icon={<IconAlertCircleFilled size={17} stroke={1.0} />}>
            Engelle
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
