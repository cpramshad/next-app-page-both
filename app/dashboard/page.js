import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>My Page</p>
      <li>
        <Link href={"/lpv"}>LPV</Link>
      </li>
    </div>
  );
}
