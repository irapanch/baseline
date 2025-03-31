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
            <li className={styles.li1}>Новини</li>
            <li className={styles.li2}>Платежі</li>
            <li className={styles.li3}>Баланс</li>
            <li className={styles.li4}>Чат</li>
            <li className={styles.li5}>Пропозиції</li>
            <li className={styles.li6}>
              <Link className="" href="/">
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
