import { UnstyledButton } from '@mantine/core';
import CreatePost from './contentCenter/CreatePost';
import PostList from './contentCenter/PostList';

export default function ContentCenter() {
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
      else{
        return time = dakikaFarki + ' dakika';
      }
    } 
    else if(yilFarki > 0){
      return time = yilFarki + ' yıl';
    }
    else {
      return time = gunFarki + ' gün';
    }
  }
  return (
    <>
      <div className="col-span-7 relative mb-4">
        <CreatePost />
        <UnstyledButton className='absolute left-1/2 -translate-x-1/2 bg-f07167 border border-e15146 rounded p-2 text-white font-bold cursor-pointer'>32 Yeni Gönderi</UnstyledButton>
        <PostList
          userName={"natkahh"}
          userLink={"javascript:;"}
          postLink={"javascript:;"}
          time={postTime("2023-05-18T23:11:00")}
          image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
          commentCount={3}
          pikCount={3}
        />
          <PostList
          userName={"natkahh"}
          userLink={"javascript:;"}
          postLink={"javascript:;"}
          time={postTime("2023-05-18T23:11:00")}
          image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
          commentCount={35}
          pikCount={150}
        />
      </div>
    </>
  )
}
