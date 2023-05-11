import { useState, useRef } from 'react';
import Image from "next/image";
import { Button, FileButton, Group, UnstyledButton } from '@mantine/core';
import Header from '@/components/main/header/Index';

export default function NewPost() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };
  return (
    <>
      <Header />
      <main className='container h-auto lg:h-[calc(100vh-48px)] flex flex-col justify-center items-center'>
        <div className='font-bold text-xl text-202124'>EĞLENDİR BİZİ</div>
        <div className='w-full max-w-[700px] bg-e5e5e5 p-4 mt-4'>
          <p className='text-left'>
            İlgili pikcır hangi kategorilerde gösterilsin?
          </p>
          <div className='grid grid-cols-5 gap-2 mt-2'>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#serbest</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#spor</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#ilişki</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#eğitim</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#siyasi</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#yetişkin</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#troll</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#tweet</button>
            <button className='font-bold text-202124 px-4 rounded hover:bg-e15146 hover:text-white'>#karikatür</button>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-4 w-full max-w-[700px] mt-4'>
          <div className='flex flex-col w-full'>
            <label className='text-sm text-003049'>Başlık:</label>
            <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="text" placeholder='Pikçır&apos;ı açıklayan bir yazı gir' />
          </div>
          {file && (
            <div className="">
              <Image className="max-w-full" width={300} height={200} src={`/${file.name}`} alt="" />
            </div>
          )}
          <div className='flex gap-4'>
            <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white" {...props}>Resim Yükle</Button>}
            </FileButton>
            <Button className="bg-f5f3f4 text-202124" disabled={!file} onClick={clearFile}>
              Sıfırla
            </Button>
          </div>
          <div>
            <UnstyledButton className="bg-e15146 w-24 flex text-center justify-center items-center h-9 rounded font-bold text-white text-base">Yollaa!</UnstyledButton>
          </div>
        </div></main>
    </>
  )
}
