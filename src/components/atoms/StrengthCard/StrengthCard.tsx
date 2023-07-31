"use client"
import Image from "next/image"
import React from "react"
import styles from "./StrengthCard.module.scss"
import vehicle from "@Images/vehicle.png"
import { isMobile } from "react-device-detect"

interface StrengthCardProps {
  number: string
  title: string
  description: string
}

const StrengthCard = ({ number, title, description }: StrengthCardProps) => {
  return (
    <div className={styles.strengthCard}>
      <Image src={vehicle} alt="strength image" fill objectFit="cover" />
      <div className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          {!isMobile && <div className={styles.number}>{number}</div>}
          <pre className={styles.title}>{title}</pre>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </div>
  )
}

export default StrengthCard
