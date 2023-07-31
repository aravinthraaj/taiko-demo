import React from "react"
import styles from "./RecruitSection.module.scss"
import Image from "next/image"
import vehicleImage from "@Images/vehicle.png"

interface RecruitSectionProps {
  direction?: "regular" | "alternate"
  description: string
}
const RecruitSection = ({
  direction = "regular",
  description,
}: RecruitSectionProps) => {
  return (
    <div className={`${styles.recruitSection}`}>
      <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
        <div className={styles.imageWrapper}>
          <Image src={vehicleImage} alt="image" fill />
        </div>
        <div className={styles.details}>
          <p>{description}</p>
        </div>
      </section>
    </div>
  )
}

export default RecruitSection
