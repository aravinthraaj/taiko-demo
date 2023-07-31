import React from "react"
import styles from "./Header.module.scss"
import Logo from "../Logo/Logo"
import Link from "next/link"

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo variant="header" />
        <nav>
          <Link href={"/"}>ホーム</Link>
          <Link href={"/"}>サービス内容</Link>
          <Link href={"/"}>会社概要</Link>
          <Link href={"/"}>採用情報</Link>
        </nav>
        <div></div>
      </header>
    </div>
  )
}

export default Header
