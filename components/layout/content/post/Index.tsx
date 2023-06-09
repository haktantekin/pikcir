import ProfileHeader from './../profile/ProfileHeader';
import PostItem from './PostItem';
import { IconArrowNarrowLeft } from '@tabler/icons-react';

export default function PostContent() {
  function postTime(time: string | number) {
    let paylasilanTarih: any = new Date(time);
    let suAnkiTarih: any = new Date();
    let tarihFarki = suAnkiTarih - paylasilanTarih;
    let dakikaFarki = Math.floor(tarihFarki / (1000 * 60));
    let saatFarki = Math.floor(tarihFarki / (1000 * 60 * 60));
    let gunFarki = Math.floor(tarihFarki / (1000 * 60 * 60 * 24));
    let yilFarki = Math.floor(tarihFarki / (1000 * 60 * 60 * 24 * 365)); // Yıl cinsinden fark

    if (gunFarki === 0) {
      if (dakikaFarki > 60) {
        return time = saatFarki + ' saat';
      }
      else {
        return time = dakikaFarki + ' dakika';
      }
    }
    else if (yilFarki > 0) {
      return time = yilFarki + ' yıl';
    }
    else {
      return time = gunFarki + ' gün';
    }
  }
  return (
    <>
      <div className="col-span-12 lg:col-span-7 relative mb-4 mt-4 lg:mt-0">
        <ProfileHeader />
        <div className='w-full bg-white rounded mb-4 text-sm text-center min-h-[40px] flex justify-center items-center relative mt-3' style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}>
          <div className='font-bold text-sm text-ffbeb9'>Pikçır Detayı</div>
          <button className="absolute left-4 top-2 flex justify-center items-center" onClick={() => history.back()}>
            <IconArrowNarrowLeft />
            <div className='font-bold text-xs text-343a40'>Geri Dön</div></button>
        </div>
        <PostItem
          userName={"natkahh"}
          userLink={"javascript:;"}
          profileImage={"/profile.jpg"}
          time={postTime("2023-05-21T10:11:00")}
          image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
          commentCount={3}
          pikCount={3}
          admin={false}
          postTitle={"devamlı hata yapıyorumdur"}
        />
      </div>
    </>
  )
}
