import { Menu } from '@mantine/core';
import { IconMoodSearch } from '@tabler/icons-react';
import { IconAward, IconAwardFilled, IconBellRinging, IconHash, IconHome2, IconPackage, IconListDetails, IconUserCircle } from "@tabler/icons-react";
import { useState } from 'react';

export default function ContentLeft() {
  const [disabled, setDisabled] = useState(false);
  function linkClick(value: boolean) {
    console.log(value);
    if (value === true) {
      document.getElementById('show-notification')?.click();
      setTimeout(() => {
        document.getElementById('show-all')?.click();
        setDisabled(false);
      }, 100);
    }
    else {
      setDisabled(true);
    }
  }

  return (
    <>
      <div className='relative col-span-2'>
        <div className="bg-white rounded absolute left-0 w-full" style={{ gridAutoRows: "min-content", boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
          <div className='home-left w-full'>
            <Menu>
              <Menu.Item href={"/home"} component="a" icon={<IconHome2 size={25} stroke={0.5} />} className="text-sm pb-0">
                Ana Sayfa
              </Menu.Item>
              <Menu.Item icon={<IconBellRinging size={25} stroke={0.5} />} className="text-sm pb-0" onClick={() => linkClick(disabled === false ? true : false)}>
                Bildirimlerim
              </Menu.Item>
              <Menu.Item icon={<IconMoodSearch size={25} stroke={0.5} />} className="text-sm pb-0" onClick={() => linkClick(disabled === false ? true : false)}>
                Keşfet
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconPackage size={25} stroke={0.5} />} className="text-sm pb-0">
                Koleksiyonlarım
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconUserCircle size={25} stroke={0.5} />} className="text-sm">
                Profilim
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item href={"/home"} component="a" icon={<IconListDetails size={25} stroke={0.5} />} className="text-sm pb-0">
                Listeler
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconAward size={25} stroke={0.5} />} className="text-sm pb-0">
                Haftalık Yarışmalar
              </Menu.Item>
              <Menu.Item href={"/home"} component="a" icon={<IconAwardFilled size={25} stroke={0.5} />} className="text-sm">
                Aylık Yarışmalar
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </>
  )
}