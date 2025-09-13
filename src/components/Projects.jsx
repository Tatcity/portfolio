export default function Projects() {
  const projects = [
    {
      title: "Student Task Tracker",
      img: "/assets/project1.jpg",
      imgSize: { width: "220px", height: "160px" }, // 👈 you control size here
      role: "Lead developer — UML design, JavaFX, MySQL",
      outcome:
        "Built CRUD tasks with filtering and reporting to improve team productivity.",
      desc:
        "Designed and implemented a full JavaFX + MySQL desktop app with secure database access and UML documentation.",
    },
    {
      title: "NorBec Landscaping Site",
      img: "/assets/project2.jpg",
      imgSize: { width: "240px", height: "180px" },
      role: "Front-end & UX",
      outcome:
        "Delivered a mobile-first marketing site with booking system to increase client inquiries.",
      desc:
        "React + Vite single-page application deployed to Netlify with optimized SEO and responsive layouts.",
    },
    {
      title: "Portfolio (This Site)",
      img: "/assets/project3.jpg",
      imgSize: { width: "200px", height: "140px" },
      role: "Designer & Developer",
      outcome:
        "Created an accessible personal site to showcase projects and skills to potential employers.",
      desc:
        "Custom React components, responsive grid, and fast CI/CD pipeline using Vercel.",
    },
  ];

  return (
    <main className="container container--narrow">
      <header className="page-header">
        <h1>Projects</h1>
        <p className="muted">
          A selection of my work with role and outcome for each project.
        </p>
      </header>

      <section className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-card" key={i}>
            <div
              className="project-image-wrap"
              style={{
                width: p.imgSize?.width,
                height: p.imgSize?.height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 0.75rem",
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain", // full image always visible
                  display: "block",
                }}
              />
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-meta"><strong>Role:</strong> {p.role}</p>
            <p className="project-meta"><strong>Outcome:</strong> {p.outcome}</p>
            <p className="muted">{p.desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
