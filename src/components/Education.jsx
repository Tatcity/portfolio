import { useState } from "react";

export default function Education() {
  const items = [
    {
      degree: "Software Engineering Technician (Diploma)",
      institution: "Centennial College",
      location: "Scarborough, ON", // fixed typo
      start: "Sept 2024",
      end: "Dec 2025",
      // Removed the old courses subheading per your request:
      // notes: ["Courses: React/Node, REST APIs, Oracle SQL, UML & testing"],
      notes: [], // keep structure, but no courses line
    },
    {
      degree: "UX Design Professional Certificate",
      institution: "Google (Coursera)",
      location: "Remote",
      start: "2025",
      end: "2025",
    },
  ];

  const tabs = [
    {
      key: "diploma",
      label: "Diploma",
      subtitle: "Centennial College (in progress)",
      img: "/assets/centennial-diploma.jpg",
      link: "",
    },
    {
      key: "google",
      label: "Google UX Certificate",
      subtitle: "Google (Coursera)",
      img: "/assets/gc.jpg",
      link: "https://coursera.org/share/0d98e884182bba7af8077dbdc188eaf8",
    },
  ];

  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active);

  // If you deploy under a subpath, use BASE_URL so the link still works:
  const resumeHref = `${import.meta.env.BASE_URL ?? "/"}resume.pdf`;

  return (
    <main className="container container--narrow">
      <header className="page-header">
        <h1>Education</h1>
        <p className="muted">
          Educational & professional qualifications
        </p>
      </header>

      <section className="card edu">
        <div className="edu-table" role="table" aria-label="Education">
          <div className="edu-row edu-head" role="row">
            <div className="edu-cell" role="columnheader">Degree / Certificate</div>
            <div className="edu-cell" role="columnheader">Institution</div>
            <div className="edu-cell" role="columnheader">Location</div>
            <div className="edu-cell" role="columnheader">Dates</div>
          </div>

          {items.map((it, i) => (
            <div className="edu-row" role="row" key={i}>
              <div className="edu-cell" role="cell">
                {/* Degree title with glowing dot */}
                <div className="edu-degree-line">
                  <span className="edu-dot" aria-hidden="true" />
                  <strong className="edu-degree">{it.degree}</strong>
                </div>

                {/* Notes list with glowing dots (only shows if notes exist) */}
                {it.notes?.length ? (
                  <ul className="edu-notes">
                    {it.notes.map((n, j) => (
                      <li key={j} className="edu-li">
                        <span className="edu-dot-sm" aria-hidden="true" />
                        <span className="edu-li-text">{n}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="edu-cell" role="cell">{it.institution}</div>
              <div className="edu-cell" role="cell">{it.location}</div>
              <div className="edu-cell" role="cell">
                <span className="edu-dates">{it.start} — {it.end}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="edu-actions">
          {/* Put resume.pdf in /public (e.g., /public/resume.pdf) */}
          <a className="btn btn-primary" href={resumeHref} download>
            Download Resume
          </a>
          {/* Removed “See Related Projects” */}
        </div>
      </section>

      <section className="card certs">
        <div className="tabs" role="tablist" aria-label="Certificates">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={active === t.key}
              className={`tab ${active === t.key ? "is-active" : ""}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="cert-head">
          <div>
            <h3 className="cert-title">{current.label}</h3>
            <p className="muted">{current.subtitle}</p>
          </div>
          {current.link ? (
            <a className="btn" href={current.link} target="_blank" rel="noreferrer">
              Open Verification
            </a>
          ) : null}
        </div>

        <div className="cert-viewer">
          <img src={current.img} alt={current.label} className="cert-img" />
        </div>
        <p className="muted cert-note"></p>
      </section>

      {/* Minimal, local styles just for dots (won’t disturb your existing CSS) */}
      <style jsx="true">{`
        .edu-degree-line {
          display: inline-flex;
          align-items: flex-start;
          gap: 0.6rem;
        }
        /* Large glowing dot beside degree title (matches contact page vibe) */
        .edu-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #a78bfa, #60a5fa);
          box-shadow: 0 0 12px rgba(96, 165, 250, 0.55);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        }
        .edu-li {
          display: grid;
          grid-template-columns: 14px 1fr;
          align-items: start;
          gap: 0.5rem;
        }
        .edu-dot-sm {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, #a78bfa, #60a5fa);
          box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
          margin-top: 0.35rem;
        }
        .edu-li-text {
          color: rgba(255, 255, 255, 0.88);
        }
      `}</style>
    </main>
  );
}
