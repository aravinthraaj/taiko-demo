import React from "react"
import styles from "./ModelList.module.scss"
import Divider from "@/components/atoms/Divider/Divider"
import vehicleImage from "@Images/vehicle.png"
import Card from "@/components/atoms/Card/Card"

const ModelList = () => {
  const vehicleList = [
    {
      imageUrl: vehicleImage,
      weight: "400t",
      model: "タダノ　ATF400G6",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "250t",
      model: "リープヘル　LTM1250NX",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "220t",
      model: "タダノ　ATF220N5",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "160t",
      model: "リープヘル　LTM1160NX",
      pdfUrl: "https://www.google.com/",
    },
    {
      imageUrl: vehicleImage,
      weight: "100t",
      model: "タダノ　ATF100G4",
      pdfUrl: "https://www.google.com/",
    },
  ]
  return (
    <div className={styles.modelListWrapper}>
      <div className={styles.title}>オールテレーンクレーン</div>
      <Divider />
      <div className={styles.modelList}>
        {vehicleList.map((vehicle, index) => (
          <Card data={vehicle} key={index} />
        ))}
      </div>
    </div>
  )
}

export default ModelList
