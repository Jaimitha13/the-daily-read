
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        The Daily Read<span>.</span>
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
