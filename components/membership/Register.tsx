import { useState } from 'react';
import { IconAlignJustified, IconAt, IconCake, IconDeviceMobile, IconLockOpen, IconMail, IconUser } from "@tabler/icons-react";
import { TextInput} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState('');
  function handlePhoneNumberChange(event: any) {
    let inputVal = event.target.value;
    // Girdi sadece sayı içermeli
    inputVal = inputVal.replace(/\D/g, '');
    // Telefon numarası formatına uygun hale getirilir
    if (inputVal.length > 0) {
      inputVal = inputVal.match(/(\d{1,3})(\d{1,3})?(\d{1,2})?(\d{1,2})?/);
      inputVal = `(${inputVal[1]}) ${inputVal[2] || ''}-${inputVal[3] || ''}-${inputVal[4] || ''}`;
    }
    setPhoneNumber(inputVal);
  }
  return (
    <>
      <div className='flex flex-col gap-2'>
        <div className="mt-2">
          <TextInput
            icon={<IconUser size={15} />}
            type="text"
            label="Kullanıcı Adı:"
            placeholder="Kullanıcı adı"
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
        <div className="mt-2">
          <TextInput
            icon={<IconMail size={15} />}
            type="text"
            label="E-Posta"
            placeholder='Mail adresi'
          />
        </div>
        <div className="mt-2">
        <TextInput
          icon={<IconDeviceMobile size={15} />}
          type="phone"
          label="Telefon"
          value={phoneNumber} onChange={handlePhoneNumberChange} placeholder='Başında 0 olmadan'
        />
      </div>
      <div className="mt-2">
        <DatePickerInput
          icon={<IconCake size={15} />}
          clearable
          label="Doğum Tarihi"
          placeholder="Doğum Tarihi"
          lang="tr"
        />
      </div>
      <button className="w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-base max-w-[100px] mx-auto min-h-[40px] bg-BF4565 pointer-events-none mt-3">Kayıt Ol</button>
      </div>
    </>
  )
}
