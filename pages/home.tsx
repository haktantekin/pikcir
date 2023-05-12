import HomeLeft from "@/components/layout/home/HomeLeft";
import Header from "@/components/main/header/Index";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`h-auto pb-10 lg:pb-0`}>
        <div className="container mt-3">
          <div className="grid grid-cols-12 gap-4">
            <HomeLeft />
            <div className="col-span-7">

            </div>
            <div className="col-span-3">
              <div className="bg-white rounded w-full h-auto block col-span-2 border border-f07167">
              <h2>En Üretkenler</h2>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
