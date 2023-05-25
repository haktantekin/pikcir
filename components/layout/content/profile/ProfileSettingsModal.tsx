import { IconAlignJustified, IconAt, IconCake, IconDeviceMobile, IconLockOpen, IconMail, IconPhotoEdit, IconUser } from "@tabler/icons-react";
import { FileButton, TextInput, Textarea } from '@mantine/core';
import { useState, useRef } from 'react';
import Image from "next/image";
import { DatePickerInput } from '@mantine/dates';

export default function ProfileSettingsModal() {
  const [file, setFile] = useState<File | null>(null);
  const resetRef = useRef<() => void>(null);

  const clearFile = () => {
    setFile(null);
    resetRef.current?.();
  };
  return (
    <>
      <div className="w-full bg-cover min-h-[200px] bg-center bg-no-repeat mb-4 flex justify-center items-center relative before:w-full before:h-full before:absolute before:top-0 before-left-0 before:bg-opacity-50 before:bg-black z-0 rounded-tr rounded-tl overflow-hidden" style={{ backgroundImage: 'url(coverExample.jpg)' }}>
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <button className="bg-white relative z-1 text-ffbeb9 rounded-full p-4" {...props}><IconPhotoEdit color="#f07167" /></button>}
        </FileButton>
      </div>
      <div className="relative w-28 -mt-16 left-1/2 -translate-x-1/2">
        <FileButton resetRef={resetRef} onChange={setFile} accept="image/png,image/jpeg">
          {(props) => <button {...props} className="w-full h-full rounded-full overflow-hidden border-2 border-white">
            <Image alt="" width={300} height={300} src="/profile.jpg" className="w-full h-full" />
            <IconPhotoEdit className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-1 rounded-full p-2 text-f07167" size={40} color="#f07167" /></button>}
        </FileButton>
      </div>
      <div className="mt-0">
        <Textarea
          icon={<IconAlignJustified size={15} />}
          maxLength={80}
          label="Profil Yazısı"
          defaultValue={"Sana mutluluğun resmini çizemem, ama komik caps paylaşabilirim."}
        />
      </div>
      <div className="mt-2">
        <TextInput
          icon={<IconUser size={15} />}
          type="text"
          label="İsim"
          defaultValue={"Haktan"}
        />
      </div>
      <div className="mt-2">
        <TextInput
          icon={<IconAt size={15} />}
          type="text"
          label="Kullanıcı Adı"
          defaultValue={"haktan"}
        />
      </div>
      <div className="mt-2">
        <TextInput
          icon={<IconMail size={15} />}
          type="text"
          label="E-Posta"
          defaultValue={"info@haktantekin.com"}
        />
      </div>
      <div className="mt-2">
        <TextInput
          icon={<IconLockOpen size={15} />}
          type="password"
          label="Şifre"
          defaultValue={"123456"}
        />
      </div>
      <div className="mt-2">
        <TextInput
          icon={<IconDeviceMobile size={15} />}
          type="phone"
          label="Telefon"
          defaultValue={"123456"}
        />
      </div>
      <div className="mt-2">
        <DatePickerInput
          icon={<IconCake size={15} />}
          clearable
          defaultValue={new Date("05/10/1993")}
          label="Pick date"
          placeholder="Pick date"
          mx="auto"
          maw={400}
          lang="tr"
        />
      </div>
      <div className="mt-2">
        <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-base max-w-[100px] mx-auto min-h-[40px] bg-e15146 pointer-events-none">Güncelle</button>
      </div>
    </>
  )
}
