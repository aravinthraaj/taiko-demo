"use client"
import React, { FC, MouseEvent, ReactNode, ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"
import PDF_ICON from "@Icons/pdf.svg"
import RIGHT_ARROW from "@Icons/rightArrow.svg"
import ROUNDED_RIGHT_ARROW from "@Icons/rounded-right-arrow.svg"

import Image from "next/image"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant?: string
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  ...props
}) => {
  if (props.style) {
    throw new Error("The 'styles' prop is not allowed on the Button component.")
  }
  const getSVG = () => {
    return <Image src={PDF_ICON} alt="pdf icon" width={20} height={20} />
  }

  const getVariant = (children: string) => {
    switch (variant) {
      case "secondary":
        return (
          <>
            {children}
            <Image
              src={ROUNDED_RIGHT_ARROW}
              alt="pdf icon"
              width={52}
              height={52}
            />
          </>
        )
      case "default":
        return (
          <>
            <Image src={PDF_ICON} alt="pdf icon" width={20} height={20} />
            {children}
            <Image src={RIGHT_ARROW} alt="pdf icon" width={20} height={20} />
          </>
        )
      default:
        return children
    }
  }

  return (
    <button {...props} className={styles[variant]}>
      {getVariant(children)}
    </button>
  )
}

export default Button
