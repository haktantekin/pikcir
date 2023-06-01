import ContentCenter from "@/components/layout/content/ContentCenter";
import ContentLeft from "@/components/layout/content/ContentLeft";
import ContentRight from "@/components/layout/content/ContentRight";
import Footer from "@/components/main/footer/Footer";
import Header from "@/components/main/header/Index";

export default function Lists() {
  return (
    <>
      <Header />
      <main className={`h-auto pb-10 lg:pb-0`}>
        <div className="container lg:mt-3">
          <div className="grid grid-cols-12 gap-4">
            <ContentLeft />
            <ContentCenter type="lists" />
            <ContentRight />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
