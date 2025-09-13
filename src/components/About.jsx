// src/components/About.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function About({
  // Manually control the avatar
  photoSize = 200,           // number (pixels)
  photoShape = "rounded",    // "square" | "rounded" | "circle"
}) {
  // Map the photoShape to a border radius
  const radius =
    photoShape === "circle" ? "50%" : photoShape === "rounded" ? "16px" : "0px";

  const photoStyle = {
    width: photoSize,
    height: photoSize,
    borderRadius: radius,
    objectFit: "cover",
  };

  return (
    <div className="ab-wrap">
      {/* HERO */}
      <section className="ab-hero">
        <div className="ab-photo-wrap" style={{ width: photoSize, height: photoSize }}>
          <img
            src="/assets/M1.jpg"
            alt="Marlon Haynes"
            className="ab-photo"
            style={photoStyle} // ← manual size & shape here
          />
          <span className="ab-photo-ring" aria-hidden="true" />
        </div>

        <h1 className="ab-title">Marlon Haynes</h1>
        <p className="ab-sub">Front-End Developer • Toronto, Canada</p>

        <div className="ab-chips" role="list" aria-label="Focus areas">
          <span className="ab-chip" role="listitem">React</span>
          <span className="ab-chip" role="listitem">UX</span>
          <span className="ab-chip" role="listitem">Performance</span>
          <span className="ab-chip" role="listitem">Accessibility</span>
        </div>
      </section>

      {/* ABOUT CARD */}
      <section className="ab-card">
        <div className="ab-copy">
          <p>
            I’m a Toronto-based developer focused on building fast, accessible, and
            user-friendly web apps. I value clean UI, maintainable code, and
            collaborative problem solving.
          </p>
          <p>
            I’m completing my Software Engineering Technician diploma at Centennial
            College and the Google UX Design Professional Certificate, eager to
            contribute to teams where I can ship quality features and keep learning
            every day.
          </p>
        </div>

        {/* Highlights with glowing dots */}
        <ul className="ab-highlights" aria-label="Highlights">
          <li className="ab-hi">
            <span className="ab-dot" aria-hidden="true" />
            <span>SPA and component-driven development with React + Router</span>
          </li>
          <li className="ab-hi">
            <span className="ab-dot" aria-hidden="true" />
            <span>Design-systems thinking, semantic HTML, and WCAG-minded UI</span>
          </li>
          <li className="ab-hi">
            <span className="ab-dot" aria-hidden="true" />
            <span>API integration, state management, and performance tuning</span>
          </li>
        </ul>

        {/* CTAs */}
        <div className="ab-cta">
          <Link className="ab-btn ab-btn-primary" to="/projects">View Projects</Link>
          <Link className="ab-btn" to="/contact">Contact Me</Link>
        </div>
      </section>

      {/* Scoped styles */}
      <style jsx="true">{`
        :root {
          --bg: #0b0d12;
          --text: #e8edf5;
          --muted: #9aa4b5;
          --surface: rgba(255,255,255,0.04);
          --surface-2: rgba(255,255,255,0.08);
          --brand1: #60a5fa;
          --brand2: #a78bfa;
          --ring: #7dd3fc;
        }

        .ab-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg);
          color: var(--text);
        }

        /* HERO */
        .ab-hero {
          text-align: center;
          padding: 48px 16px 10px;
        }

        .ab-photo-wrap {
          position: relative;
          display: inline-block;
        }
        .ab-photo {
          display: block;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }
        .ab-photo-ring {
          position: absolute;
          inset: -6px;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--brand1), transparent 40%, var(--brand2));
          opacity: 0.35;
          filter: blur(12px);
          z-index: -1;
        }

        .ab-title {
          margin: 18px 0 4px;
          font-size: clamp(28px, 4.5vw, 44px);
          font-weight: 900;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--brand1), var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .ab-sub {
          margin: 0;
          color: var(--muted);
        }

        .ab-chips {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .ab-chip {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: var(--text);
        }

        /* CARD */
        .ab-card {
          max-width: 900px;
          margin: 18px auto 36px;
          padding: 24px 18px 26px;
          background:
            radial-gradient(120% 140% at 10% -10%, rgba(96,165,250,0.08), transparent 45%),
            radial-gradient(120% 140% at 110% -10%, rgba(167,139,250,0.08), transparent 45%),
            var(--surface);
          border: 1px solid var(--surface-2);
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }
        @media (min-width: 640px) {
          .ab-card { padding: 30px 26px 32px; }
        }

        .ab-copy {
          text-align: center;
          display: grid;
          gap: 10px;
          color: rgba(232,237,245,0.95);
        }

        /* Highlights with glowing dots */
        .ab-highlights {
          margin: 16px auto 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
          max-width: 760px;
        }
        .ab-hi {
          display: grid;
          grid-template-columns: 14px 1fr;
          gap: 10px;
          align-items: start;
          color: rgba(255,255,255,0.9);
        }
        .ab-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          background: radial-gradient(circle at 40% 40%, var(--brand2), var(--brand1));
          box-shadow: 0 0 12px rgba(96,165,250,0.55);
        }

        /* CTAs */
        .ab-cta {
          margin-top: 18px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .ab-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          color: var(--text);
          background: rgba(255,255,255,0.04);
          text-decoration: none;
          transition: filter .2s ease, transform .05s ease;
        }
        .ab-btn:hover { filter: brightness(1.07); }
        .ab-btn:active { transform: translateY(1px); }
        .ab-btn-primary {
          background: linear-gradient(135deg, var(--brand1), var(--brand2));
          color: #0b0d12;
          font-weight: 800;
          border: none;
        }
      `}</style>
    </div>
  );
}
