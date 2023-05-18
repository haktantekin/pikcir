import { useState, useRef } from 'react';
import Image from "next/image";
import { Button, FileButton, UnstyledButton } from '@mantine/core';
import TagsInput from '@/components/layout/content/contentCenter/TagsInput';

export default function NewPost() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };
  return (
    <>
      <div className='container h-auto flex flex-col justify-center items-center'>
        {file && (
          <div className="relative">
            <div className={`${!file ? 'hidden' : 'flex justify-center items-center'} mx-aut absolute h-4 w-4 bg-e15146 text-white rounded-full inline-flex left-2 top-2 justify-center items-center text-base cursor-pointer p-0 mt-0`}>
              <UnstyledButton className="" disabled={!file} onClick={clearFile} classNames={"leading-0"}>
                <span className="text-white relative -top-px">&times;</span>
              </UnstyledButton>
            </div>
            <Image className="max-w-full" width={300} height={200} src={`/${file.name}`} alt="" />
          </div>
        )}
        <div className='flex gap-4'>
          <div className={`${!file ? 'block' : 'hidden'}`}>
            <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white" {...props}>Pikçır Yükle</Button>}
            </FileButton>
          </div>
        </div>
        <div className='flex justify-center items-start flex-col gap-4 w-full max-w-[700px] mt-4'>
          {file && (
            <>
              <label className='text-xs text-e15146'>Pikçır&apos;ı Tag&apos;le:</label>
              <TagsInput />
            </>
          )}
        </div>
      </div>
    </>
  )
}
