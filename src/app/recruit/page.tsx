import RecruitSection from "@/components/template/RecruitSection/RecruitSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./recruit.module.scss"
import Button from "@/components/atoms/Button/Button"
import recruitImage from "@Images/recruitment_information.jpg"
import recruitImage1 from "@Images/recruitment_information_1.jpg"
import recruitImage2 from "@Images/recruitment_information_2.jpg"

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
            "入社数年の同世代、仕事は真剣に取り組み、同じ悩みや喜びを共に感じつつ成長していきます。そして、ひとたび休息となればひとつのヤードで顔の見える仲間とともに、笑顔が絶えず賑やかです。"
          }
          image={recruitImage}
        />
        <RecruitSection
          direction="alternate"
          description={
            "親子以上に年の離れた先輩も、同じオペレータとしてフラットに接してくれます。「あの現場はどうだった」「こういう場合は、こうすると上手くいくだぞ」など、お互いの技術や経験を吸収しあいながら切磋琢磨していきます。"
          }
          image={recruitImage1}
        />
        <RecruitSection
          description={
            "お客様からの依頼を受け付ける配車センターも、クレーンのヤードも一体となってます。\n そのため、現場サイドの状況や要望、車両トラブルなどもその場で確認して、即座に解決に向け動き出すことが出来ます。"
          }
          image={recruitImage2}
        />
      </div>
      <div className={styles.careersPage}>
        <Button variant="recruit">リクルートページへ</Button>
      </div>
    </div>
  )
}

export default page
