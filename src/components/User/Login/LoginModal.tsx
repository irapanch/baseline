"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./LoginModal.module.css";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import authThunk from "@/store/auth/operations";
import authSelectors from "@/store/auth/selectors";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [apartmentId, setApartmentId] = useState("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  // Отримуємо стани з redux
  const error = useAppSelector(authSelectors.errorSelect);
  const isLoading = useAppSelector(authSelectors.isLoadingSelect);
  const user = useAppSelector(authSelectors.userSelect);
  const isLogin = useAppSelector(authSelectors.isLoginSelect);

  // При успішному логіні перенаправляємо і закриваємо модалку
  useEffect(() => {
    if (isLogin && user) {
      onClose();

      const userNumber = user.number ?? 0; // дефолт 0 або інше значення

      if (user.role === "admin") {
        localStorage.setItem("adminId", userNumber.toString());
        localStorage.setItem("userName", user.userName ?? "");
        router.push("/admin");
      } else {
        localStorage.setItem("userName", user.userName ?? "");
        router.push(`/user/${user.number}`);
      }
    }
  }, [isLogin, user, onClose, router]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      authThunk.loginUserThunk({
        login,
        password,
      })
    );
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <form className={styles.userForm} onSubmit={handleLogin}>
          <input
            className={styles.userData}
            type="number"
            placeholder="Номер квартири"
            min={0}
            max={176}
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
          <button
            className={styles.enterButton}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Завантаження..." : "Увійти"}
          </button>
          <button
            className={styles.closeButton}
            type="button"
            onClick={onClose}
            disabled={isLoading}
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
