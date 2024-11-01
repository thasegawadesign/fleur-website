import CvButton from "@/components/cvButton.tsx/cvButton";
import MoreButton from "@/components/moreButton/moreButton";
import clsx from "clsx";
import { Sacramento } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header>
        <Link href={"#"}>
          <h1 className={clsx(sacramento.className)}>Fleur</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={"#"}>美味しさへのこだわり</Link>
            </li>
            <li>
              <Link href={"#"}>ブランド</Link>
            </li>
            <li>
              <Link href={"#"}>ギフト</Link>
            </li>
            <li>
              <Link href={"#"}>ニュース</Link>
            </li>
            <li>
              <Link href={"#"}>ラインナップ</Link>
            </li>
            <li>
              <Link href={"#"}>店舗情報</Link>
            </li>
          </ul>
          <CvButton />
        </nav>
      </header>
      <main>
        <section>
          <h2>一口で広がる、贅沢な味わい。</h2>
          <Image
            src={"/macarons.webp"}
            width={640}
            height={320}
            alt="カラフルなマカロン"
          />
          <p>
            厳選された素材と職人の技が奏でる、特別な一口。毎日を彩る、贅沢なひとときをお楽しみください。
          </p>
          <Image
            src={"/main-visual.webp"}
            width={1600}
            height={1600}
            alt="マカロン専門店フルールの店構え"
          />
        </section>
        <section>
          <h2>Pick up</h2>
          <p>おすすめ商品</p>
          <h3>低糖質・グルテンフリーマカロン</h3>
          <p>
            植物由来の素材を使用し、グルテンを一切含まない配合で焼き上げました。からだにやさしいグルテンフリーマカロンです。
          </p>
          <Image
            src={"/recommended-product.webp"}
            width={540}
            height={300}
            alt="低糖質・グルテンフリーマカロン"
          />
          <Image
            src={"/pickup-decoration.png"}
            width={100}
            height={150}
            alt="フルールの由来の花"
          />
          <CvButton />
        </section>
        <section>
          <h2>Topic</h2>
          <p>美味しさへのこだわり</p>
          <section>
            <h3>素材へのこだわり</h3>
            <p>
              安心してお召し上がりいただけるよう、素材選びから製造過程まで細心の注意を払っています。
              自然由来の色素で美しく仕上げた、からだに優しい逸品です。
            </p>
            <MoreButton />
            <Image
              src={"/ingredient.webp"}
              width={560}
              height={346}
              alt="素材へのこだわり"
            />
          </section>
          <section>
            <h3>ブランドストーリー</h3>
            <p>
              創業以来、最高品質の素材を用い、職人の技術と情熱を注ぎ込んだマカロンをお届けしています。
              美味しさと美しさを追求し続けることで、これからも皆様の特別なひとときを彩り続けます。
            </p>
            <MoreButton />
            <Image
              src={"/brand.webp"}
              width={560}
              height={346}
              alt="ブランドストーリー"
            />
          </section>
          <section>
            <h3>さまざまなギフトシーンにぴったり</h3>
            <p>
              バレンタインやホワイトデー、季節の贈り物やプチギフトまで様々なシーンにぴったりなギフト。
            </p>
            <MoreButton />
            <Image
              src={"/gift.webp"}
              width={560}
              height={346}
              alt="さまざまなギフトシーンにぴったり"
            />
          </section>
        </section>
        <section>
          <h2>News</h2>
          <p>お知らせ</p>
          <ul>
            <li>
              <p>
                <time dateTime="2024-07-25">2024.07.25</time>
                <span>お盆期間中の配送休業日について</span>
              </p>
            </li>
            <li>
              <p>
                <time dateTime="2024-09-13">2024.09.13</time>
                <span>
                  【お知らせ】季節限定フレーバーや新作の試食会について
                </span>
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Access</h2>
          <p>店舗情報</p>
          <h3>フルール大阪店</h3>
          <dl>
            <dt>営業時間</dt>
            <dd>月~日（水曜除く） 11:00~17:00</dd>
            <dt>店舗所在地</dt>
            <dd>大阪府〇〇市△△区□□丁目</dd>
          </dl>
          <Image
            src={"/shop-small.webp"}
            width={600}
            height={370}
            alt="マカロン専門店フルールの店構え"
          />
        </section>
        <section>
          <h2>Online Shop</h2>
          <p>豊富なギフトをご用意しております。</p>
          <CvButton />
          <Image
            src={"/online-shop-bg.webp"}
            width={2880}
            height={720}
            alt="ギフト用マカロン"
          />
        </section>
      </main>
      <footer>
        <Link href={"#"}>Fleur</Link>
        <nav>
          <ul>
            <li>
              <Link href={"#"}>よくある質問</Link>
            </li>
            <li>
              <Link href={"#"}>お問い合わせ</Link>
            </li>
            <li>
              <Link href={"#"}>利用規約</Link>
            </li>
            <li>
              <Link href={"#"}>プライバシーポリシー</Link>
            </li>
            <li>
              <Link href={"#"}>特定商取引法に基づく表記</Link>
            </li>
          </ul>
        </nav>
        <p>
          <small>©2024 Fleur</small>
        </p>
      </footer>
    </>
  );
}
