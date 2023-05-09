import { useState } from 'react';

export default function Membership() {
  const [tabID, setTabID] = useState<number>(1);
  function onChangeTab(value: number): void {
    if (tabID !== value) {
      setTabID(value);
    }
  }
  return (
    <>
      <div className='w-full grid grid-cols-2 bg-f07167 rounded p-2 mb-5'>
        <div
          className={`w-full h-12 lg:h-9 text-sm lg:text-base text-center cursor-pointer leading-4 md:leading-8 flex justify-center items-center px-4 lg:px-0 
            ${tabID === 1 ? 'bg-white text-f07167 font-bold rounded' : 'text-white font-bold'}`}
          onClick={(): void => onChangeTab(1)}
          style={{ boxShadow: tabID === 1 ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "" }}>
          {'Tanıdığım'}
        </div>
        <div
          className={`w-full h-12 lg:h-9 text-sm lg:text-base text-center cursor-pointer leading-4 md:leading-8 flex justify-center items-center px-2 lg:px-0 
            ${tabID === 2 ? 'bg-white text-f07167 font-bold rounded' : 'text-white font-bold'}`}
          onClick={(): void => onChangeTab(2)}
          style={{ boxShadow: tabID === 2 ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "" }}>
          {'Hesap Ver'}
        </div>
      </div>
      {
        tabID === 1 &&
        <>
          <div className='flex flex-col gap-4 min-h-[200px]'>
            <div className='flex flex-col'>
              <label>Kullanıcı Adı:</label>
              <input type="text" placeholder='@username' />
            </div>
            <div className='flex flex-col'>
              <label>Şifre:</label>
              <input type="password" placeholder='********' />
            </div>
            <a href="javascript:;" className='ml-auto text-f07167 text-sm border-b border-b-f07167'>
              neydi yaa
            </a>
            <button className='font-bold text-base text-f07167 border border-f07167 rounded py-2 px-10 mx-auto hover:bg-f07167 hover:text-white' style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>FİŞEKLE!</button>
          </div>
        </>
      }
      {
        tabID === 2 &&
        <>
          <div className='flex flex-col gap-4 min-h-[200px]'>
            asd
          </div>
        </>
      }
    </>
  )
}
