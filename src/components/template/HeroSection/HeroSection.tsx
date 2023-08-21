import Image from "next/image"
import React from "react"
import vehicle from "@Images/hero.png"
import styles from "./HeroSection.module.scss"
import Logo from "@/components/atoms/Logo/Logo"

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <Image
        src={vehicle}
        alt="background"
        className={styles.heroimage}
        fill
        objectFit="cover"
      />
      <div className={styles.overlay}>
        <Logo />
        <div className={styles.description}>
          <div className={styles.pink}>
            <p>
              トップクラスの
              <br className={styles.mobileBr} />
              大型重機エキスパート
            </p>
          </div>
          <p>
            <br className={styles.mobileBr} />
            三河エリア随一の総トン数を誇り、 <br />
            多様なクレーンニーズにお応えします
          </p>
        </div>
        <div className={styles.scroll}>
          <div className={styles.text}>scroll</div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
