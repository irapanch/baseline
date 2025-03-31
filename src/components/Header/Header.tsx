import Link from "next/link";
import "../../styles/globals.css";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className="" href="/">
        <Image src="/27.svg" alt="logo" width={150} height={44} />
      </Link>
    </header>
  );
}
