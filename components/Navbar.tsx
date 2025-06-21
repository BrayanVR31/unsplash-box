import Image from "next/image";
import Link from "next/link";
import logoLoader from "@/assets/svg/Logo.svg";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="border-b border-b-box-300">
      <nav className="mx-auto max-w-[1280px] py-7 flex justify-between">
        <Link href="/">
          <Image alt="Logo" src={logoLoader} />
        </Link>
        <NavLinks />
      </nav>
    </div>
  );
}

export default Navbar;
