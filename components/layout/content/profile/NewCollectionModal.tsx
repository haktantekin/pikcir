import { TextInput } from '@mantine/core';
import { IconCircleCheckFilled, IconWritingSign } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';

export default function NewCollectionModal() {
  const [selectPhoto, setSelectPhoto] = useState(false);

  function selectImg(e: any) {
    console.log(e);
    if (selectPhoto === false) {
      setSelectPhoto(true)
    }
    else {
      setSelectPhoto(false)
    }
  }
  return (
    <>
      <div>
        <TextInput
          icon={<IconWritingSign size={15} />}
          type="text"
          label="Koleksiyona İsim Ver" />
      </div>
      <div>
        <div className='text-sm my-4 font-bold'>Fotoğraf Seç</div>
        <div className='h-56 overflow-y-auto'>
          <div className='grid grid-cols-4 gap-3'>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lEfsW4AEDQXc.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lP3mWkAAinKk.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dqn0H6aX0AArwuh.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/DrGjfB2XQAIELri.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lEfsW4AEDQXc.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lP3mWkAAinKk.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dqn0H6aX0AArwuh.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/DrGjfB2XQAIELri.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lEfsW4AEDQXc.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lP3mWkAAinKk.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dqn0H6aX0AArwuh.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/DrGjfB2XQAIELri.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lEfsW4AEDQXc.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dp-lP3mWkAAinKk.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/Dqn0H6aX0AArwuh.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
            <button className="w-full rounded overflow-hidden relative" onClick={(e) => selectImg(e.target)}>
              <Image src={"/postExample/DrGjfB2XQAIELri.jpg"} alt="" width={300} height={300} className="w-full object-cover h-full" />
              <div className={`${selectPhoto === true ? 'bg-343a40 bg-opacity-50 absolute top-0 left-0 w-full h-full flex justify-center items-center' : 'hidden'}`}>
                <IconCircleCheckFilled size={40} className='text-white' />
              </div>
            </button>
          </div>
        </div>
        <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-sm mt-4 max-h-[40px] max-w-[100px] mx-auto min-h-[40px] bg-e15146 pointer-events-none">
            Oluştur
          </button>
      </div>
    </>
  )
}
