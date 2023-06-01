import { IconAlbum } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import CollectionSettings from "./CollectionSettings"


interface CollectionListItemProps {
  name: string,
  link: string,
  item: any,
  count: number,
  collectClick: any
}

export default function CollectionListItem({ name, link, item, collectClick }: CollectionListItemProps) {
  return (
    <>
      <div className="w-full bg-white border rounded min-h-[200px] p-4 mb-4">
        <div className="flex justify-between px-2">
          <Link href={link}>
            <div className="font-bold text-base mb-3">
              {name}
            </div>
          </Link>
          <div className="text-sm flex gap-1 justify-center items-center h-4">
            <div className="flex justify-center items-center">
              <CollectionSettings />
            </div>
          </div>
        </div>
        <Link href={link}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {item.map((e: any, index: number) => (
              <>
                <div className="w-full rounded overflow-hidden" key={index}>
                  <Image src={e} alt="" width={300} height={200} className="w-full object-cover h-full" />
                </div>
              </>
            ))}
          </div>
        </Link>
          <button className="font-bold font-base text-xs text-center mt-4 text-BF4565 mx-auto flex" onClick={collectClick}>Koleksiyonu Gör</button>
      </div>
    </>
  )
}
