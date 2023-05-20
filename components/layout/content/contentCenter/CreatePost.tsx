
import { useState, useRef } from 'react';
import Image from "next/image";
import { Button, FileButton, UnstyledButton } from '@mantine/core';
import TagsInput from './TagsInput';

export default function CreatePost() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };
  return (
    <>
      <div className='flex flex-col mb-4'>
        {file && (
          <div className="mx-auto w-full relative">
            <div className={`${!file ? 'hidden' : 'flex justify-center items-center'} mx-aut absolute h-4 w-4 bg-e15146 text-white rounded-full inline-flex left-2 top-2 justify-center items-center text-base cursor-pointer p-0 mt-0`}>
              <UnstyledButton className="" disabled={!file} onClick={clearFile} classNames={"leading-0"}>
                <span className="text-white relative -top-px">&times;</span>
              </UnstyledButton>
            </div>
            <Image className="max-w-full w-full" width={300} height={200} src={`/${file.name}`} alt="" />
          </div>
        )}
        <div className='flex gap-4 w-full'>
          <div className={`${!file ? 'block' : 'hidden'} w-full`}>
            <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
              {(props) => <Button className="border border-e15146 text-e15146 hover:bg-e15146 hover:text-white w-full bg-white" style={{ boxShadow:'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px' }} {...props}>İçerik Gönder</Button>}
            </FileButton>
          </div>
        </div>
        {file && (
          <>
            <div className='flex justify-center items-center flex-col gap-4 w-full  mt-4'>
              <TagsInput />
            </div>
          </>
        )}
      </div>

    </>
  )
}
