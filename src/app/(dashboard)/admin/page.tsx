"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDataFromGoogleSheet } from "@/api/sheets-api";
import { API_URL } from "@/api";
import RegistrationForm from "@/components/User/Registration/RegistrationForm";

export default function AdminPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    setLoading(true);

    try {
      const result = await getDataFromGoogleSheet();
      setData(result);

      await Promise.all(
        result.map(async (row: any) => {
          const apartmentId = Number(row[0]);
          const balance = parseFloat(row[1]);

          if (!isNaN(apartmentId) && !isNaN(balance)) {
            try {
              await fetch(`${API_URL}api/apartments/${apartmentId}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ balance }),
              });
            } catch (error) {
              console.error(
                `Ошибка при обновлении квартиры ${apartmentId}:`,
                error
              );
            }
          }
        })
      );
    } catch (err) {
      console.error("Ошибка при получении данных из Google Sheets:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleUpdate(); // Автоматически обновлять при заходе на страницу
  }, []);

  return (
    <div className="container mx-auto p-4">
      <RegistrationForm />
      <Link href="/">
        <Image
          src="/images/arrow-circle-backward.svg"
          alt="Arrow back"
          width={44}
          height={44}
        />
      </Link>

      <div className="flex items-center justify-between my-4">
        <h1 className="text-2xl font-bold">Данные из Google Sheets</h1>
        <button
          onClick={handleUpdate}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Обновляется..." : "🔁 Обновить базу данных"}
        </button>
      </div>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Квартира</th>
            <th className="border px-4 py-2">Баланс</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row[0]}</td>
              <td className="border px-4 py-2">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
