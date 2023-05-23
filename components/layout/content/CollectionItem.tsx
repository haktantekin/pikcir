import { IconAlbum } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"


interface CollectionItemProps {
  name: string,
  link: string,
  item: any,
  count: number
}

export default function CollectionItem({ name, link, item, count }: CollectionItemProps) {
  return (
    <>
      <div className="w-full bg-white border rounded min-h-[200px] p-4 mb-4">
        <Link href={link}>
          <div className="flex justify-between px-2">
            <div className="font-bold text-base mb-3">
              {name}
            </div>
            <div className="text-sm flex gap-1 justify-center items-center h-4">
              <IconAlbum size={15} />
              {count}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {item.map((e: any, index: number) => (
              <>
                <div className="w-full rounded overflow-hidden" key={index}>
                  <Image src={e} alt="" width={300} height={200} className="w-full object-cover h-full" />
                </div>
              </>
            ))}
          </div>
          <div className="font-bold font-base text-xs text-center mt-4 text-f07167">Koleksiyonu Gör</div>
        </Link>
      </div>
    </>
  )
}
