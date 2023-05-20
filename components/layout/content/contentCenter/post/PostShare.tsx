import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight, IconShare3, IconBrandFacebook, IconBrandTwitter, IconBrandWhatsapp, IconLink, IconBrandPinterest } from '@tabler/icons-react';
import Link from 'next/link';


export default function PostShare() {
  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Link href="javascript:;" className="flex items-center gap-1 text-sm"><IconShare3 size={18} />Paylaş</Link>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item icon={<IconLink size={18} />}>Linki Kopyala</Menu.Item>
          <Menu.Item icon={<IconBrandWhatsapp size={18} />}>Whatsapp</Menu.Item>
          <Menu.Item icon={<IconBrandTwitter size={18} />}>Twitter</Menu.Item>
          <Menu.Item icon={<IconBrandFacebook size={18} />}>Facebook</Menu.Item>
          <Menu.Item icon={<IconBrandPinterest size={18} />}>Pinterest</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
