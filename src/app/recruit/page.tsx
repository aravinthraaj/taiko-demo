import RecruitSection from "@/components/template/RecruitSection/RecruitSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./recruit.module.scss"
import Button from "@/components/atoms/Button/Button"
import recruitImage from "@Images/recruit.png"


const page = () => {
  return (
    <div className={styles.recruitPage}>
      <SubHeroSection
        title={"Recruit"}
        subtitle={"採用情報"}
        description={"大事にする \n（お客・社員・機械・車両・道具）"}
        imageUrl={recruitImage}
      />
      <div className={styles.recruitSectionWrapper}>
        <RecruitSection
          description={
            "ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。ひとつのヤードで、顔の見える仲間とともに。"
          }
        />
        <RecruitSection
          direction="alternate"
          description={
            "同じオペレータとして、先輩も後輩もフラットに、お互いの技術を吸収しあいます。同じオペレータとして、先輩も後輩もフラットに、お互いの技術を吸収しあいます。同じオペレータとして、先輩も後輩もフラットに、お互いの技術を吸収しあいます。"
          }
        />
        <RecruitSection
          description={
            "ちなみに、クレーン操作は空調完備のオペ室で快適です。ちなみに、クレーン操作は空調完備のオペ室で快適です。ちなみに、クレーン操作は空調完備のオペ室で快適です。ちなみに、クレーン操作は空調完備のオペ室で快適です。"
          }
        />
      </div>
      <div className={styles.careersPage}>
        <Button variant="default">リクルートページへ</Button>
      </div>
    </div>
  )
}

export default page
