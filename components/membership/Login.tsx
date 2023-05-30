import Link from "next/link";
import { IconLockOpen,  IconUser } from "@tabler/icons-react";
import { TextInput } from '@mantine/core';


export default function Login() {

  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className="mt-2">
          <TextInput
            icon={<IconUser size={15} />}
            type="text"
            label="Kullanıcı Adı:"
            placeholder="Kullanıcı adı ya da mail"
          />
        </div>
        <div className="mt-2">
          <TextInput
            icon={<IconLockOpen size={15} />}
            type="password"
            label="Şifre"
            placeholder='********'
          />
        </div>

        <Link href="/forgot-password" className='ml-auto text-f07167 text-sm border-b border-b-f07167'>
          şifrem neydi yaa
        </Link>
        <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-base max-w-[100px] mx-auto min-h-[40px] bg-e15146 pointer-events-none">Giriş Yap</button>
      </div>
    </>
  )
}
