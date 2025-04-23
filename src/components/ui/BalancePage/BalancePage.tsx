// "use client";
// import Link from "next/link";
// import styles from "./BalancePage.module.css";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { API_URL } from "@/api";
// import { Apartment } from "@/types/apartment.types";
// import useSWR from "swr";

// // Тип квартири

// export default function BalancePage() {
//   const [apartments, setApartments] = useState<Apartment[]>([]);

//   useEffect(() => {
//     const fetchApartments = async () => {
//       try {
//         const res = await fetch(`${API_URL}api/apartments/`);
//         const data: Apartment[] = await res.json();

//         setApartments(data); // data повинна бути масивом квартир, кожна з яких має _id
//       } catch (error) {
//         console.error("Помилка завантаження даних:", error);
//       }
//     };

//     fetchApartments();
//   }, []);

//   const getBalanceClass = (balance: number): string => {
//     if (balance >= 0) {
//       return styles.color1; // нема боргу або переплата
//     } else if (balance > -150) {
//       return styles.color2; // невелика заборгованість
//     } else {
//       return styles.color3; // великий борг
//     }
//   };

//   console.log("render BalancePage");

//   return (
//     <>
//       <section className={styles.balancePage}>
//         <div className={`${styles.pageContainer} container`}>
//           <Link className={styles.linkBack} href="/">
//             <Image
//               src="/images/arrow-circle-backward.svg"
//               alt="Arrow back"
//               width={44}
//               height={44}
//             />
//           </Link>
//           <div className={styles.parent}>
//             {apartments.map((apt) => (
//               <div
//                 key={apt._id}
//                 className={`${styles[`div${apt._id}`]} ${getBalanceClass(
//                   apt.balance
//                 )}`}
//               >
//                 <div>{apt._id}</div>
//               </div>
//             ))}
//           </div>
//           <ul className={styles.colorsList}>
//             <li className={styles.color1}>
//               <div></div>
//               <p> - Заборгованості немає/переплата</p>
//             </li>
//             <li className={styles.color2}>
//               <div></div>
//               <p> - Поточна заборгованість</p>
//             </li>
//             <li className={styles.color3}>
//               <div></div>
//               <p> - Борг</p>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";

import Link from "next/link";
import styles from "./BalancePage.module.css";
import Image from "next/image";
import useSWR from "swr";
import { API_URL } from "@/api";
import { Apartment } from "@/types/apartment.types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BalancePage() {
  const {
    data: apartments,
    error,
    isLoading,
  } = useSWR<Apartment[]>(`${API_URL}api/apartments/`, fetcher);

  const getBalanceClass = (balance: number): string => {
    if (balance >= 0) return styles.color1;
    else if (balance > -150) return styles.color2;
    else return styles.color3;
  };

  if (error) return <div>Помилка завантаження даних</div>;
  if (isLoading || !apartments) return <div>Завантаження...</div>;

  return (
    <section className={styles.balancePage}>
      <div className={`container--balance ${styles.pageContainer} `}>
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
  );
}
