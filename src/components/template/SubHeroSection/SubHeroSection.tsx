import Image from "next/image"
import React from "react"
import vehicle from "@Images/vehicle.png"
import styles from "./SubHeroSection.module.scss"
import Divider from "@/components/atoms/Divider/Divider"

interface SubHeroSectionProps {
  title: string
  subtitle: string
  description: string
}

const SubHeroSection = ({
  title,
  subtitle,
  description,
}: SubHeroSectionProps) => {
  return (
    <div className={styles.subHeroSection}>
      <Image
        src={vehicle}
        alt="background"
        className={styles.heroimage}
        fill
        objectFit="cover"
      />
      <div className={styles.overlay}>
        <div className={styles.overlayContainer}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subTitle}>{subtitle}</div>
          </div>
          <Divider variant="pink" />
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default SubHeroSection
