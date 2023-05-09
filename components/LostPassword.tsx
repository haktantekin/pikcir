export default function LostPassword() {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-sm text-003049'>E mailin:</label>
          <input className='border-e5e5e5 border px-4 h-10 rounded mt-2 placeholder:text-003049 text-003049 text-sm' type="text" placeholder='link yollayacağım' />
        </div>
        <button className='font-bold text-base text-003049 border border-003049 rounded py-2 px-10 mx-auto hover:bg-003049 hover:text-white' style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>TAZELE!</button>
      </div>
    </>
  )
}
