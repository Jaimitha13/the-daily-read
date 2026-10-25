
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <p className="hero-label">OUR STORY</p>

        <h1>About The Daily Read</h1>

        <p className="hero-description">
          A place for curious minds, fresh perspectives,
          and ideas worth sharing.
        </p>
      </section>

      {/* About Content */}
      <section className="articles-section">
        <div className="about-content">
          <p className="section-label">OUR STORY</p>

          <h2>A little curiosity can lead to big ideas.</h2>

          <p>
            The Daily Read is an online publication for curious
            minds who enjoy discovering new ideas, learning useful
            skills, and seeing the world from different perspectives.
          </p>

          <p>
            We explore topics ranging from technology and programming
            to writing, creativity, and everyday life. Our goal is
            to make information approachable, useful, and enjoyable
            for everyone.
          </p>

          <p>
            Whether you are exploring a new technology, improving
            your skills, or simply looking for an interesting read,
            there is always something new to discover here.
          </p>

          {/* Topics Section */}
          <p className="section-label">WHAT YOU'LL FIND HERE</p>

          <ul>
            <li>
              <strong>Technology:</strong> Explore web development,
              modern tools, and emerging trends.
            </li>

            <li>
              <strong>Programming:</strong> Learn coding concepts,
              discover practical tips, and grow your knowledge.
            </li>

            <li>
              <strong>Writing:</strong> Find ideas to improve
              communication and express creativity.
            </li>

            <li>
              <strong>Everyday Life:</strong> Discover useful
              insights, habits, and fresh perspectives.
            </li>
          </ul>

          {/* Mission Section */}
          <p className="section-label">OUR MISSION</p>

          <p>
            Our mission is to make learning enjoyable by sharing
            clear, useful, and engaging content that inspires
            readers to stay curious and keep growing.
          </p>

          <p className="about-tagline">
            Stay curious. Keep learning. Read something new.
          </p>

          <Link href="/articles" className="hero-button">
            Explore Our Articles →
          </Link>
        </div>
      </section>
    </main>
  );
}
