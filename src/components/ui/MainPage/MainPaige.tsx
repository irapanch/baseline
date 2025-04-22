"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./MainPaige.module.css";
import "@/styles/globals.css";
import { useState } from "react";
import LoginModal from "@/components/User/Login/LoginModal";

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);
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
              <div
                className={styles.link}
                onClick={() => setShowModal(true)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src="/images/account-reactivate.svg"
                  alt="User"
                  width={44}
                  height={44}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
