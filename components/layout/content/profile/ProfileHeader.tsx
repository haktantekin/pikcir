import Image from "next/image";
import { IconBellRinging, IconMail } from '@tabler/icons-react';

export default function ProfileHeader() {
  return (
    <>
      <section>
        <div className="w-full bg-cover min-h-[200px] bg-center bg-no-repeat mb-4 flex justify-center items-center relative before:w-full before:h-full before:absolute before:top-0 before-left-0 before:bg-opacity-50 before:bg-black z-0 rounded-tr rounded-tl overflow-hidden" style={{ backgroundImage: 'url(coverExample.jpg)' }}>
        </div>
        <div className="flex flex-col relative z-1 justify-center items-start lg:items-center -mt-4 pl-4 lg:pl-0 bg-white">
          <div className=""><Image alt="" width={300} height={300} src="/profile.jpg" className="rounded-full w-28 border-2 border-white -mt-12" /></div>
          <div className="w-full text-left lg:text-center font-bold text-base mt-2 text-202124 relative">Haktan</div>
          <div className="w-full text-left lg:text-center font-bold text-xs mt-0 text-343a40">@natkahh  <span className="absolute text-e15146 rounded text-[10px] ml-2 text-center">seni pikcırlıyor</span></div>
          <div className="absolute top-4 right-4 gap-2 justify-center items-center flex">
            <button className="text-202124 rounded text-sm font-bold justify-center items-center" title="Bildirimleri Aç"><IconBellRinging /></button>
            <button className="text-202124 rounded text-sm font-bold justify-center items-center" title="Mesaj At"><IconMail /></button>
            <button className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white rounded text-sm font-bold min-w-[100px] min-h-[30px] justify-center items-center">Pikcırla!</button>
          </div>
          <div className="w-full text-sm mt-2 lg:mt-1 italic text-202124 text-left lg:text-center pr-5 lg:px-5">Sana mutluluğun resmini çizemem, ama komik caps paylaşabilirim.</div>
          <div className="flex gap-4 mt-2 lg:mt-1">
            <div className="text-sm">
              <span className="font-bold">24</span> Takip
            </div>
            <div className="text-sm">
              <span className="font-bold">146</span> Takipçi
            </div>
          </div>
        </div>


      </section>
    </>
  )
}
