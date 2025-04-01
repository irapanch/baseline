import Image from "next/image";
import Link from "next/link";
import styles from "./MainPaige.module.css";
import "../../../styles/globals.css";

export default function MainPage() {
  return (
    <>
      <section className={styles.mainPage}>
        <div className="container">
          <ul className={styles.list}>
            <li className={styles.li1}>
              <Link className={styles.link} href="/news">
                Новини
              </Link>
            </li>
            <li className={styles.li2}>
              <Link className={styles.link} href="/expenses">
                Витрати
              </Link>
            </li>
            <li className={styles.li3}>
              <Link className={styles.link} href="/balance">
                Баланс
              </Link>
            </li>
            <li className={styles.li4}>
              <Link className={styles.link} href="/chat">
                Чат
              </Link>
            </li>
            <li className={styles.li5}>
              <Link className={styles.link} href="/proposal">
                Пропозиції
              </Link>
            </li>
            <li className={styles.li6}>
              <Link className={styles.link} href="/user">
                <Image
                  src="/images/account-reactivate.svg"
                  alt="User"
                  width={44}
                  height={44}
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
