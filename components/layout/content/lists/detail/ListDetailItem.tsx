import { IconAlarm } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface ListDetailItemProps {
  link: string;
  image: string;
  user: string;
  time: string;
}

export default function ListDetailItem({ link, image, user, time }: ListDetailItemProps) {
  return (
    <>
      <div className="flex flex-col h-full justify-between">
        <Link href={link} className="rounded overflow-hidden hover:scale-105 transition-all ease-in-out delay-400 border border-ffbeb9 h-full object-fill">
          <Image src={image} alt="" width={300} height={300} className="!w-full !h-full" />
        </Link>
        <div className="flex justify-between items-center w-full mt-2">
          <Link href={link} className="text-ffbeb9 font-bold text-xs h-auto object-fill">
            {user}
          </Link>
          <div className="text-xs flex gap-1 justify-center items-center">
            <IconAlarm size={10} /> {time}
          </div>
        </div>
      </div>

    </>
  )
}
