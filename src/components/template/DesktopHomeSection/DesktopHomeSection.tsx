import React from "react"
import HomeSection from "../HomeSection/HomeSection"
import styles from "./DesktopHomeSection.module.scss"
import serviceImage from "@Images/service.png"
import companyImage from "@Images/company.png"
import recruitImage from "@Images/recruit.png"

const DesktopHomeSection = () => {
  return (
    <div className={styles.homeSectionWrapper}>
      <HomeSection
        title="サービス内容"
        description="トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        link="/service"
        imageUrl={serviceImage}
      />
      <HomeSection
        direction="alternate"
        title={"会社概要"}
        description={
          "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        }
        link={"/company"}
        imageUrl={companyImage}
      />
      <HomeSection
        title={"採用情報"}
        description={
          "トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。トップクラスのクレーンを手配・運搬・作業まで一貫して行います。"
        }
        link={"/recruit"}
        imageUrl={recruitImage}
      />
    </div>
  )
}

export default DesktopHomeSection
