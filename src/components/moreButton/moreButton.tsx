import clsx from "clsx";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { arrow, moreButton } from "./moreButton.css";

export default function MoreButton() {
  return (
    <>
      <Link href={"/#"} className={clsx(moreButton)}>
        <GoArrowRight className={clsx(arrow)} />
      </Link>
    </>
  );
}
