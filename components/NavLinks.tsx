"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <div>
      <Link
        className={`text-box-400 inline-block text-sm px-5 py-2 font-medium rounded-xs ${pathname === "/" ? "bg-box-300 text-box-500" : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`text-box-400 inline-block text-sm px-5 py-2 font-medium rounded-xs ${pathname === "/collections" ? "bg-box-300 text-box-500" : ""}`}
        href="/collections"
      >
        Collections
      </Link>
    </div>
  );
}

export default NavLinks;
