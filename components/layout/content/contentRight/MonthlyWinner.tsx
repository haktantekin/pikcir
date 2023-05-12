import Link from "next/link"


export default function MonthlyWinner() {
  return (
    <>
      <Link href="javascript:;">
        <div className="w-full bg-003049 h-auto mt-3 rounded py-1 text-center">
          <div className="text-white text-xs">Aylık<br /><strong className="text-sm">Iphone 14 Plus</strong><br />Ödülünü Kazananan Pikçır Sahibi:</div>
          <div className="text-white text-base font-bold">@canyuksel</div>
        </div>
      </Link>
    </>
  )
}
