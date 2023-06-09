
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
        </div>
      </div>
    </>
  )
}
