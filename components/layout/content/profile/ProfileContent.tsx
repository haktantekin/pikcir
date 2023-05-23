import { Tabs } from '@mantine/core';
import PostList from './../contentCenter/post/PostList';
import CollectionListItem from '../profile/CollectionListItem';
import { IconSquareRoundedPlus, IconArrowNarrowLeft } from '@tabler/icons-react';
import { useState } from 'react';

export default function ProfileContent() {
  const [collectionDetail, setCollectionDetail] = useState(false);

  const collectClick = (): void => {
    setCollectionDetail(true);
  }

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
          <Tabs.Tab className="px-0 text-f07167" value="piklerim">Pikcırları</Tabs.Tab>
          <Tabs.Tab className="px-0 text-f07167" value="piklediklerim">Pikledikleri</Tabs.Tab>
          <Tabs.Tab className="px-0 text-f07167" value="collection">Koleksiyonları</Tabs.Tab>
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
            collectionItem={false}
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
            collectionItem={false}
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
            profile={false}
            collectionItem={false}
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
            profile={false}
            collectionItem={false}
          />
        </Tabs.Panel>
        <Tabs.Panel value="collection" pt="lg">
          {!collectionDetail ?
            <>
              <div className='w-full text-right pr-4 mb-4 text-f07167 font-bold flex justify-center gap-1 text-xs items-center'><IconSquareRoundedPlus size={18} /> Yeni Oluştur</div>
              <CollectionListItem
                name="Komik Resimler"
                link="/natkah/collections/komik-resimler"
                item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                count={68}
                collectClick={collectClick}
              />
              <CollectionListItem
                name="Küfürlü Resimler"
                link="/natkah/collections/kufurlu-resimler"
                item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                count={19}
                collectClick={collectClick} />
            </>
            :
            <>
              <div className='w-full bg-white rounded mb-4 text-sm text-center min-h-[40px] flex justify-center items-center relative' style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}>
                <button className="absolute left-4 top-2" onClick={() => setCollectionDetail(false)}><IconArrowNarrowLeft /></button><span className="font-bold text-sm text-ffbeb9">Komik Resimler</span>&nbsp;Koleksiyonu</div>
              <div className='grid grid-cols-1 gap-4'>
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
                  collectionItem={true}
                />
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
                  collectionItem={true}
                />
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
                  collectionItem={true}
                />
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
                  collectionItem={true}
                />
              </div>
            </>
          }
        </Tabs.Panel>
      </Tabs>
    </>

  )
}
