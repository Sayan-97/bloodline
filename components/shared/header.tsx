import Image from "next/image";
import Link from "next/link";
import AppLogo from "@/public/imgs/app-logo.png";
import { navLinks } from "@/constants";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 bg-black bg-opacity-50 backdrop-blur-sm py-2 border-b z-40">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image src={AppLogo} alt="img" className="w-40 md:w-44 h-auto" />
        </Link>
        <ul className="hidden lg:flex gap-8">
          {navLinks.map((item, index) => (
            <li key={index} className="uppercase font-Syncopate text-sm">
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="primary-button">pre-register</button>
      </nav>
    </header>
  );
}
