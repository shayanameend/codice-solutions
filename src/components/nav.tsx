import Link from "next/link";
import { Logo } from "@/components";

export default function Nav() {
  return (
    <nav
      className={`flex items-center justify-between text-xl font-medium text-white`}
    >
      <Link href={`/`}>
        <Logo />
      </Link>
      <ul className={`flex gap-6 uppercase`}>
        <li
          className={`border-b-4 border-transparent px-2 py-1 text-white transition-all  hover:border-yellow-500 hover:text-yellow-500`}
        >
          <Link href={`services`}>Services</Link>
        </li>
        <li
          className={`border-b-4 border-transparent px-2 py-1 text-white transition-all hover:border-yellow-500 hover:text-yellow-500`}
        >
          <Link href={"projects"}>Projects</Link>
        </li>
      </ul>
      <button
        className={`rounded-xl bg-yellow-500 px-6 py-3 uppercase text-white transition-all`}
      >
        Contact
      </button>
    </nav>
  );
}
