import clsx from "clsx";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { arrow, arrowBox, cvButton, cvLabel } from "./cvButton.css";

export default function CvButton() {
  return (
    <>
      <Link href={"#"} className={clsx(cvButton)}>
        <span className={clsx(cvLabel)}>オンラインショップを見る</span>
        <div className={clsx(arrowBox)}>
          <GoArrowRight className={clsx(arrow)} />
        </div>
      </Link>
    </>
  );
}
