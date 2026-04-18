import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl text-foreground hover:text-muted-foreground"
        >
          Jane Doe
        </Link>
        <ul className="flex items-center gap-1">
          <li>
            <Link
              href="/work"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
