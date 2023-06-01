import { UnstyledButton, Tabs, Modal, TextInput } from '@mantine/core';
import CreatePost from './contentCenter/CreatePost';
import PostList from './contentCenter/post/PostList';
import TagList from './contentCenter/TagList';
import Search from '@/components/main/Search';
import ProfileHeader from './profile/ProfileHeader';
import ProfileContent from './profile/ProfileContent';
import ListItem from './lists/ListItem';
import { useState } from 'react';
import { IconAbc } from '@tabler/icons-react';

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
  const [newListModal, setNewListModal] = useState(false);
  return (

    <>
      <div className="col-span-12 lg:col-span-7 relative mb-4 mt-4 lg:mt-0">
        {type === 'home' ?
          <>
            <CreatePost />
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
                  collectionItem={false}
                  profile={false}
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
                  profile={false}
                  collectionItem={false}
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
                  profile={false}
                  collectionItem={false}
                />
              </Tabs.Panel>
            </Tabs>
          </>
          :
          <>
            {type === 'explore' &&
              <>
                <div className='flex lg:hidden relative mt-4 justify-center items-center'>
                  <Search />
                </div>
                <TagList />
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
                  profile={false}
                  collectionItem={false}
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
                  profile={false}
                  collectionItem={false}
                />
              </>
            }
            {type === 'search' &&
              <>
                <section className="w-full bg-white rounded mb-4 mt-4 lg:mt-0 text-sm text-center min-h-[40px] flex justify-center items-center" style={{ boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
                  <span className='font-bold text-sm text-ffbeb9'>&quot;deli&quot;</span>&nbsp;araması ile alakalı pikçır&apos;lar
                </section>
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
                  profile={false}
                  collectionItem={false}
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
                  profile={false}
                  collectionItem={false}
                />
              </>
            }
            {type === 'profile' &&
              <>
                <ProfileHeader />
                <ProfileContent />
              </>
            }
            {type === 'lists' &&
              <>
                <Tabs defaultValue="today">
                  <div className='w-full bg-white rounded mt-4 lg:mt-0 min-h-[40px] flex justify-between items-center px-4' style={{ boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
                    <h1 className='text-sm lg:text-base text-left'>
                      <span className='font-bold text-ffbeb9'>02.06.2023&nbsp;</span> tarihli Pik Listeleri
                    </h1>
                    <div>
                      <Tabs.List className='w-full justify-around border-b-0 tab-active'>
                        <Tabs.Tab value="today">bugün</Tabs.Tab>
                        <Tabs.Tab value="yesterday">dün</Tabs.Tab>
                        <Tabs.Tab value="all">hepsi</Tabs.Tab>
                      </Tabs.List>
                    </div>
                  </div>
                  <Tabs.Panel value="today" pt="xs">
                    <button className="font-bold text-e15146 text-base py-4 w-full text-center" onClick={() => setNewListModal(true)}>Yeni Liste Oluştur</button>
                    <Modal opened={newListModal} onClose={() => setNewListModal(false)} centered title="Liste Oluştur">
                      <div className="mt-2">
                        <TextInput
                          icon={<IconAbc size={15} />}
                          type="text"
                          label="Liste Adı"
                        />
                      </div>
                      <div className="mt-4 flex justify-center items-center w-full gap-3">
                        <div className='w-full'>
                          <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-sm max-w-[100px] mx-auto min-h-[36px] bg-e15146 pointer-events-none">Oluştur</button>
                        </div>
                      </div>
                    </Modal>
                    <section className="w-full group-odd:ml-auto flex flex-col gap-5">
                      <ListItem
                        link="javascript:;"
                        value="Maaş Yatmıştır"
                        count={96}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                      <ListItem
                        link="javascript:;"
                        value="Futbol Sevmeyen Erkek"
                        count={82}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                    </section>
                  </Tabs.Panel>
                  <Tabs.Panel value="yesterday" pt="xs">
                    <Modal opened={newListModal} onClose={() => setNewListModal(false)} centered title="Liste Oluştur">
                      <div className="mt-2">
                        <TextInput
                          icon={<IconAbc size={15} />}
                          type="text"
                          label="Liste Adı"
                        />
                      </div>
                      <div className="mt-4 flex justify-center items-center w-full gap-3">
                        <div className='w-full'>
                          <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-sm max-w-[100px] mx-auto min-h-[36px] bg-e15146 pointer-events-none">Oluştur</button>
                        </div>
                      </div>
                    </Modal>
                    <section className="w-full group-odd:ml-auto flex flex-col gap-5">
                      <ListItem
                        link="javascript:;"
                        value="Günlük Modum"
                        count={112}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                      <ListItem
                        link="javascript:;"
                        value="Yaptığım Hatalardan Ders Alıyorumdur"
                        count={102}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                    </section>
                  </Tabs.Panel>
                  <Tabs.Panel value="all" pt="xs">
                    <Modal opened={newListModal} onClose={() => setNewListModal(false)} centered title="Liste Oluştur">
                      <div className="mt-2">
                        <TextInput
                          icon={<IconAbc size={15} />}
                          type="text"
                          label="Liste Adı"
                        />
                      </div>
                      <div className="mt-4 flex justify-center items-center w-full gap-3">
                        <div className='w-full'>
                          <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-sm max-w-[100px] mx-auto min-h-[36px] bg-e15146 pointer-events-none">Oluştur</button>
                        </div>
                      </div>
                    </Modal>
                    <section className="w-full group-odd:ml-auto flex flex-col gap-5">
                      <ListItem
                        link="javascript:;"
                        value="Günlük Modum"
                        count={112}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                      <ListItem
                        link="javascript:;"
                        value="Yaptığım Hatalardan Ders Alıyorumdur"
                        count={102}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                      <ListItem
                        link="javascript:;"
                        value="Maaş Yatmıştır"
                        count={96}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                      <ListItem
                        link="javascript:;"
                        value="Futbol Sevmeyen Erkek"
                        count={82}
                        item={["/postExample/Dp-lEfsW4AEDQXc.jpg", "/postExample/Dp-lP3mWkAAinKk.jpg", "/postExample/Dqn0H6aX0AArwuh.jpg", "/postExample/DrGjfB2XQAIELri.jpg"]}
                      />
                    </section>
                  </Tabs.Panel>
                </Tabs>
              </>
            }

          </>
        }

      </div >
    </>
  )
}
