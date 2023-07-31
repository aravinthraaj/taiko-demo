import styles from "./page.module.scss"
import vehicleImage from "@Images/vehicle.png"
import HeroSection from "@/components/template/HeroSection/HeroSection"
import StrengthSection from "@/components/template/StrengthSection/StrengthSection"
import HomeSection from "@/components/template/HomeSection/HomeSection"

export default function Home() {
  const vehicleList = [
    {
      imageUrl: vehicleImage,
      weight: "400t",
      model: "タダノ　ATF400G6",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "250t",
      model: "リープヘル　LTM1250NX",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "220t",
      model: "タダノ　ATF220N5",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "160t",
      model: "リープヘル　LTM1160NX",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "100t",
      model: "タダノ　ATF100G4",
      pdfUrl: "https://www.google.com/",
    },
  ]
  return (
    <main className={styles.main}>
      <HeroSection />
      <StrengthSection />
      <HomeSection
        title="サービス内容"
        description="トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        link="/"
      />
      <HomeSection
        direction="alternate"
        title={"会社概要"}
        description={
          "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        }
        link={"/"}
      />
      <HomeSection
        title={"採用情報"}
        description={
          "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        }
        link={"/"}
      />
    </main>
  )
}
