import RecruitSection from "@/components/template/RecruitSection/RecruitSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./recruit.module.scss"
import Button from "@/components/atoms/Button/Button"

const page = () => {
  return (
    <div className={styles.recruitPage}>
      <SubHeroSection
        title={"Recruit"}
        subtitle={"採用情報"}
        description={"大事にする（お客・社員・機械・車両・道具）"}
      />
      <RecruitSection
        description={
          "ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。"
        }
      />
      <RecruitSection
        direction="alternate"
        description={
          "ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。"
        }
      />
      <RecruitSection
        description={
          "ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。"
        }
      />
      <div className={styles.careersPage}>
        <Button variant="default">リクルートページへ</Button>
      </div>
    </div>
  )
}

export default page
