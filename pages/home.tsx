import ContentCenter from "@/components/layout/content/ContentCenter";
import ContentLeft from "@/components/layout/content/ContentLeft";
import ContentRight from "@/components/layout/content/ContentRight";
import Header from "@/components/main/header/Index";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`h-auto pb-10 lg:pb-0`}>
        <div className="container mt-3">
          <div className="grid grid-cols-12 gap-4">
            <ContentLeft />
            <ContentCenter type="home" />
            <ContentRight />
          </div>
        </div>
      </main>
    </>
  )
}
