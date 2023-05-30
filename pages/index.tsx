import Membership from '@/components/membership/Index'
import Image from 'next/image'

export default function Login() {
  return (
    <main className={`h-auto lg:h-screen pb-10 lg:pb-0`}>
      <h1 className='font-black text-3xl lg:text-2xl text-f07167 lg:text-white relative lg:absolute lg:left-5 pl-5 lg:pl-0 flex gap-2 items-center lg:top-3'>
        <Image src="/logo.png" alt="Pickup" width={60} height={48} className="w-[60px] h-[72px] mx-auto" priority></Image>

        PIKCIR!</h1>
      <p className='mt-4 font-regular text-sm text-left text-202124 block lg:hidden px-5'>
        Dur tahmin edeyim;<br />
        Beyninin içinde biri var ve sürekli şaka yapıyor değil mi?<br /><br />
        Resim arşivlerini, Whatsapp avatarlarını telefonunda tutma.<br />
        Başlıklara caps&apos;lerini gönder, Kendi koleksiyonlarını oluştur!<br /><br />
        <strong>Pikcır</strong>&apos;ın eğlenceli dünyasına katıl.<br />Hemen sen de, <strong>PİK</strong>&apos;le!
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center lg:h-screen'>
        <div className='h-full py-20 bg-f07167 hidden lg:block'>
          <div className='flex justify-center items-center flex-col h-full relative'>
            <p className='mt-4 font-regular max-w-[50%] text-center text-eeedfd'>
              Dur tahmin edeyim;<br />
              Beyninin içinde biri var ve sürekli şaka yapıyor değil mi?<br /><br />
              Resim arşivlerini, Whatsapp avatarlarını telefonunda tutma.<br />
              Başlıklara caps&apos;lerini gönder, Kendi koleksiyonlarını oluştur!<br /><br />
              <strong>Pikcır</strong>&apos;ın eğlenceli dünyasına katıl.<br />Hemen sen de, <strong>PİK</strong>&apos;le!
            </p>
          </div>
        </div>
        <div className='text-left flex flex-col lg:justify-center px-5 lg:px-0 mt-5 lg:mt-10'>
          <div className='w-full lg:w-[50%] mx-auto'>
            <h1 className='font-black text-xl lg:text-3xl text-202124 w-full'>
              Hesabı Alabilir Miyim?
            </h1>
            <p className='text-sm lg:text-lg'>3 dakikada üye ol, eşsiz dünyaya katıl!</p>
            <div className='w-full mt-4 lg:mt-10'>
              <Membership />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
