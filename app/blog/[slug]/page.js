
import Link from "next/link";
import { notFound } from "next/navigation";
import posts from "../../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="post-page">
      <Link href="/" className="back-link">
        ← Back to all articles
      </Link>

      <article className="post-content">
        <span className="category-tag">{post.category}</span>

        <h1>{post.title}</h1>

        <p className="post-meta">
          {post.date} · {post.readTime}
        </p>

        <div className="post-body">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <Link href="/" className="hero-button">
          Explore More Articles
        </Link>
      </article>
    </main>
  );
}
