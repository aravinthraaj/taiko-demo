import SubHeroSection from "@/components/template/SubHeroSection/SubHeroSection"
import React from "react"
import styles from "./company.module.scss"
import Image from "next/image"
import PlaceholderImage from "@Images/placeholder.png"

const page = () => {
  return (
    <div className={styles.companyPage}>
      <SubHeroSection
        title={"Company"}
        subtitle={"会社について"}
        description={"大事にする（お客・社員・機械・車両・道具）"}
      />
      <div className={styles.companyProfile}>
        <div className={styles.companyDetails}>
          <div className={styles.title}>会社概要</div>
          <ul>
            <li>
              <span>社名</span> <p>株式会社　大弘重機</p>
            </li>
            <li>
              <span>住所</span>
              <p>
                【本社】
                〒444-0701　愛知県西尾市東幡豆町田中46-1【吉良配車センター】
                〒444-0501　愛知県西尾市吉良町駮馬東城66-1
              </p>
            </li>

            <li>
              <span>TEL・FAX</span>{" "}
              <p>
                【本社】
                TEL　0563-62-3240　　FAX　0563-62-5508【吉良配車センター】
                TEL　0563-35-3800　　FAX　0563-35-3208
              </p>
            </li>
            <li>
              <span>事業内容</span>{" "}
              <p>
                移動式クレーンによるクレーン作業請負、 その他関連付随する業務
              </p>
            </li>
            <li>
              <span>保有機械</span>
              <p>
                ラフタークレーン
                13ｔ～65ｔ、70ｔ、100ｔ＜GR1000N＞オールテレーンクレーン
                100ｔ160ｔ＜非分解＞～400ｔ＜ATF400G6＞クレーン組付・解体専用リフター＜KL6000＞スカイボックス＜SS-150＞（稼働式ゴンドラ）敷鉄板リース　など
              </p>
            </li>
            <li>
              <span>代表者</span>
              <p>大嶽　公寿</p>
            </li>
            <li>
              <span>従業員数</span>
              <p>15名（グループ会社含め　29名）</p>
            </li>
            <li>
              <span>事業許可</span>
              <p>とび・土工工事業愛知県知事許可（般－28）第54073号</p>
            </li>
            <li>
              <span>所属団体</span>
              <p>
                全国クレーン建設業協会　愛知支部西三河クレーン組合西尾法人会
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.message}>
        <div className={styles.title}>代表挨拶</div>
        <div className={styles.imageWrapper}>
          <Image src={PlaceholderImage} alt="owner" fill />
        </div>
        <div className={styles.name}>大嶽　公寿</div>
        <div className={styles.description}>
          「ありがとう！うまくいったよ」と笑顔で感謝される、自分の仕事が役に立ってる充実感毎日の何気ない仕事が、生きる支えとなり、ちょっぴり誇らしげに感じられるお取引先にも、社員にも、喜んでもらえるそんな会社でありたいと思ってます
        </div>
      </div>
    </div>
  )
}

export default page
