// src/components/Layout.jsx
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const [open, setOpen] = useState(false);

  const FALLBACKS = [
    `${import.meta.env.BASE_URL}assets/logo.png`,
    `${import.meta.env.BASE_URL}assets/project3.jpg`,
    `${import.meta.env.BASE_URL}assets/project3.jpeg`,
    `${import.meta.env.BASE_URL}assets/project1.jpg`,
  ];
  const [logoIndex, setLogoIndex] = useState(0);
  const logoSrc = FALLBACKS[Math.min(logoIndex, FALLBACKS.length - 1)];

  const navItems = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  // === Set your actual profile URLs ===
  const linkedInUrl = "https://www.linkedin.com/in/your-handle-here/";
  const githubUrl   = "https://github.com/your-handle-here";

  // === The images you put in /public/assets/ ===
  const linkedInImg = `${import.meta.env.BASE_URL}assets/linkedin.png`;
  const githubImg   = `${import.meta.env.BASE_URL}assets/github.png`;

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="header-inner">
          {/* Brand (logo + name) */}
          <div className="brand">
            <img
              src={logoSrc}
              alt="Logo"
              className="logo"
              onError={(e) => {
                const next = logoIndex + 1;
                if (next < FALLBACKS.length) {
                  setLogoIndex(next);
                } else {
                  e.currentTarget.style.display = "none";
                }
              }}
            />
            <div className="brand-stack">
              <span className="brand-name">Marlon Haynes</span>
              <span className="brand-tag">Front-End Developer</span>
            </div>
          </div>

          {/* Nav + Social images */}
          <div className="header-right">
            <nav className="nav desktop-nav" aria-label="Primary">
              {navItems.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    "navlink" + (isActive ? " active" : "")
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Clickable pictures */}
            <div className="socials">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="social-pic-link"
              >
                <img
                  src={linkedInImg}
                  alt="LinkedIn"
                  className="social-pic"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="social-pic-link"
              >
                <img
                  src={githubImg}
                  alt="GitHub"
                  className="social-pic"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className={"nav-toggle" + (open ? " open" : "")}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={"mobile-drawer" + (open ? " show" : "")}
          onClick={() => setOpen(false)}
        >
          {navItems.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                "mobile-link" + (isActive ? " active" : "")
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile socials with pictures */}
          <div className="mobile-socials" onClick={(e) => e.stopPropagation()}>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="social-pic-link"
            >
              <img
                src={linkedInImg}
                alt="LinkedIn"
                className="social-pic"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="social-pic-link"
            >
              <img
                src={githubImg}
                alt="GitHub"
                className="social-pic"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </a>
          </div>
        </div>
      </header>

      <main className="site-main">
        <ScrollToTop behavior="smooth" />
        <Outlet />
      </main>

      <Footer />

      <style jsx="true">{`
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: saturate(130%) blur(8px);
          background: rgba(10, 12, 18, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          width: 100%;
        }
        .header-inner {
          width: 100%;
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .brand-stack { display: flex; flex-direction: column; }
        .brand-name { font-weight: 700; }
        .brand-tag { color: #9aa4b5; font-size: 0.9rem; }
        .logo {
          height: 124px; width: 124px; border-radius: 12px;
          object-fit: cover; display: block;
        }

        .header-right { display: flex; align-items: center; gap: 16px; }
        .nav { display: flex; gap: 18px; }
        .navlink { padding: 8px 10px; border-radius: 8px; }
        .navlink:hover { background: rgba(255,255,255,0.06); }
        .navlink.active { background: rgba(255,255,255,0.1); }

        /* Picture buttons */
        .socials { display: flex; align-items: center; gap: 10px; }
        .social-pic-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          text-decoration: none;
        }
        .social-pic-link:hover { background: rgba(255,255,255,0.12); }
        .social-pic {
          width: px; height: 40px;

          display: block;
        }

        .nav-toggle {
          display: none;
          width: 42px; height: 34px;
          border: none; border-radius: 10px;
          background: rgba(255,255,255,0.08);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }
        .nav-toggle span {
          width: 22px; height: 2px;
          background: #e8edf5;
          border-radius: 2px;
          transition: all 0.2s;
        }
        .nav-toggle.open span:nth-child(1) { transform: rotate(45deg) translateY(7px); }
        .nav-toggle.open span:nth-child(2) { opacity: 0; }
        .nav-toggle.open span:nth-child(3) { transform: rotate(-45deg) translateY(-7px); }

        .mobile-drawer {
          position: fixed; top: 65px; left: 0; right: 0;
          background: #121621;
          padding: 16px; gap: 10px;
          display: flex; flex-direction: column;
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.2s ease, opacity 0.2s ease;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .mobile-drawer.show { transform: translateY(0); opacity: 1; pointer-events: auto; }
        .mobile-link {
          padding: 12px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
        }
        .mobile-link.active,
        .mobile-link:hover { background: rgba(255,255,255,0.1); }
        .mobile-socials { display: flex; gap: 12px; margin-top: 8px; }

        .site-main {
          flex: 1; width: 100%;
          padding: 16px 24px 32px;
          display: flow-root;
        }

        @media (max-width: 960px) {
          .desktop-nav { display: none; }
          .nav-toggle { display: flex; }
          .socials { display: none; }
        }
      `}</style>
    </div>
  );
}
