
"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogExplorer({ posts }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category)),
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="articles-section" id="articles">
      <div className="section-heading">
        <div>
          <p className="section-label">OUR COLLECTION</p>
          <h2>Latest Articles</h2>
        </div>

        <p className="article-count">
          {filteredPosts.length} articles found
        </p>
      </div>

      <div className="blog-controls">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="search-input"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="category-select"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item === "All" ? "All Categories" : item}
            </option>
          ))}
        </select>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="article-grid">
          {filteredPosts.map((post) => (
            <article className="article-card" key={post.slug}>
              <div className="article-card-top">
                <span className="category-tag">
                  {post.category}
                </span>
                <span className="read-time">
                  {post.readTime}
                </span>
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
      ) : (
        <p className="no-results">
          No articles found. Try another search.
        </p>
      )}
    </section>
  );
}
