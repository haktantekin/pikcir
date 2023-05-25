import Image from "next/image";
import { IconBellRinging, IconMail } from '@tabler/icons-react';
import FollowingModal from "./FollowingModal";
import FollowerModal from "./FollowerModal";
import { Modal } from '@mantine/core';
import { useState } from 'react';
import ProfileSettings from "./ProfileSettings";

export default function ProfileHeader() {
  const [followingOpened, setFollowingOpened] = useState(false);
  const [followerOpened, setFollowerOpened] = useState(false);
  const [follow, setFollow] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <>
      <section>
        <div className="w-full bg-cover min-h-[200px] bg-center bg-no-repeat mb-4 flex justify-center items-center relative before:w-full before:h-full before:absolute before:top-0 before-left-0 before:bg-opacity-50 before:bg-black z-0 rounded-tr rounded-tl overflow-hidden" style={{ backgroundImage: 'url(coverExample.jpg)' }}>
        </div>
        <div className="flex flex-col relative z-1 justify-center items-start lg:items-center -mt-4 pl-4 lg:pl-0 bg-white">
          <div className="group relative rounded-full w-28 border-2 border-white -mt-12 overflow-hidden">
            <Image alt="" width={300} height={300} src="/profile.jpg" className="w-full" />
          </div>
          <div className="w-full text-left lg:text-center font-bold text-base mt-2 text-202124 relative">Haktan</div>
          <div className="w-full text-left lg:text-center font-bold text-xs mt-0 text-343a40">@natkahh  <span className="absolute text-e15146 rounded text-[10px] ml-2 text-center">seni pikcırlıyor</span></div>
          <div className="absolute top-4 right-4 gap-2 justify-center items-center flex">
            <ProfileSettings />
            {notification && <button onClick={() => setNotification(false)} title="Bildirimleri Kapat" className="text-e15146 rounded text-sm font-bold justify-center items-center"><IconBellRinging size={20} /></button>}
            {!notification && <button onClick={() => setNotification(true)} title="Bildirimleri Aç" className="text-202124 rounded text-sm font-bold justify-center items-center"><IconBellRinging size={20} /></button>}
            <button className="text-202124 rounded text-sm font-bold justify-center items-center" title="Mesaj At"><IconMail size={20} /></button>
            {follow && <button onClick={() => setFollow(false)} className="bg-e15146 text-white hover:bg-e15146 hover:text-white rounded text-sm font-bold min-w-[100px] min-h-[30px] justify-center items-center" title="Takibi Bırak">Bırak</button>}
            {!follow && <button onClick={() => setFollow(true)} className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white rounded text-sm font-bold min-w-[100px] min-h-[30px] justify-center items-center" title="Takiple">Pikcırla</button>}
          </div>
          <div className="w-full text-sm mt-2 lg:mt-1 italic text-202124 text-left lg:text-center pr-5 lg:px-5">Sana mutluluğun resmini çizemem, ama komik caps paylaşabilirim.</div>
          <div className="flex gap-4 mt-2 lg:mt-1">
            <button onClick={() => setFollowingOpened(true)} className="text-sm">
              <span className="font-bold">24</span> Takip
            </button>
            <Modal opened={followingOpened} onClose={() => setFollowingOpened(false)} centered title="Takip(leri)">
              <FollowingModal />
            </Modal>
            <button onClick={() => setFollowerOpened(true)} className="text-sm">
              <span className="font-bold">146</span> Takipçi
            </button>
            <Modal opened={followerOpened} onClose={() => setFollowerOpened(false)} centered title="Takipçi(leri)">
              <FollowerModal />
            </Modal>
          </div>
        </div>
      </section>
    </>
  )
}
