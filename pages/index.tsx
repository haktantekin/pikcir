import Membership from '@/components/Membership'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={`h-screen`}>
      <h1 className='font-black text-7xl text-white absolute top-10 left-10'>PIKCIR!</h1>
      <div className='grid grid-cols-2 items-center h-screen'>
        <div className='  h-full py-20 bg-f07167'>
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
        <div className='h-full text-left flex flex-col justify-center'>
          <div className='w-[50%] mx-auto'>
            <h1 className='font-black text-3xl text-202124 w-full'>
              Hesabı Alabilir Miyim?
            </h1>
            <p className='text-lg'>3 dakikada üye ol, eşsiz dünyaya katıl!</p>
            <div className='w-full mt-10'>
              <Membership />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
