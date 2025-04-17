"use client";
import Link from "next/link";
import styles from "./BalancePage.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { API_URL } from "@/api";

// Тип квартири
interface Apartment {
  _id: string;
  number: number;
  balance: number;
}

export default function BalancePage() {
  // const apartments = [];
  // for (let i = 1; i <= 176; i++) {
  //   apartments.push(i);
  // }
  // console.log(JSON.stringify(apartments));
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchApartments = async () => {
      try {
        const res = await fetch(`${API_URL}api/apartments/`); // ← заміни на свою реальну API адресу
        const data: Apartment[] = await res.json();
        setApartments(data); // data повинна бути масивом квартир, кожна з яких має _id
      } catch (error) {
        console.error("Помилка завантаження даних:", error);
      }
    };

    fetchApartments();
  }, []);

  const getBalanceClass = (balance: number): string => {
    if (balance >= 0) {
      return styles.color1; // нема боргу або переплата
    } else if (balance > -150) {
      return styles.color2; // невелика заборгованість
    } else {
      return styles.color3; // великий борг
    }
  };

  return (
    <>
      <section className={styles.balancePage}>
        <div className={`${styles.pageContainer} container`}>
          <Link className={styles.linkBack} href="/">
            <Image
              src="/images/arrow-circle-backward.svg"
              alt="Arrow back"
              width={44}
              height={44}
            />
          </Link>
          <div className={styles.parent}>
            {apartments.map((apt) => (
              <div
                key={apt._id}
                className={`${styles[`div${apt._id}`]} ${getBalanceClass(
                  apt.balance
                )}`}
              >
                <div>{apt._id}</div>
              </div>
            ))}
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
    </>
  );
}
