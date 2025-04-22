"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Зберігаємо error як string або null
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Логіка перевірки логіну та паролю
    if (login === "123" && password === "123") {
      onClose(); // Закриває модалку
      router.push("/user"); // Перехід на сторінку user
    }
    if (login === "admin" && password === "456") {
      onClose(); // Закриває модалку
      router.push("/admin"); // admin
    } else {
      setError("Неправильний логін або пароль. Не зареєстровані? ");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <form className={styles.userForm} onSubmit={handleLogin}>
          <input
            className={styles.userData}
            type="text"
            placeholder="Номер квартири"
            pattern="^\d{1,3}$" // Допускаються тільки цифри і максимум 3 символи
            title="Тільки цифри, максимум 3 символи"
            required
          />
          <input
            className={styles.userData}
            type="text"
            placeholder="Логін"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            className={styles.userData}
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={styles.enterButton} type="submit">
            Увійти
          </button>
          <button
            className={styles.closeButton}
            type="button"
            onClick={onClose}
          >
            x
          </button>
          {error && (
            <div style={{ color: "red", marginTop: "10px" }}>{error}</div>
          )}
        </form>

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
  );
}
