import ContentLeft from "@/components/layout/content/ContentLeft";
import ContentRight from "@/components/layout/content/ContentRight";
import ListDetail from "@/components/layout/content/lists/detail/Index";
import Footer from "@/components/main/footer/Footer";
import Header from "@/components/main/header/Index";
import Head from "next/head";

export default function Lists() {
  return (
    <>
      <Head>
        <title>Maaş Yatmıştır - Listeler / Pikcir</title>
        <meta id="meta-description" name="description" content="Kafanın içinde biri var ve sürekli espri yapıyorsa bize katıl. Resmini al gel, koleksiyonlar oluştur, eğlen!" />
      </Head>
      <Header />
      <main className={`h-auto pb-10 lg:pb-0`}>
          <div className="container lg:mt-3">
            <div className="grid grid-cols-12 gap-4">
              <ContentLeft />
              <ListDetail />
              <ContentRight />
            </div>
          </div>
      </main>
      <Footer />
    </>
  )
}
