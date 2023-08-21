"use client"
import Image from "next/image"
import React from "react"
import styles from "./StrengthCard.module.scss"
import vehicle from "@Images/vehicle.png"
import { isMobile } from "react-device-detect"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface StrengthCardProps {
  number: string
  title: string
  description: string
  image: string | StaticImport
}

const StrengthCard = ({
  number,
  title,
  description,
  image,
}: StrengthCardProps) => {
  return (
    <div className={styles.strengthCard}>
      <Image src={image} alt="strength image" fill objectFit="cover" />
      <div className={styles.overlayWrapper}>
        <div className={styles.overlay}>
          {!isMobile && <div className={styles.number}>{number}</div>}
          <pre className={styles.title}>{title}</pre>
          <pre className={styles.description}>{description}</pre>
        </div>
      </div>
    </div>
  )
}

export default StrengthCard
