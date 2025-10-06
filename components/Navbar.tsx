"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/data", label: "Data" },
    { href: "/product", label: "Product" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white hover:opacity-80">
          Vigya<span className="text-purple-400">.</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm font-medium text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-purple-400 transition ${
                pathname === link.href ? "underline decoration-purple-400 underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
