"use client";

import { useState } from "react";
import { API_URL } from "@/api";

export default function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Паролі не збігаються");
      return;
    }

    try {
      const response = await fetch(`${API_URL}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          login,
          password,
          confirmPassword,
          number: parseInt(number),
        }),
      });

      if (response.ok) {
        setSuccess("Реєстрація успішна!");
        setError(null);
        setLogin("");
        setPassword("");
        setConfirmPassword("");
        setNumber("");
      } else {
        const data = await response.json();
        setError(data.message || "Помилка при реєстрації");
        setSuccess(null);
      }
    } catch (err) {
      console.error("Помилка при реєстрації:", err);
      setError("Сталася помилка. Спробуйте пізніше.");
      setSuccess(null);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-2 max-w-sm mx-auto"
    >
      <h2 className="text-xl font-bold mb-2">Реєстрація</h2>

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
      >
        Зареєструватися
      </button>

      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
    </form>
  );
}
