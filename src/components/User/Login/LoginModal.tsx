"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";
import { API_URL } from "@/api";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [apartmentId, setApartmentId] = useState("");

  const [error, setError] = useState<string | null>(null); // Зберігаємо error як string або null
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}api/users`, {
        method: "GET",
        credentials: "include",
      });

      const users = await response.json();

      const user = users.find(
        (u: any) => u.login === login && u.password == password
      );
      console.log(user, "user");

      if (user) {
        onClose();
        if (user.login === "admin") {
          router.push("/admin");
        } else {
          router.push(`/user/${user.number}`);
        }
      } else {
        setError("Неправильний логін або пароль. Не зареєстровані?");
      }
    } catch (err) {
      console.error("Помилка при отриманні користувача", err);
      setError("Сталася помилка. Спробуйте пізніше.");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <form className={styles.userForm} onSubmit={handleLogin}>
          <input
            className={styles.userData}
            type="number"
            placeholder="Номер квартири"
            min="0"
            max="176"
            value={apartmentId}
            onChange={(e) => setApartmentId(e.target.value)}
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
