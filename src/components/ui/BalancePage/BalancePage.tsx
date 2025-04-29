// components/ui/BalancePage/BalancePage.tsx
"use client";
import Link from "next/link";

import { useApartments } from "@/context/ApartmentContext";
import styles from "./BalancePage.module.css";
import Image from "next/image";

export default function BalancePage() {
  const { apartments } = useApartments();

  const getBalanceClass = (balance: number): string => {
    if (balance >= 0) return styles.color1;
    else if (balance > -150) return styles.color2;
    else return styles.color3;
  };

  return (
    <section className={styles.balancePage}>
      <div className={`container--balance ${styles.pageContainer}`}>
        <Link className={styles.linkBack} href="/">
          <Image
            src="/images/arrow-circle-backward.svg"
            alt="Arrow back"
            width={44}
            height={44}
          />
        </Link>
        <div className={styles.parent}>
          {apartments.length === 0 ? (
            <p>Дані завантажуються...</p>
          ) : (
            apartments.map((apt) => (
              <div
                key={apt._id}
                className={`${styles[`div${apt._id}`]} ${getBalanceClass(
                  apt.balance
                )}`}
              >
                <div>{apt._id}</div>
              </div>
            ))
          )}
        </div>
        <ul className={styles.colorsList}>
          <li className={styles.color1}>
            <div></div>
            <p> - Заборгованості немає/переплата</p>
          </li>
          <li className={styles.color2}>
            <div></div>
            <p> - Поточна заборгованість</p>
          </li>
          <li className={styles.color3}>
            <div></div>
            <p> - Борг</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
