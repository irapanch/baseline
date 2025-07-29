"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authThunk from "@/store/auth/operations";
import authSelectors from "@/store/auth/selectors";
import { AppDispatch } from "@/store/store";

export default function RegistrationForm() {
  const dispatch = useDispatch<AppDispatch>();

  const [userName, setUserName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");

  // Використовуємо селектори для отримання стейту
  const isLoading = useSelector(authSelectors.isLoadingSelect);
  const error = useSelector(authSelectors.errorSelect);
  const message = useSelector(authSelectors.messageSelect);
  const isLogin = useSelector(authSelectors.isLoginSelect);

  const [localError, setLocalError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (message) {
      setSuccess(message);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      setLocalError(error);
      setSuccess(null);
    }
  }, [error]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setLocalError("Паролі не збігаються");
      setSuccess(null);
      return;
    }

    setLocalError(null);
    setSuccess(null);

    dispatch(
      authThunk.registerUserThunk({
        userName,
        login,
        password,
        confirmPassword,
        number: parseInt(number),
      })
    );
  };

  useEffect(() => {
    if (isLogin && !isLoading) {
      setUserName("");
      setLogin("");
      setPassword("");
      setConfirmPassword("");
      setNumber("");
    }
  }, [isLogin, isLoading]);

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-2 max-w-sm mx-auto"
    >
      <h2 className="text-xl font-bold mb-2">Реєстрація</h2>
      <input
        type="text"
        placeholder="Iм'я користувача"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="+380XXXXXXXXX"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Підтвердіть пароль"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Номер квартири"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
        min={0}
        max={999}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={isLoading}
      >
        {isLoading ? "Реєструємо..." : "Зареєструватися"}
      </button>

      {localError && <div className="text-red-600">{localError}</div>}
      {success && <div className="text-green-600">{success}</div>}
    </form>
  );
}
