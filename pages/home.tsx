import HomeLeft from "@/components/layout/content/HomeLeft";
import HomeRight from "@/components/layout/content/HomeRight";
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
            <HomeRight />
          </div>
        </div>
      </main>
    </>
  )
}
