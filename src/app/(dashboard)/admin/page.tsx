// import GoogleSheetPage from "@/db/GoogleSheetPage";

// export default function AdminPage() {
//   return <GoogleSheetPage />;
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import getDataFromGoogleSheet from "@/api/sheets-api";

export default function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getDataFromGoogleSheet();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Link href="/">
        <Image
          src="/images/arrow-circle-backward.svg"
          alt="Arrow back"
          width={44}
          height={44}
        />
      </Link>
      <h1>Данные из Google Sheets</h1>
      <div className=" mx-auto p-4">
        <h1 className="text-xl font-bold mb-4">Данные из Google Sheets</h1>
        <table className="table-auto border-collapse border border-gray-400 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Квартира</th>
              <th className="border border-gray-400 px-4 py-2">Баланс</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border border-gray-400">
                <td className="border border-gray-400 px-4 py-2">{row[0]}</td>
                <td className="border border-gray-400 px-4 py-2">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
