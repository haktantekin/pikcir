
export default function ReportModal() {
  return (
    <>
      <div>
        <div className="flex flex-col">
          <label className="text-sm">Link:</label>
          <input type="text" value={"pikcir.com/natkah/21122231"} className="border-b text-sm p-2" disabled={true} />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-sm">Rahatsızlık Sebebi:</label>
          <textarea className="border p-2 text-sm mt-2" placeholder="Bir bahane uydurun"></textarea>
        </div>
        <button className={`w-full h-full flex text-center justify-center items-center rounded font-bold text-white text-base max-w-[200px] mx-auto min-h-[40px] bg-003049 mt-4`} >İncelemeye Gönder</button>
      </div>
    </>
  )
}
