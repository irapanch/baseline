import Link from "next/link";
import styles from "./BalancePage.module.css";
import Image from "next/image";

export default function BalancePage() {
  const apartments = [];
  for (let i = 1; i <= 176; i++) {
    apartments.push(i);
  }
  console.log(JSON.stringify(apartments));

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
            {apartments.map((_, i) => (
              <div key={i} className={styles[`div${i + 1}`]}>
                {i + 1}
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
