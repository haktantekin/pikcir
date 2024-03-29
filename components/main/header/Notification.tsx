import { useDisclosure } from '@mantine/hooks';
import { Menu, Drawer } from '@mantine/core';
import { IconBellRinging, IconMessageCircle2, IconMoodWink, IconPackage, IconTrophy } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Notification() {
  const [notRead, setNotRead] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Menu shadow="md" width={300} withArrow closeOnItemClick={true}>
        <Menu.Target>
          <button className="bg-none hover:bg-transparent px-0 mx-0">
            <div className="rounded-3xl bg-BF4565 border border-BF4565 p-1 py-0 absolute top-1 lg:-top-1 -right-1 text-white text-center text-xs">9+</div>
            <span id="show-notification" className='fixed top-0'></span>
            <IconBellRinging size="1.7rem" stroke={1.0} className="text-343a40" />
          </button>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'} leading-4`} component="a" icon={<IconTrophy size={20} stroke={1.0} />}>
            Haftanın en çok pik&apos;lenenleri açıklandı! - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-BF4565 mt-1'>Kimlermiş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'} leading-4`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            Yeni bir liste açıldı <Link href="javascript:;" className='font-bold'>&apos;Karım evde yokken&apos;</Link> - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-BF4565 mt-1'>Pikçır paylaş</Link>
          </Menu.Item>
          <Menu.Item className='text-center font-bold' onClick={open} id='show-all'>
            Tümünü Gör
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Drawer opened={opened} onClose={close} title="Bildirimlerim" position="right" size="xl" className='drawer-notification'>
        <Menu>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconTrophy size={20} stroke={1.0} />}>
            Haftanın en çok pik&apos;lenenleri açıklandı! - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-BF4565'>Kimlermiş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            Yeni bir liste açıldı <Link href="javascript:;" className='font-bold'>&apos;Karım evde yokken&apos;</Link> - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-BF4565'>Pikçır paylaş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderini PİK&apos;ledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderini koleksiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMessageCircle2 size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderine yorum yaptı <em>&quot;hahahaha&quot;</em>- <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-BF4565'>Cevap ver</Link>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderini koleksiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderini PİK&apos;ledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-BF4565">@haktan</strong> senin gönderini koleksiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  )
}
