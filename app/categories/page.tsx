
import Link from "next/link";
import posts from "../../lib/posts";

export default function CategoriesPage() {
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <main>
      <section className="hero">
        <p className="hero-label">DISCOVER YOUR INTERESTS</p>
        <h1>Explore by Category</h1>
        <p className="hero-description">
          Find stories and ideas that interest you.
        </p>
      </section>

      <section className="articles-section">
        <div className="article-grid">
          {categories.map((category) => {
            const categoryPosts = posts.filter(
              (post) => post.category === category
            );

            return (
              <Link
                key={category}
                href={`/categories/${encodeURIComponent(category.toLowerCase())}`}
                className="article-card"
              >
                <span className="category-tag">{category}</span>
                <h3>{category}</h3>
                <p className="article-excerpt">
                  Explore our {category.toLowerCase()} articles and stories.
                </p>
                <div className="article-card-bottom">
                  <span>{categoryPosts.length} articles</span>
                  <span>Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
