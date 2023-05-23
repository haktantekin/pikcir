import Link from "next/link"


export default function WeeklyWinner() {
  return (
    <>
      <Link href="javascript:;">
        <div className="w-full bg-f07167 h-auto rounded py-1 text-center mt-4">
          <div className="text-white text-xs">Haftalık<br /><strong className="text-sm">Xiaomi Akıllı Saat</strong><br />Ödülünü Kazananan Pikçır Sahibi:</div>
          <div className="text-white text-base font-bold">@natkah</div>
        </div>
      </Link>
    </>
  )
}
