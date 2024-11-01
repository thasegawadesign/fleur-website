import clsx from "clsx";
import { Sacramento } from "next/font/google";
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
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
