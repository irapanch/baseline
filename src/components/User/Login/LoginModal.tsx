"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";
import { API_URL } from "@/api";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [apartmentId, setApartmentId] = useState("");

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch(`${API_URL}api/auth/login`, {
        method: "POST",
        credentials: "include", // <== ОБОВ’ЯЗКОВО для куків (сесій)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Невірний логін або пароль");
      }

      const data = await res.json();
      const user = data.user;

      onClose();

      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push(`/user/${user.number}`);
      }
    } catch (err: any) {
      setError(err.message || "Сталася помилка. Спробуйте пізніше.");
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
