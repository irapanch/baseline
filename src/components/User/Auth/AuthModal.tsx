"use client";

import styles from "../Login/LoginModal.module.css";
import { useState } from "react";
import LoginModal from "../Login/LoginModal";
import Link from "next/link";
import Image from "next/image";

export default function AuthModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <Link className={styles.backButton} href="/">
            <Image
              src="/images/arrow-circle-backward.svg"
              alt="Arrow back"
              width={20}
              height={20}
            />
          </Link>
          <p className={styles.attentionText}>ДОСТУП ОБМЕЖЕНИЙ!</p>
          <div
            className={styles.enterButton}
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          >
            Авторизуйтесь
          </div>
          <p>або</p>
          <a
            className={styles.linkOut}
            href="https://t.me/IraPanchl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Подайте заявку на реєстрацію через бота
          </a>
        </div>
      </div>
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </>
  );
}
