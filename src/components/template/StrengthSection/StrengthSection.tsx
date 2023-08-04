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
            "赤枠部分を変更したので、\n 反映お願いします。"
          }
        />
        <StrengthCard
          number={"02"}
          title={"運搬サービスまで\n幅広く対応"}
          description={
            "赤枠部分を変更したので、\n 反映お願いします。"
          }
        />
        <StrengthCard
          number={"03"}
          title={"新型クレーンの\n積極サービス"}
          description={
            "赤枠部分を変更したので、\n 反映お願いします。"
          }
        />
      </div>
    </div>
  )
}

export default StrengthSection
