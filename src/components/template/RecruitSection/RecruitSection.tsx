import React from "react"
import styles from "./RecruitSection.module.scss"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import vehicleImage from "@Images/vehicle.png"

interface RecruitSectionProps {
  direction?: "regular" | "alternate"
  description: string
  image: string | StaticImport
}
const RecruitSection = ({
  direction = "regular",
  description,
  image
}: RecruitSectionProps) => {
  return (
    <div className={`${styles.recruitSection}`}>
      <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="image" fill />
        </div>
        <div className={styles.details}>
          <p>{description}</p>
        </div>
      </section>
    </div>
  )
}

export default RecruitSection
