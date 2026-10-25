
import Link from "next/link";
import posts from "../lib/posts";
import BlogExplorer from "../components/BlogExplorer";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">WELCOME TO THE DAILY READ</p>

        <h1>
          Ideas worth reading.
          <br />
          Stories worth sharing.
        </h1>

        <p className="hero-description">
          Discover fresh perspectives on technology, programming,
          writing, and everyday life.
        </p>

        <Link href="#articles" className="hero-button">
          Explore Articles →
        </Link>
      </section>

      <BlogExplorer posts={posts} />
    </main>
  );
}
