"use client";

import {
  accessDd,
  accessDl,
  accessDt,
  accessGap,
  accessItemBox,
  accessSection,
  catchCopy,
  catchCopyBr,
  catchMacaronsBox,
  copyRight,
  copyRightBox,
  cvButtonBox,
  cvButtonWrap,
  desktopNav,
  desktopNavLink,
  desktopNavOnlineShop,
  desktopNavUl,
  footer,
  footerLink,
  footerLogo,
  footerUl,
  hamburger,
  hamburgerBox,
  header,
  heroDescription,
  heroDescriptionDesktopBr,
  heroSection,
  heroSectionInnerLeft,
  logo,
  logoBox,
  macarons,
  macaronsBox,
  mainVisual,
  mainVisualBox,
  mobileHeader,
  mobileNavLink,
  mobileNavLinksHidden,
  mobileNavLinksVisible,
  newsItem,
  newsItemBox,
  newsLink,
  newsSection,
  newsText,
  onlineShop,
  onlineShopDescription,
  onlineShopImage,
  onlineShopImageBox,
  onlineShopItemBox,
  onlineShopSection,
  pickupDecoration,
  pickUpSection,
  pickUpSectionBg,
  recommendedProductBox,
  recommendedProductDescription,
  recommendedProductImage,
  recommendedProductImageBox,
  recommendedProductName,
  recommendedProductNameBox,
  shopImage,
  shopName,
  time,
  toggle,
  topicDescription,
  topicImage,
  topicSection,
  topicSectionItem,
  topicSectionItemBox,
  topicTitle,
} from "@/app/page.css";
import { hamburgerMenuAtom } from "@/atoms/hamburgerMenuAtom";
import CvButton from "@/components/cvButton.tsx/cvButton";
import MoreButton from "@/components/moreButton/moreButton";
import {
  sectionTitle,
  sectionTitleBox,
  subTitle,
  subTitleBox,
} from "@/styles/styles.css";
import clsx from "clsx";
import { useAtom } from "jotai";
import { Marcellus, Sacramento } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [isOpen, setIsOpen] = useAtom(hamburgerMenuAtom);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  return (
    <>
      <header className={clsx(header)}>
        <div className={clsx(mobileHeader)}>
          <Link href={"#"} className={clsx(logoBox)}>
            <h1 className={clsx(sacramento.className, logo)}>Fleur</h1>
          </Link>
          <button className={clsx(hamburgerBox)} onClick={handleClick}>
            <span className={clsx(hamburger, isOpen && toggle)}></span>
            <span className={clsx(hamburger, isOpen && toggle)}></span>
            <span className={clsx(hamburger, isOpen && toggle)}></span>
          </button>
          <nav className={clsx(desktopNav)}>
            <ul className={clsx(desktopNavUl)}>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  美味しさへのこだわり
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  ブランド
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  ギフト
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  ニュース
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  ラインナップ
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavLink)}>
                  店舗情報
                </Link>
              </li>
              <li>
                <Link href={"#"} className={clsx(desktopNavOnlineShop)}>
                  オンラインショップ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <ul
            className={clsx(
              isOpen ? mobileNavLinksVisible : mobileNavLinksHidden
            )}
          >
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                美味しさへのこだわり
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                ブランド
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                ギフト
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                ニュース
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                ラインナップ
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(mobileNavLink)}>
                店舗情報
              </Link>
            </li>
            <li className={clsx(cvButtonBox)}>
              <CvButton />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className={clsx(heroSection)}>
          <div className={clsx(heroSectionInnerLeft)}>
            <div className={clsx(catchMacaronsBox)}>
              <h2 className={clsx(catchCopy)}>
                一口で広がる、
                <br className={clsx(catchCopyBr)} />
                贅沢な味わい。
              </h2>
              <div className={clsx(macaronsBox)}>
                <Image
                  src={"/macarons.webp"}
                  width={640}
                  height={320}
                  alt="カラフルなマカロン"
                  className={clsx(macarons)}
                  priority
                />
              </div>
            </div>
            <p className={clsx(heroDescription)}>
              厳選された素材と職人の技が奏でる、特別な一口。
              <br className={clsx(heroDescriptionDesktopBr)} />
              毎日を彩る、贅沢なひとときをお楽しみください。
            </p>
          </div>
          <div className={clsx(mainVisualBox)}>
            <Image
              src={"/main-visual.webp"}
              width={1600}
              height={1600}
              alt="マカロン専門店フルールの店構え"
              className={clsx(mainVisual)}
              priority
            />
          </div>
        </section>
        <section className={clsx(pickUpSection)}>
          <div className={clsx(sectionTitleBox)}>
            <h2 className={clsx(marcellus.className, sectionTitle)}>Pick up</h2>
          </div>
          <div className={clsx(subTitleBox)}>
            <p className={clsx(subTitle)}>おすすめ商品</p>
          </div>
          <div className={clsx(pickUpSectionBg)}>
            <div className={clsx(recommendedProductBox)}>
              <div className={clsx(recommendedProductNameBox)}>
                <h3 className={clsx(recommendedProductName)}>
                  低糖質・グルテンフリーマカロン
                </h3>
                <p className={clsx(recommendedProductDescription)}>
                  植物由来の素材を使用し、グルテンを一切含まない配合で焼き上げました。からだにやさしいグルテンフリーマカロンです。
                </p>
              </div>
              <div className={clsx(recommendedProductImageBox)}>
                <Image
                  src={"/recommended-product.webp"}
                  width={540}
                  height={300}
                  alt="低糖質・グルテンフリーマカロン"
                  className={clsx(recommendedProductImage)}
                />
                <Image
                  src={"/pickup-decoration.png"}
                  width={100}
                  height={150}
                  alt="フルールの由来の花"
                  className={clsx(pickupDecoration)}
                />
              </div>
            </div>
            <div className={clsx(cvButtonWrap)}>
              <CvButton />
            </div>
          </div>
        </section>
        <section className={clsx(topicSection)}>
          <div className={clsx(sectionTitleBox)}>
            <h2 className={clsx(marcellus.className, sectionTitle)}>Topic</h2>
          </div>
          <div className={clsx(subTitleBox)}>
            <p className={clsx(subTitle)}>美味しさへのこだわり</p>
          </div>
          <div className={clsx(topicSectionItemBox)}>
            <section className={clsx(topicSectionItem)}>
              <div>
                <h3 className={clsx(topicTitle)}>素材へのこだわり</h3>
                <p className={clsx(topicDescription)}>
                  安心してお召し上がりいただけるよう、素材選びから製造過程まで細心の注意を払っています。
                  自然由来の色素で美しく仕上げた、からだに優しい逸品です。
                </p>
                <MoreButton />
              </div>
              <Image
                src={"/ingredient.webp"}
                width={560}
                height={346}
                alt="素材へのこだわり"
                className={clsx(topicImage)}
              />
            </section>
            <section className={clsx(topicSectionItem)}>
              <div>
                <h3 className={clsx(topicTitle)}>ブランドストーリー</h3>
                <p className={clsx(topicDescription)}>
                  創業以来、最高品質の素材を用い、職人の技術と情熱を注ぎ込んだマカロンをお届けしています。
                  美味しさと美しさを追求し続けることで、これからも皆様の特別なひとときを彩り続けます。
                </p>
                <MoreButton />
              </div>
              <Image
                src={"/brand.webp"}
                width={560}
                height={346}
                alt="ブランドストーリー"
                className={clsx(topicImage)}
              />
            </section>
            <section className={clsx(topicSectionItem)}>
              <div>
                <h3 className={clsx(topicTitle)}>
                  さまざまなギフトシーンにぴったり
                </h3>
                <p className={clsx(topicDescription)}>
                  バレンタインやホワイトデー、季節の贈り物やプチギフトまで様々なシーンにぴったりなギフト。
                </p>
                <MoreButton />
              </div>
              <Image
                src={"/gift.webp"}
                width={560}
                height={346}
                alt="さまざまなギフトシーンにぴったり"
                className={clsx(topicImage)}
              />
            </section>
          </div>
        </section>
        <section className={clsx(newsSection)}>
          <div className={clsx(sectionTitleBox)}>
            <h2 className={clsx(marcellus.className, sectionTitle)}>News</h2>
          </div>
          <div className={clsx(subTitleBox)}>
            <p className={clsx(subTitle)}>お知らせ</p>
          </div>
          <ul className={clsx(newsItemBox)}>
            <li className={clsx(newsItem)}>
              <Link href={"/#"} className={clsx(newsLink)}>
                <time dateTime="2024-07-25" className={clsx(time)}>
                  2024.07.25
                </time>
                <span className={clsx(newsText)}>
                  お盆期間中の配送休業日について
                </span>
              </Link>
            </li>
            <li className={clsx(newsItem)}>
              <Link href={"/#"} className={clsx(newsLink)}>
                <time dateTime="2024-09-13" className={clsx(time)}>
                  2024.09.13
                </time>
                <span className={clsx(newsText)}>
                  【お知らせ】季節限定フレーバーや新作の試食会について
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className={clsx(accessSection)}>
          <div className={clsx(accessItemBox)}>
            <div className={clsx(sectionTitleBox)}>
              <h2 className={clsx(marcellus.className, sectionTitle)}>
                Access
              </h2>
            </div>
            <div className={clsx(subTitleBox)}>
              <p className={clsx(subTitle)}>店舗情報</p>
            </div>
            <h3 className={clsx(shopName)}>フルール大阪店</h3>
            <dl className={clsx(accessDl)}>
              <dt className={clsx(accessDt)}>営業時間</dt>
              <dd className={clsx(accessDd, accessGap)}>
                月~日（水曜除く） 11:00~17:00
              </dd>
              <dt className={clsx(accessDt)}>店舗所在地</dt>
              <dd className={clsx(accessDd)}>大阪府〇〇市△△区□□丁目</dd>
            </dl>
          </div>
          <Image
            src={"/shop-small.webp"}
            width={600}
            height={370}
            alt="マカロン専門店フルールの店構え"
            className={clsx(shopImage)}
          />
        </section>
        <section className={clsx(onlineShopSection)}>
          <div className={clsx(onlineShopItemBox)}>
            <h2 className={clsx(marcellus.className, onlineShop)}>
              Online Shop
            </h2>
            <p className={clsx(onlineShopDescription)}>
              豊富なギフトをご用意しております。
            </p>
            <div className={clsx(cvButtonWrap)}>
              <CvButton />
            </div>
          </div>
          <div className={clsx(onlineShopImageBox)}>
            <Image
              src={"/online-shop-bg.webp"}
              alt="ギフト用マカロン"
              fill
              className={clsx(onlineShopImage)}
            />
          </div>
        </section>
      </main>
      <footer className={clsx(footer)}>
        <Link href={"#"} className={clsx(sacramento.className, footerLogo)}>
          Fleur
        </Link>
        <nav>
          <ul className={clsx(footerUl)}>
            <li>
              <Link href={"#"} className={clsx(footerLink)}>
                よくある質問
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(footerLink)}>
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(footerLink)}>
                利用規約
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(footerLink)}>
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href={"#"} className={clsx(footerLink)}>
                特定商取引法に基づく表記
              </Link>
            </li>
          </ul>
        </nav>
        <p className={clsx(copyRightBox)}>
          <small className={clsx(copyRight)}>©2024 Fleur</small>
        </p>
      </footer>
    </>
  );
}
