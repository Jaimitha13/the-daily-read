
import posts from "../../lib/posts";
import BlogExplorer from "../../components/BlogExplorer";

export default function ArticlesPage() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">THE DAILY READ</p>
        <h1>Explore Our Articles</h1>
        <p className="hero-description">
          Discover stories about technology, programming,
          writing, and everyday life.
        </p>
      </section>

      <BlogExplorer posts={posts} />
    </main>
  );
}
