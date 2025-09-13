export default function Services() {
  const offerings = [
    {
      title: "Web Development",
      text: "Responsive websites and single-page apps using React, Vite, and Node.js.",
      img: "/assets/web.jpg",
      imgSize: { width: "350px", height: "350px" }    },
    {
      title: "General Programming",
      text: "Java, C#, and JavaScript programming for academic or freelance projects.",
      img: "/assets/prog.jpg",
      imgSize: { width: "350px", height: "350px" }
    },
    {
      title: "Mobile Apps",
      text: "Cross-platform mobile apps using React Native and REST APIs.",
      img: "/assets/mobile.jpg",
      imgSize: { width: "350px", height: "350px" }
    },
  ];

  return (
    <main className="container container--narrow">
      <header className="page-header">
        <h1>Services</h1>
        <p className="muted">
          Key services and skills I provide to help bring projects to life.
        </p>
      </header>

      <section className="offer-grid">
        {offerings.map((o, idx) => (
          <article className="offer-card" key={idx}>
            <div
              className="offer-image-wrap"
              style={{
                width: o.imgSize?.width,
                height: o.imgSize?.height
              }}
            >
              <img
                src={o.img}
                alt={o.title}
                className="offer-image"
              />
            </div>
            <h3>{o.title}</h3>
            <p className="muted">{o.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
