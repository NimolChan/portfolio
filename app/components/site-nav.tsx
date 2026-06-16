"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Profile" },
  { href: "/projects", label: "Projects" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Chan Nimol home">
        <span className="brand-mark">CN</span>
        <span className="brand-text">Chan Nimol</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link className={isActive ? "nav-link active" : "nav-link"} href={link.href} key={link.href}>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
