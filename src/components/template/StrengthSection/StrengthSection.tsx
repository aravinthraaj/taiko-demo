import React from "react"
import styles from "./StrengthSection.module.scss"
import StrengthCard from "@/components/atoms/StrengthCard/StrengthCard"

const StrengthSection = () => {
  return (
    <div className={styles.strength}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Strength</div>
        <div className={styles.subTitle}>大弘重機の強み</div>
      </div>
      <div className={styles.strengthCardWrapper}>
        <StrengthCard
          number={"01"}
          title={"保有総トン数\n三河No.1"}
          description={
            "三河で最大の油圧移動式クレーンを保有する\nのは私たちです※東京商工リサーチに調べて\nもらいます"
          }
        />
        <StrengthCard
          number={"02"}
          title={"運搬サービスまで\n幅広く対応"}
          description={
            "クレーン車の手配から、現場までの運搬、ク\nレーン作業の請負まで\n一貫して担うことができます。"
          }
        />
        <StrengthCard
          number={"03"}
          title={"新型クレーンの\n積極サービス"}
          description={
            "常に新しい技術や機械を積極的に取り入れ、\n多様な要望に応えられるようにしておりま\nす。"
          }
        />
      </div>
    </div>
  )
}

export default StrengthSection
