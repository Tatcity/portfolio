// src/components/Footer.jsx
import React from "react";

export default function Footer({
  email = "you@example.com",
  resumeHref = "/assets/Marlon_Haynes_Resume.pdf",
  links = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Education", href: "/education" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  socials = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Email", href: `mailto:${email}` },
  ],
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft-inner">
        {/* Left: CTA */}
        <div className="ft-cta">
          <h3 className="ft-title">Let’s build something great.</h3>
          <p className="ft-sub">Open to internships, junior roles, and freelance work.</p>
          <div className="ft-actions">
            <a className="ft-btn ft-btn-primary" href="/contact">Contact Me</a>
            <a className="ft-btn" href={resumeHref} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </div>

        {/* Middle: quick links */}
        <nav className="ft-links" aria-label="Site">
          <h4 className="ft-h4">Explore</h4>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: contact */}
        <div className="ft-contact">
          <h4 className="ft-h4">Contact</h4>
          <a className="ft-email" href={`mailto:${email}`}>{email}</a>
          <ul className="ft-socials" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}><a href={s.href}>{s.label} ↗</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ft-bottom">
        <span>© {year} Marlon Haynes</span>
        <span>React • UX • Performance</span>
      </div>

      <style jsx="true">{`
        :root {
          --text: #e8edf5;
          --muted: #9aa4b5;
          --brand1: #60a5fa;
          --brand2: #a78bfa;
          --surface: rgba(255,255,255,.03);
          --border: rgba(255,255,255,.08);
        }
        .ft {
          margin-top: 32px;
          border-top: 1px solid var(--border);
          background:
            radial-gradient(120% 140% at 10% -10%, rgba(96,165,250,0.08), transparent 45%),
            radial-gradient(120% 140% at 110% -10%, rgba(167,139,250,0.08), transparent 45%),
            var(--surface);
        }
        .ft-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: 20px;
          padding: 22px 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .ft-inner {
            grid-template-columns: 1.2fr .8fr .8fr;
          }
        }

        .ft-title {
          margin: 0 0 6px;
          font-size: clamp(18px,2.2vw,24px);
          font-weight: 800;
          background: linear-gradient(135deg,var(--brand1),var(--brand2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-align: center;
        }
        .ft-sub { 
          margin: 0 0 10px; 
          color: var(--muted); 
          text-align: center;
        }
        .ft-actions { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 10px; 
          justify-content: center; 
          margin-top: 12px; 
        }
        .ft-btn {
          display:inline-flex;align-items:center;justify-content:center;
          padding:10px 14px;border-radius:12px;color:var(--text);
          border:1px solid var(--border); text-decoration:none;
          background: rgba(255,255,255,.04); transition: filter .2s, transform .05s;
        }
        .ft-btn:hover { filter: brightness(1.07); }
        .ft-btn:active { transform: translateY(1px); }
        .ft-btn-primary {
          background: linear-gradient(135deg,var(--brand1),var(--brand2));
          color:#0b0d12; border:none; font-weight:800;
        }

        .ft-h4 { margin: 0 0 8px; font-size: 14px; color: var(--muted); text-align: center; }
        .ft-links ul {
          list-style:none;
          padding:0;
          margin:0;
          display:flex;
          flex-direction: column;
          align-items: center;
          gap:8px;
        }
        .ft-links li { margin: 0; }
        .ft-links a {
          color: var(--text);
          text-decoration:none;
        }
        .ft-links a:hover { text-decoration: underline; }

        .ft-email {
          display:block;
          margin-bottom:8px;
          color:#c8d8ff;
          text-decoration:none;
        }
        .ft-email:hover { text-decoration: underline; }
        .ft-contact {
          text-align: center;
        }
        .ft-socials {
          list-style:none;
          padding:0;
          margin:8px 0 0;
          display:flex;
          flex-direction: column;
          gap:6px;
          align-items: center;
        }
        .ft-socials a { color:#c8d8ff; text-decoration:none; }
        .ft-socials a:hover { text-decoration: underline; }

        .ft-bottom {
          border-top:1px solid var(--border);
          display:flex;
          gap:10px;
          justify-content:center;
          flex-wrap:wrap;
          color: var(--muted);
          font-size:.9rem;
          padding:12px 16px;
        }
      `}</style>
    </footer>
  );
}
