import Link from "next/link";

interface ShowProfileProps{
  profileShow:any;
}

export default function ShowProfile({profileShow}:ShowProfileProps) {
  return (
    <>
      <div className="fixed w-full h-full left-0 top-0 -z-10" onClick={()=> profileShow(false)}></div>
      <div className='absolute min-h-[100px]   right-0 bg-white mt-[2px] border border-ffbeb9 z-20' style={{ boxShadow: ' rgba(240, 113, 103, 0.4) 5px 5px, rgba(240, 113, 103, 0.3) 10px 10px, rgba(240, 113, 103, 0.2) 15px 15px, rgba(240, 113, 103, 0.1) 20px 20px, rgba(240, 113, 103, 0.05) 25px 25px' }}>
        <ul className='py-4 px-2 w-full'>
          <li className='text-xs w-full mb-1'>
            <Link href={"javascript:;"} className='border-b border-dashed border-b-202124 w-full block text-202124 pb-1'>
              Profilim
            </Link>
          </li>
          <li className='text-xs w-full mb-1'>
            <Link href={"javascript:;"} className='border-b border-dashed border-b-202124 w-full block text-202124 pb-1'>
              Koleksiyonlarım
            </Link>
          </li>
          <li className='text-xs w-full'>
            <Link href={"javascript:;"} className='w-full block text-202124 pb-1'>
              Çıkış Yap
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
