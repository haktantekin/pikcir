import ProfileHeader from './../profile/ProfileHeader';
import ProfileContent from './../profile/ProfileContent';
import { useState } from 'react';
import PostItem from './PostItem';

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
