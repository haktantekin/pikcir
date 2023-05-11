import { useDisclosure } from '@mantine/hooks';
import { Menu, Drawer, UnstyledButton } from '@mantine/core';
import { IconBellRinging, IconBrandHipchat, IconMessageCircle2, IconMoodWink, IconPackage, IconTrophy } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Notification() {
  const [notRead, setNotRead] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Menu shadow="md" width={300} withArrow closeOnItemClick={true}>
        <Menu.Target>
          <UnstyledButton className="bg-none hover:bg-transparent px-0 mx-0">
            <div className="rounded-3xl bg-e15146 border border-e15146 p-1 py-0 absolute -top-1 -right-1 text-white text-center text-xs">9+</div>
            <IconBellRinging size="1.7rem" stroke={1.0} className="text-343a40" />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
        <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconTrophy size={20} stroke={1.0} />}>
            Haftanın en çok pik&apos;lenenleri açıklandı! - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-f07167 mt-1'>Kimlermiş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            Yeni bir liste açıldı <Link href="javascript:;" className='font-bold'>&apos;Karım evde yokken&apos;</Link> - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-f07167 mt-1'>Pikçır paylaş</Link>
          </Menu.Item>
          <Menu.Item className='text-center font-bold' onClick={open}>
            Tümünü Gör
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Drawer opened={opened} onClose={close} title="Bildirimlerim" position="right" size="600">
        <Menu>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconTrophy size={20} stroke={1.0} />}>
            Haftanın en çok pik&apos;lenenleri açıklandı! - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-f07167'>Kimlermiş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            Yeni bir liste açıldı <Link href="javascript:;" className='font-bold'>&apos;Karım evde yokken&apos;</Link> - <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-f07167'>Pikçır paylaş</Link>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderini PİK&apos;ledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderini kolesiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMessageCircle2 size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderine yorum yaptı <em>&quot;hahahaha&quot;</em>- <span className='text-xs text-gray-500'>1h</span>
            <Link href="javascript:;" className='block text-f07167'>Cevap ver</Link>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderini kolesiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item onMouseEnter={() => setNotRead(false)} href={"javascript:;"} className={`${notRead === true && 'bg-f5f3f4'}`} component="a" icon={<IconMoodWink size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderini PİK&apos;ledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
          <Menu.Item className='leading-5' href={"javascript:;"} component="a" icon={<IconPackage size={20} stroke={1.0} />}>
            <strong className="text-e15146">@haktan</strong> senin gönderini kolesiyonuna ekledi! <Link href="javascript:;" className='font-bold'>&quot;Seçim kazanırken biz&quot;</Link> - <span className='text-xs text-gray-500'>1h</span>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  )
}
