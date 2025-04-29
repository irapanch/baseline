"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import UserCabinet from "@/components/User/UserCabinet/UserCabinet";

export default function UserPage() {
  const params = useParams();
  const userId = params?.id;

  return (
    <div>
      <h1>Панель користувача</h1>
      <p>Ваш номер квартири: {userId}</p>
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
