import { useState, useRef } from 'react';
import Image from "next/image";
import { Button, FileButton } from '@mantine/core';
import Header from '@/components/main/header/Index';
import TagsInput from '@/components/TagsInput';

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
        <div className='font-bold text-xl text-202124 mb-4'>EĞLENDİR BİZİ</div>
        {file && (
          <div className="">
            <Image className="max-w-full" width={300} height={200} src={`/${file.name}`} alt="" />
          </div>
        )}
        <div className='flex gap-4'>
          <div className={`${!file ? 'block' : 'hidden'}`}>
            <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white" {...props}>Resim Yükle</Button>}
            </FileButton>
          </div>
          <div className={`${!file ? 'hidden' : 'block'}`}>
            <Button className="bg-f5f3f4 text-202124" disabled={!file} onClick={clearFile}>
              Yenile
            </Button>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col gap-4 w-full max-w-[700px] mt-4'>
          {file && (
            <>
              <label className='text-lg text-e15146'>Pikçır&apos;ı Tag&apos;le:</label>
              <TagsInput />
            </>
          )}
        </div>
      </main>
    </>
  )
}
