import Image from "next/image";
import Link from "next/link";

export function ChatPage() {
  return (
    <div>
      ChatPage content
      <div>
        <Link href="/admin">admin</Link>
      </div>
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
