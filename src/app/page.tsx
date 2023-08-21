"use client"
import styles from "./page.module.scss"
import vehicleImage from "@Images/vehicle.png"
import HeroSection from "@/components/template/HeroSection/HeroSection"
import StrengthSection from "@/components/template/StrengthSection/StrengthSection"
import HomeSection from "@/components/template/HomeSection/HomeSection"
import DesktopHomeSection from "@/components/template/DesktopHomeSection/DesktopHomeSection"
import { isMobile } from "react-device-detect"
import MobileHomeSection from "@/components/template/MobileHomeSection/MobileHomeSection"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <StrengthSection />
      {isMobile ? (
        <>
          <MobileHomeSection
            title={"会社概要"}
            description={
              "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
            }
            link={"/company"}
          />
          <MobileHomeSection
            direction="alternate"
            title={"会社概要"}
            description={
              "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
            }
            link={"/company"}
          />
          <MobileHomeSection
            title={"会社概要"}
            description={
              "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
            }
            link={"/company"}
          />
        </>
      ) : (
        <DesktopHomeSection />
      )}
    </main>
  )
}
