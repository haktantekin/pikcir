import { Menu, Spoiler } from '@mantine/core';
import { IconAward, IconAwardFilled, IconBellRinging, IconHash, IconHome2, IconPackage, IconListDetails, IconUserCircle } from "@tabler/icons-react";

export default function TagList() {
  return (
    <>
      <section className="w-full bg-white rounded mb-4 mt-4 lg:mt-0" style={{ boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
        <Menu>
          <Menu.Item href={"/home"} component="a" icon={<IconAward size={25} stroke={0.5} />} className="text-sm pb-0">
            Haftalık Yarışmalar
          </Menu.Item>
          <Menu.Item href={"/home"} component="a" icon={<IconAwardFilled size={25} stroke={0.5} />} className="text-sm">
            Aylık Yarışmalar
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>Günün Etiketleri</Menu.Label>
          <div className={"grid grid-cols-1"}>
          <Spoiler maxHeight={160} showLabel="Tümünü Gör" hideLabel="Gizle" className="show-all">
            <Menu.Item href={"/kategori/serbest"} component="a" icon={<IconHash size={15} stroke={0.5} className="!-mr-2" />} className="text-sm pb-0">
              Serbest
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
            </Spoiler>
          </div>
        </Menu>
      </section>
    </>
  )
}
