import Image from "next/image";
import Link from "next/link";

export default function FollowBox() {
  return (
    <>
     <div className="bg-white rounded w-full h-auto block col-span-2 p-3 mt-3" style={{ boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
          <h2 className="fony-bold text-lg">Yeni Kullanıcılar</h2>
          <div className="flex py-2 justify-center items-center">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3">
              <Link href="javascript:void(0);" className="font-bold text-sm">deli dahi</Link>
              <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@natkahh</Link>
            </div>
            <div className="ml-auto">
              <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </div>
          <div className="flex py-2 justify-center items-center">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3">
              <Link href="javascript:void(0);" className="font-bold text-sm">can</Link>
              <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@canyuksel</Link>
            </div>
            <div className="ml-auto">
              <button className="bg-003049 p-2 rounded font-bold text-white text-xs">Takiptesin</button>
            </div>
          </div>
          <div className="flex py-2 justify-center items-center">
            <div>
              <Link href="javascript:void(0);">
                <Image alt="profile" src={'/profile.jpg'} width={400} height={400} className="w-9 rounded-full border border-white" />
              </Link>
            </div>
            <div className="ml-3">
              <Link href="javascript:void(0);" className="font-bold text-sm">natkah</Link>
              <Link href="javascript:void(0);" className="font-normal text-xs block -mt-1 text-343a40">@natkahh</Link>
            </div>
            <div className="ml-auto">
              <button className="bg-e15146 p-2 rounded font-bold text-white text-xs">Takibe Al</button>
            </div>
          </div>
        </div>
    </>
  )
}
