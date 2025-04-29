import AuthModal from "@/components/User/Auth/AuthModal";
import Image from "next/image";
import Link from "next/link";
export function ExpensesPage() {
  return (
    <div>
      ExpensesPage content
      <Link href="/">
        <Image
          src="/images/arrow-circle-backward.svg"
          alt="Arrow back"
          width={44}
          height={44}
        />
      </Link>
      <AuthModal />
    </div>
  );
}
