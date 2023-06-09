
import Link from "next/link";
import FollowBox from "./contentRight/FollowBox";
import InfoBox from "./contentRight/InfoBox";
import MonthlyWinner from "./contentRight/MonthlyWinner";
import WeeklyWinner from "./contentRight/WeeklyWinner";

export default function ContentRight() {
  return (
    <>
      <div className="hidden lg:block col-span-3 relative">
        <div className="absolute w-full">

          <FollowBox />
          <InfoBox />
          <WeeklyWinner />
          <MonthlyWinner />
          <div className="flex flex-col gap-2 justify-around mt-2">
            <Link href="javascript:;" className="text-xs">Hizmet Şartları</Link>
            <Link href="javascript:;" className="text-xs">Gizlilik Sözleşmesi</Link>
            <Link href="javascript:;" className="text-xs">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </>
  )
}
