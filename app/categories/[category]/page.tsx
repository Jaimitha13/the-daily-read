
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../../../lib/posts";

export function generateStaticParams() {
  const categories = [...new Set(posts.map((post) => post.category))];

  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const categoryName = decodeURIComponent(category).toLowerCase();

  const categoryPosts = posts.filter(
    (post) => post.category.toLowerCase() === categoryName
  );

  if (categoryPosts.length === 0) {
    notFound();
  }

  const displayCategory = categoryPosts[0].category;

  return (
    <main>
      <section className="hero">
        <p className="hero-label">BROWSE BY INTEREST</p>
        <h1>{displayCategory} Articles</h1>
        <p className="hero-description">
          Explore our latest stories about {displayCategory.toLowerCase()}.
        </p>
      </section>

      <section className="articles-section">
        <Link href="/categories" className="back-link">
          ← All Categories
        </Link>

        <div className="article-grid">
          {categoryPosts.map((post) => (
            <article className="article-card" key={post.slug}>
              <div className="article-card-top">
                <span className="category-tag">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>

              <h3>{post.title}</h3>
              <p className="article-excerpt">{post.excerpt}</p>

              <div className="article-card-bottom">
                <span>{post.date}</span>
                <Link href={`/blog/${post.slug}`}>
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
