"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();
  return (
    <div>
      <Link
        className={`text-box-400 inline-block text-sm px-5 py-2.5 transition-colors font-medium rounded-sm ${pathname === "/" ? "bg-box-300 text-box-500" : "hover:text-box-500/80"}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`text-box-400 transition-colors duration-500 inline-block text-sm px-5 py-2.5 font-medium rounded-sm ${pathname === "/collections" ? "bg-box-300 text-box-500" : "hover:text-box-500/80"}`}
        href="/collections"
      >
        Collections
      </Link>
    </div>
  );
}

export default NavLinks;
