"use client"
import React from "react"
import styles from "./HomeSection.module.scss"
import Image from "next/image"
import vehicleImage from "@Images/vehicle.png"
import Button from "@/components/atoms/Button/Button"
import Link from "next/link"
import { isMobile } from "react-device-detect"

interface HomeSectionProps {
  direction?: "regular" | "alternate"
  title: string
  description: string
  link: string
}

const HomeSection = ({
  direction = "regular",
  title,
  description,
  link,
}: HomeSectionProps) => {
  if (!isMobile) {
    return (
      <div className={`${styles.homeSection} ${styles[direction]}`}>
        <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
          <div className={styles.imageWrapper}>
            <Image src={vehicleImage} alt="image" fill />
          </div>
          <div className={styles.details}>
            <div className={styles.text}>{title}</div>
            <p>{description}</p>
            <Link href={link}>
              <Button variant="secondary">詳しくはこちら</Button>
            </Link>
          </div>
        </section>
      </div>
    )
  } else {
    return (
      <div className={`${styles.homeSection} ${styles[direction]}`}>
        <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
          <div className={styles.text}>{title}</div>
          <div className={styles.imageWrapper}>
            <Image src={vehicleImage} alt="image" fill />
          </div>
          <div className={styles.details}>
            <p>{description}</p>
            <Link href={link}>
              <Button variant="secondary">詳しくはこちら</Button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeSection
