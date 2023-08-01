import React from "react"
import styles from "./MobileHomeSection.module.scss"
import Image from "next/image"
import vehicleImage from "@Images/vehicle.png"

import Button from "@/components/atoms/Button/Button"
import Link from "next/link"

interface HomeSectionProps {
  direction?: "regular" | "alternate"
  title: string
  description: string
  link: string
}

const MobileHomeSection = ({
  direction = "regular",
  title,
  description,
  link,
}: HomeSectionProps) => {
  return (
    <div className={`${styles.homeSection} ${styles[direction]}`}>
      <section className={`${styles.detailsWrapper} ${styles[direction]}`}>
        <div className={styles.textWrapper}>
          <div className={styles.text}>{title}</div>
        </div>
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

export default MobileHomeSection