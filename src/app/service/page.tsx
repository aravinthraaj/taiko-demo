import ServiceSection from "@/components/template/ServiceSection/ServiceSection"
import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import serviceImage from "@Images/service.webp"

const page = () => {
  return (
    <div>
      <SubHeroSection
        title="Service"
        subtitle="サービス内容"
        description={
          "最適なクレーンで、安全・確実に大切な荷物 \n を吊り上げます"
        }
        imageUrl={serviceImage}
      />
      <ServiceSection />
    </div>
  )
}

export default page
