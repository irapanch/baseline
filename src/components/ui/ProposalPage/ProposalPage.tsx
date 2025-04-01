import Image from "next/image";
import Link from "next/link";

export function ProposalPage() {
  return (
    <div>
      {" "}
      ProposalPage content
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
