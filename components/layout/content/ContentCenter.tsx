import { UnstyledButton, Tabs } from '@mantine/core';
import CreatePost from './contentCenter/CreatePost';
import PostList from './contentCenter/post/PostList';

interface ContentCenterProps {
  type: string
}

export default function ContentCenter({ type }: ContentCenterProps) {
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
      <div className="col-span-12 lg:col-span-7 relative mb-4">
        <CreatePost />
        {type === 'home' ?
          <>
            <Tabs defaultValue="karma" className="tab-active">
              <Tabs.List className="w-full justify-around border-b-0 bg-white py-2 font-bold rounded" style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }}>
                <Tabs.Tab className="px-0 text-f07167" value="karma">Karma</Tabs.Tab>
                <Tabs.Tab className="px-0 text-f07167" value="followed">Takip Ettiklerin</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="karma" pt="xs">
                <UnstyledButton className='relative mb-2 left-1/2 -translate-x-1/2 bg-f07167 border border-e15146 rounded p-2 text-white font-bold cursor-pointer text-xs lg:text-base'>32 Yeni Gönderi</UnstyledButton>
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
                />
              </Tabs.Panel>

              <Tabs.Panel value="followed" pt="xs">
                <UnstyledButton className='relative mb-2 left-1/2 -translate-x-1/2 bg-f07167 border border-e15146 rounded p-2 text-white font-bold cursor-pointer text-xs lg:text-base'>19 Yeni Gönderi</UnstyledButton>
                <PostList
                  userName={"natkahh"}
                  userLink={"javascript:;"}
                  postLink={"javascript:;"}
                  profileImage={"/profile.jpg"}
                  time={postTime("2023-05-18T23:11:00")}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  commentCount={3}
                  pikCount={3}
                  admin={true}
                  postTitle={"devamlı hata yapıyorumdur"}
                />
                <PostList
                  userName={"natkahh"}
                  userLink={"javascript:;"}
                  postLink={"javascript:;"}
                  profileImage={"/profile.jpg"}
                  time={postTime("2023-05-18T23:11:00")}
                  image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
                  commentCount={35}
                  pikCount={150}
                  admin={true}
                  postTitle={"chp'nin kurduğu koalisyon"}
                />
              </Tabs.Panel>
            </Tabs>
          </>
          :
          <>
            <PostList
              userName={"natkahh"}
              userLink={"javascript:;"}
              profileImage={"/profile.jpg"}
              postLink={"javascript:;"}
              time={postTime("2023-05-18T23:11:00")}
              image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
              commentCount={3}
              pikCount={3}
              admin={true}
              postTitle={"devamlı hata yapıyorumdur"}
            />
            <PostList
              userName={"natkahh"}
              userLink={"javascript:;"}
              profileImage={"/profile.jpg"}
              postLink={"javascript:;"}
              time={postTime("2023-05-18T23:11:00")}
              image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
              commentCount={35}
              pikCount={150}
              admin={true}
              postTitle={"chp'nin kurduğu koalisyon"}
            />
          </>
        }

      </div>
    </>
  )
}
