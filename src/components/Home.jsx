// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hp-wrap">
      {/* ===== HERO ===== */}
      <section className="hp-hero">
        <p className="hp-eyebrow">Welcome</p>
        <h1 className="hp-title">Building fast, accessible web experiences.</h1>
        <p className="hp-sub">
          I’m a front-end developer focused on clean UX, performance, and reliable code.
        </p>

        <div className="hp-actions">
          <Link to="/about" className="hp-btn hp-btn-primary">About Me</Link>
          <Link to="/projects" className="hp-btn">View Projects</Link>
          <Link to="/contact" className="hp-btn hp-btn-ghost">Contact</Link>
        </div>

        <p className="hp-mission">
          <strong>Mission:</strong> Ship helpful products with thoughtful design, semantic HTML, and maintainable JavaScript.
        </p>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="hp-card hp-highlights">
        <h2 className="hp-section-title">What I Do</h2>
        <div className="hp-cards">
          <article className="hp-service">
            <div className="hp-ico" aria-hidden>💻</div>
            <h3>Web Development</h3>
            <p>React, Vite, modern JS, semantic HTML, responsive CSS.</p>
            <Link to="/services" className="hp-link">See services ↗</Link>
          </article>

          <article className="hp-service">
            <div className="hp-ico" aria-hidden>⚡</div>
            <h3>Performance & Accessibility</h3>
            <p>Lean bundles, a11y-first layouts, keyboard & screen reader friendly.</p>
            <Link to="/services" className="hp-link">View examples ↗</Link>
          </article>

          <article className="hp-service">
            <div className="hp-ico" aria-hidden>🔧</div>
            <h3>API & Basics</h3>
            <p>Node/Express fundamentals, REST patterns, JSON APIs.</p>
            <Link to="/services" className="hp-link">See education ↗</Link>
          </article>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="hp-featured">
        <div className="hp-head">
          <h2 className="hp-section-title">Featured Projects</h2>
          <Link to="/projects" className="hp-textlink">Browse all →</Link>
        </div>

        <div className="hp-grid">
          <Link to="/projects" className="hp-project">
            <img src="/assets/project1.jpg" alt="Project One screenshot" />
            <div className="hp-meta">
              <h3>Project One</h3>
              <p>React SPA with accessible components.</p>
            </div>
          </Link>

          <Link to="/projects" className="hp-project">
            <img src="/assets/project2.jpg" alt="Project Two screenshot" />
            <div className="hp-meta">
              <h3>Project Two</h3>
              <p>Node/Express JSON API basics and CRUD.</p>
            </div>
          </Link>

          <Link to="/projects" className="hp-project">
            <img src="/assets/project3.jpg" alt="Project Three screenshot" />
            <div className="hp-meta">
              <h3>Project Three</h3>
              <p>Responsive layout with semantic HTML/CSS.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== EDUCATION TEASER ===== */}
      <section className="hp-card hp-edu">
        <h2 className="hp-section-title">Education</h2>
        <ul className="hp-edu-list" aria-label="Education">
          <li className="hp-edu-item">
            <span className="hp-dot" aria-hidden="true" />
            <span>
              <strong>Centennial College</strong> — Software Engineering Technician (in progress)
            </span>
          </li>
          <li className="hp-edu-item">
            <span className="hp-dot" aria-hidden="true" />
            <span>
              <strong>Google</strong> — UX Design Professional Certificate
            </span>
          </li>
        </ul>
        <div className="hp-actions">
          <Link to="/education" className="hp-btn hp-btn-ghost">View Education</Link>
          <a
            href="/assets/Marlon_Haynes_Resume.pdf"
            className="hp-btn hp-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume (PDF)
          </a>
        </div>
      </section>

      {/* ===== Scoped styles ===== */}
      <style jsx="true">{`
        :root {
          --bg: #0b0d12;
          --text: #e8edf5;
          --muted: #9aa4b5;
          --surface: rgba(255,255,255,0.04);
          --surface-2: rgba(255,255,255,0.08);
          --brand1: #60a5fa;
          --brand2: #a78bfa;
        }

        .hp-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 72px;
          color: var(--text);
        }

        /* HERO */
        .hp-hero {
          text-align: center;
          margin-bottom: 18px;
        }
        .hp-eyebrow {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
          letter-spacing: 0.08em;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: #8ee6b7;
        }
        .hp-title {
          margin: 12px 0 6px;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hp-sub {
          margin: 0 auto;
          color: var(--muted);
          max-width: 720px;
          line-height: 1.6;
        }
        .hp-actions {
          display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
          margin: 12px 0 12px;
        }
        .hp-mission {
          color: var(--muted);
          margin: 8px auto 0;
          max-width: 760px;
        }

        /* BUTTONS */
        .hp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          color: var(--text);
          background: rgba(255,255,255,0.04);
          text-decoration: none;
          transition: transform .05s ease, filter .2s ease, opacity .2s ease;
        }
        .hp-btn:hover { filter: brightness(1.07); }
        .hp-btn:active { transform: translateY(1px); }
        .hp-btn-primary {
          background: linear-gradient(135deg, var(--brand1),var(--brand2));
          color: #0b0d12;
          font-weight: 800;
          border: none;
        }
        .hp-btn-ghost { background: transparent; }

        .hp-textlink {
          color: #a9c6ff;
          text-decoration: none;
        }
        .hp-textlink:hover { text-decoration: underline; }

        /* GLASS CARD WRAPPER */
        .hp-card {
          background:
            radial-gradient(120% 140% at 10% -10%, rgba(96,165,250,0.08), transparent 45%),
            radial-gradient(120% 140% at 110% -10%, rgba(167,139,250,0.08), transparent 45%),
            var(--surface);
          border: 1px solid var(--surface-2);
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        /* HIGHLIGHTS */
        .hp-highlights { padding: 22px 16px; margin-top: 22px; }
        .hp-section-title {
          text-align: center;
          margin: 0 0 12px;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 800;
        }
        .hp-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 14px;
        }
        .hp-service {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 16px;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .hp-service:hover {
          transform: translateY(-3px);
          border-color: rgba(99,102,241,0.45);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
        }
        .hp-ico {
          font-size: 1.4rem;
          width: 36px; height: 36px;
          display: grid; place-items: center;
          border-radius: 10px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.08);
        }
        .hp-service h3 { margin: 8px 0 6px; font-size: 1.06rem; }
        .hp-service p { color: var(--muted); margin: 0 0 8px; }
        .hp-link {
          color: #c8d8ff;
          position: relative;
          text-decoration: none;
        }
        .hp-link::after {
          content: "";
          position: absolute; left: 0; bottom: -2px;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, var(--brand1), var(--brand2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .25s ease;
        }
        .hp-link:hover::after { transform: scaleX(1); }

        /* FEATURED PROJECTS */
        .hp-featured { margin-top: 28px; }
        .hp-head {
          display: flex; justify-content: space-between; align-items: center; gap: 12px;
          margin-bottom: 10px;
        }
        @media (max-width: 640px){ .hp-head { flex-direction: column; align-items: flex-start; } }
        .hp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 14px;
        }
        .hp-project {
          position: relative;
          display: block;
          border-radius: 16px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .hp-project:hover {
          transform: translateY(-3px);
          border-color: rgba(99,102,241,0.45);
          box-shadow: 0 10px 24px rgba(0,0,0,0.25);
        }
        .hp-project img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
          background: #0e1118;
        }
        .hp-meta {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 12px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 70%);
        }
        .hp-meta h3 { margin: 0 0 2px; font-size: 1.05rem; color: #fff; }
        .hp-meta p { margin: 0; color: #cfd7e5; font-size: .95rem; }

        /* EDUCATION TEASER with glowing dots */
        .hp-edu { padding: 22px 16px; margin-top: 26px; text-align: center; }
        .hp-edu-list {
          list-style: none; padding: 0; margin: 10px auto 12px;
          max-width: 760px; display: grid; gap: 8px; text-align: left;
        }
        .hp-edu-item {
          display: grid;
          grid-template-columns: 14px 1fr;
          align-items: start;
          gap: 10px;
          color: #cfd7e5;
        }
        .hp-dot {
          width: 8px; height: 8px; margin-top: 6px; border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, var(--brand2), var(--brand1));
          box-shadow: 0 0 12px rgba(96,165,250,.55);
        }
      `}</style>
    </div>
  );
}
