import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Brand Designer with a Computer Science edge.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header / Navbar */}
          <header className="flex justify-between items-center py-6 border-b border-white/10">
            <Link href="/" className="text-lg font-bold tracking-tight hover:text-emerald-400 transition">
              Colin Vasas 
            </Link>
            <nav className="flex gap-6 text-sm text-neutral-300">
              <Link href="/projects" className="hover:text-white">Projects</Link>
              <Link href="/experience" className="hover:text-white">Experience</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </header>

          {/* Page Content */}
          <main className="min-h-[calc(100vh-8rem)]"> {children} </main>

          {/* Footer */}
          <footer className="border-t border-white/10 py-6 text-sm text-neutral-400">
            © {new Date().getFullYear()} Colin Vasas
          </footer>
        </div>
      </body>
    </html>
  );
}
