import "bootstrap/dist/css/bootstrap.min.css";

export default function TimelineSection() {
  const events = [
    { year: "20 April 2026 - 23 May 2026", title: "Open Registration: Offline Competition", desc: "J-song, Coswalk SMA, Coswalk Umum, Dance Cover, Project Sekai Tournament", color: "var(--blue)" },
    { year: "20 April 2026 - 24 May 2026", title: "Open Registration: Online Competition", desc: "Ilustrasi Digital, Poster SMA", color: "var(--blue)" },
    { year: "20 April 2026 - 25 May 2026", title: "Submission Period: Online Competition", desc: "", color: "var(--yellow)" },
    { year: "26 May 2026", title: "Technical Meeting: Offline Competition", desc: "via online", color: "var(--blue)" },
    { year: "30 May 2026", title: "Day 1 Event", desc: "J-song, Coswalk Umum, Coswalk SMA", color: "var(--yellow)" },
    { year: "31 May 2026", title: "Day 2 Event", desc: "Dance Cover, Project Sekai Tournament", color: "var(--yellow)" },
    { year: "31 May 2026", title: "Winner Announcement: Online Competition", desc: "", color: "var(--pink)" },
  ];

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold timeline-title">Timeline</h1>
        </div>

        <ul className="timeline-list">

        {events.map((e, i) => (
            <li key={i} style={{ "--dot-color": e.color, "--card-color": e.color} as React.CSSProperties}>
            <div className="timeline_content">
                <div className="timeline-year">{e.year}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
            </div>
            </li>
        ))}

        </ul>

      </div>
    </section>
  );
}