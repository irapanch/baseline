"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import UserCabinet from "@/components/User/UserCabinet/UserCabinet";
import { useEffect, useState } from "react";

export default function UserPage() {
  const params = useParams();
  console.log("Params:", params);

  const userId = params?.id;
  console.log("User ID:", userId);

  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("userName");
    setUserName(name);
  }, []);

  return (
    <div>
      <h1>Панель користувача квартири: {userId}</h1>
      {userName ? <h2>Привіт, {userName}</h2> : <p>Завантаження...</p>}

      <UserCabinet />
      <Link href="/">
        <Image
          src="/images/arrow-circle-backward.svg"
          alt="Arrow back"
          width={44}
          height={44}
        />
      </Link>
    </div>
  );
}
