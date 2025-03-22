import Image from "next/image";
import Link from "next/link";
import styles from "./MainPaige.module.css";
import "../../../styles/globals.css";
import Header from "@/components/Header/Header";

export default function MainPage() {
  return (
    <>
      <Header />
      <section className={styles.mainPage}>
        <div className="container">
          <ul className={styles.list}>
            <li className={styles.li1}></li>
            <li className={styles.li2}></li>
            <li className={styles.li3}></li>
            <li className={styles.li4}></li>
            <li className={styles.li5}></li>
            <li className={styles.li6}></li>
          </ul>
        </div>
      </section>
    </>
  );
}
