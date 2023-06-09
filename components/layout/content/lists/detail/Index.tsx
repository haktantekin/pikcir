import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Tabs } from '@mantine/core';
import ListDetailItem from "./ListDetailItem";


export default function ListDetail() {
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
        <Tabs defaultValue="today">
          <div className='w-full bg-white rounded mb-4 text-sm text-center min-h-[40px] relative grid grid-cols-12 justify-items-center items-center' style={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" }}>
            <button className="col-span-1" onClick={() => history.back()}><IconArrowNarrowLeft /></button>
            <div className="col-span-7">
              <span className="font-bold text-sm text-ffbeb9">Maaş Yatmıştır</span>&nbsp;Listesi
            </div>
            <div className="ml-auto col-span-4 pr-2">
              <Tabs.List className='w-full justify-around border-b-0 tab-active'>
                <Tabs.Tab value="today">bugün</Tabs.Tab>
                <Tabs.Tab value="yesterday">dün</Tabs.Tab>
                <Tabs.Tab value="all">hepsi</Tabs.Tab>
              </Tabs.List>
            </div>
          </div>
          <div>
            <Tabs.Panel value="today" pt="xs">
              <section className="w-full grid grid-cols-2 gap-5 bg-white p-4 rounded">
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lEfsW4AEDQXc.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
                  user={'@can'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
              </section>
            </Tabs.Panel>
            <Tabs.Panel value="yesterday" pt="xs">
              <section className="w-full grid grid-cols-2 gap-5 bg-white p-4 rounded">
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lEfsW4AEDQXc.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
                  user={'@can'}
                  time={postTime("2023-05-21T10:11:00")}
                />
              </section>
            </Tabs.Panel>
            <Tabs.Panel value="all" pt="xs">
              <section className="w-full grid grid-cols-2 gap-5 bg-white p-4 rounded">
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lEfsW4AEDQXc.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dp-lP3mWkAAinKk.jpg`}
                  user={'@can'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/DrGjfB2XQAIELri.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
                <ListDetailItem
                  link={`/post`}
                  image={`/postExample/Dqn0H6aX0AArwuh.jpg`}
                  user={'@natkah'}
                  time={postTime("2023-05-21T10:11:00")}
                />
              </section>
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>
    </>
  )
}
