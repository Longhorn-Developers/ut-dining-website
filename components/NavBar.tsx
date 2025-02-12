import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-bold text-xl">
          UT Dining
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/downloads"
            className="hover:text-primary transition-colors"
          >
            Downloads
          </Link>
          <Link href="/docs" className="hover:text-primary transition-colors">
            Docs
          </Link>
          <Link
            href="/reviews"
            className="hover:text-primary transition-colors"
          >
            Reviews
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
