import { useState } from 'react';
import Login from './Login';
import Register from './Register';

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
          className={`w-full h-6 lg:h-9 text-sm lg:text-base text-center cursor-pointer leading-4 md:leading-8 flex justify-center items-center px-4 lg:px-0 
            ${tabID === 1 ? 'bg-white text-f07167 font-bold rounded' : 'text-white font-bold'}`}
          onClick={(): void => onChangeTab(1)}
          style={{ boxShadow: tabID === 1 ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "" }}>
          {'Tanıdığım'}
        </div>
        <div
          className={`w-full h-6 lg:h-9 text-sm lg:text-base text-center cursor-pointer leading-4 md:leading-8 flex justify-center items-center px-2 lg:px-0 
            ${tabID === 2 ? 'bg-white text-f07167 font-bold rounded' : 'text-white font-bold'}`}
          onClick={(): void => onChangeTab(2)}
          style={{ boxShadow: tabID === 2 ? "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" : "" }}>
          {'Hesap Lütfen'}
        </div>
      </div>
      {
        tabID === 1 &&
        <Login />
      }
      {
        tabID === 2 &&
        <Register />
      }
    </>
  )
}
