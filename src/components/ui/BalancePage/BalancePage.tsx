import styles from "./BalancePage.module.css";

export default function BalancePage() {
  return (
    <>
      <section className={styles.balancePage}>
        {/* <div className=""> */}
        <div className="container">
          <div className={styles.parent}>
            {[...Array(176)].map((_, i) => (
              <div key={i} className={styles[`div${i + 1}`]}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
