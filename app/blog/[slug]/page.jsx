import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaLink } from "react-icons/fa";

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentIndex + 1] || allPosts[0];
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) notFound();

  return (
    <main className="blog-post-page-detail">
      {/* Background System */}
      <div className="future-grid-bg" />
      <div className="future-orb one" />
      <div className="future-orb two" />

      <div className="blog-editorial-container">
        {/* HEADER AREA */}
        <header className="blog-header-section">
          <div className="blog-post-meta">
            <span
              className="blog-post-date"
              style={{
                color: "var(--cyan)",
                border: "1px solid var(--cyan)",
                padding: "4px 12px",
                borderRadius: "4px",
                fontSize: "0.7rem",
              }}
            >
              {post.type.toUpperCase()}
            </span>
            <span
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                marginLeft: "15px",
              }}
            >
              {post.date}
            </span>
          </div>

          <h1 className="blog-main-title">
            {/* Highlight part of the title automatically or manually */}
            {post.title.split(".").map((part, i) => (
              <span key={i} className={i === 1 ? "text-cyan" : ""}>
                {part}
                {i === 0 ? "." : ""}
              </span>
            ))}
          </h1>

          <div className="blog-author-strip">
            <img
              src="/assets/images/Dr-Alexander-Soto.webp"
              className="author-mini-photo"
              alt="Dr. Soto"
            />
            <div className="author-mini-info">
              <p className="name">Dr. Alexander Soto</p>
              <p className="role">Head of Orthopedic Vanguard</p>
            </div>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="blog-article-grid">
          {/* LEFT COLUMN: ARTICLE CONTENT */}
          <div className="blog-main-content">
            <p
              style={{
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              {post.paragraph1}
            </p>

            <p style={{ marginBottom: "30px" }}>{post.paragraph2}</p>

            {/* Note Box (The Robotic Advantage style) */}
            <div className="blog-note-box">
              <h4>
                <span style={{ color: "var(--cyan)" }}>✦</span> The Robotic
                Advantage
              </h4>
              <p>{post.note}</p>
            </div>

            <h2
              className="ph2"
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginBottom: "20px",
              }}
            >
              {post.subtitle}
            </h2>

            <p>{post.subparagraph1}</p>

            <div
              className="blog-post-visual-wrap"
              style={{ margin: "40px 0", aspectRatio: "16/9" }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <p>{post.subparagraph2}</p>

            {/* List with checkmarks */}
            <ul className="blog-check-list">
              {post.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Bio Card at the bottom of content */}
            <div className="author-bio-card">
              <img
                src="/assets/images/Dr-Alexander-Soto.webp"
                className="author-avatar"
                alt="Dr. Soto"
              />
              <div className="author-info">
                <span
                  style={{
                    color: "var(--cyan)",
                    fontSize: "0.8rem",
                    fontWeight: "800",
                  }}
                >
                  Escrito por
                </span>
                <h3>Dr. Alexander Soto</h3>
                <p>
                  Director of Orthopedic Vanguard. Pioneer in robotic-assisted
                  orthopedic surgery with over 15 years of experience.
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "15px",
                    color: "var(--cyan)",
                  }}
                >
                  <FaLinkedin /> <FaTwitter /> <FaLink />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <aside className="blog-sidebar">
            <div className="sidebar-reading-block">
              <span className="sidebar-section-title">
                Lecturas Relacionadas
              </span>
              {relatedPosts.map((rp, i) => (
                <Link
                  key={i}
                  href={`/blog/${rp.slug}`}
                  className="related-post-link"
                >
                  <span>{rp.type}</span>
                  <h4>{rp.title}</h4>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      marginTop: "5px",
                    }}
                  >
                    5 min read • {rp.date}
                  </p>
                </Link>
              ))}
            </div>

            <div className="sidebar-share-block" style={{ marginTop: "50px" }}>
              <span className="sidebar-section-title">Compartir</span>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  fontSize: "1.4rem",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                <FaFacebook style={{ cursor: "pointer" }} />
                <FaLinkedin style={{ cursor: "pointer" }} />
                <FaLink style={{ cursor: "pointer" }} />
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER: NEXT ARTICLE */}
        <section
          className="next-article-hero"
          style={{
            marginTop: "100px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "3.5rem", margin: 0 }}>
              Próximo Artículo.
            </h2>
            <Link
              href="/blog"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "0.8rem",
              }}
            >
              VER TODO EL BLOG
            </Link>
          </div>

          <Link
            href={`/blog/${nextPost.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div className="next-article-card" style={{ height: "500px" }}>
              <img
                src={nextPost.image}
                className="next-article-image"
                alt="Próximo"
              />
              <div className="next-article-content" style={{ padding: "60px" }}>
                <span
                  style={{
                    color: "var(--muted)",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    fontSize: "0.8rem",
                  }}
                >
                  SIGUIENTE EN LA SERIE
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "2.8rem",
                    margin: "15px 0 30px",
                    maxWidth: "700px",
                  }}
                >
                  {nextPost.title}
                </h3>
                <span className="future-link">Leer Ahora</span>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
