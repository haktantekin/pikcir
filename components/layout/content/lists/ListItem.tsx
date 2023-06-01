import Image from "next/image";
import Link from "next/link";

interface ListItemProps {
  link: string,
  value: string,
  count: number,
  item: any,
}

export default function ListItem({ link, value, count, item }: ListItemProps) {
  return (
    <>
      <Link href={link} className="bg-white min-h-[50px] rounded border border-ffbeb9 border-dashed flex flex-col text-base mx-auto">
        <div className="pt-4 pl-4 text-BF4565">
        <strong>{value}</strong> &nbsp;({count})
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {item.map((e: any, index: number) => (
            <>
              <div className="w-full rounded overflow-hidden" key={index}>
                <Image src={e} alt="" width={300} height={200} className="w-full object-cover h-full" />
              </div>
            </>
          ))}
        </div>
      </Link>
    </>
  )
}
