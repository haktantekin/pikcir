import { UnstyledButton, Tabs } from '@mantine/core';
import PostList from './../contentCenter/post/PostList';

export default function ProfileContent() {
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
      <Tabs defaultValue="piklerim" className="tab-active mb-4">
        <Tabs.List className="w-full justify-around border-b-0 bg-white py-2 font-bold rounded" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
          <Tabs.Tab className="px-0 text-f07167" value="piklerim">Pikçırları</Tabs.Tab>
          <Tabs.Tab className="px-0 text-f07167" value="piklediklerim">Pikledikleri</Tabs.Tab>
          <Tabs.Tab className="px-0 text-f07167" value="collection">Koleksiyonları</Tabs.Tab>
          <Tabs.Tab className="px-0 text-f07167" value="tags">Tagleri</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="piklerim" pt="lg">
          <PostList
            userName={"natkah"}
            userLink={"javascript:;"}
            postLink={"javascript:;"}
            profileImage={"/profile.jpg"}
            time={postTime("2023-05-21T10:11:00")}
            image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
            commentCount={3}
            pikCount={3}
            admin={false}
            postTitle={"devamlı hata yapıyorumdur"}
            profile={true}
          />
          <PostList
            userName={"natkah"}
            userLink={"javascript:;"}
            postLink={"javascript:;"}
            profileImage={"/profile.jpg"}
            time={postTime("2023-05-21T10:11:00")}
            image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
            commentCount={35}
            pikCount={150}
            admin={false}
            postTitle={"chp'nin kurduğu koalisyon"}
            profile={true}
          />
        </Tabs.Panel>
        <Tabs.Panel value="piklediklerim" pt="lg">
          <PostList
            userName={"can"}
            userLink={"javascript:;"}
            postLink={"javascript:;"}
            profileImage={"/noImage.png"}
            time={postTime("2023-05-21T10:11:00")}
            image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
            commentCount={3}
            pikCount={3}
            admin={false}
            postTitle={"devamlı hata yapıyorumdur"}
            profile={true}
          />
          <PostList
            userName={"can"}
            userLink={"javascript:;"}
            postLink={"javascript:;"}
            profileImage={"/noImage.png"}
            time={postTime("2023-05-21T10:11:00")}
            image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
            commentCount={35}
            pikCount={150}
            admin={false}
            postTitle={"chp'nin kurduğu koalisyon"}
            profile={true}
          />
        </Tabs.Panel>
        <Tabs.Panel value="collection" pt="lg">

        </Tabs.Panel>
      </Tabs>
    </>

  )
}
