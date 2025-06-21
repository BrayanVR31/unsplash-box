import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="border-b border-b-box-300 fixed top-0 left-0 w-full bg-white">
      <nav className="mx-auto max-w-[1280px] h-nav flex items-center justify-between">
        <Link href="/">
          <Image alt="Logo" src="/Logo.svg" width={130} height={0} />
        </Link>
        <NavLinks />
      </nav>
    </div>
  );
}

export default Navbar;
