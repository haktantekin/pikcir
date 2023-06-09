import ContentCenter from "@/components/layout/content/ContentCenter";
import ContentLeft from "@/components/layout/content/ContentLeft";
import ContentRight from "@/components/layout/content/ContentRight";
import PostContent from "@/components/layout/content/post/Index";
import Footer from "@/components/main/footer/Footer";
import Header from "@/components/main/header/Index";
import Head from "next/head";

export default function Profile() {
  return (
    <>
      <Head>
        <title>PIKCIR - kafamda deli düşünceler</title>
        <meta id="meta-description" name="description" content="Kafanın içinde biri var ve sürekli espri yapıyorsa bize katıl. Resmini al gel, koleksiyonlar oluştur, eğlen!" />
      </Head>
      <Header />
      <main className={`h-auto pb-10 lg:pb-0`}>
        <div className="container lg:mt-3">
          <div className="grid grid-cols-12 gap-4">
            <ContentLeft />
            <PostContent />
            <ContentRight />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
