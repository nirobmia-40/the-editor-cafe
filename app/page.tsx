import ContactForm from "@/components/contact-form";

const projects = [
  { number: "01", category: "Brand film · 2024", title: "A slower kind of morning", className: "project-image project-image--morning", label: "Sunlight over a quiet coffee table" },
  { number: "02", category: "Editorial · 2024", title: "Objects with a past", className: "project-image project-image--objects", label: "Sculptural objects in a warm studio" },
  { number: "03", category: "Campaign · 2023", title: "Made for the in-between", className: "project-image project-image--inbetween", label: "A cinematic countryside landscape" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="The Editor Cafe home">
          <img src="/Pasted%20Image.png" alt="The Editor Cafe" width={66} height={66} style={{ objectFit: "contain", mixBlendMode: "multiply" }} />
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero__eyebrow"><span className="status-dot" />Independent creative studio · Est. 2020</div>
        <h1>Good stories<br />deserve <em>room</em><br />to breathe.</h1>
        <div className="hero__bottom">
          <p>We make films, images and identities<br />for people doing things with feeling.</p>
          <a className="round-link" href="#work" aria-label="Explore selected work"><span aria-hidden="true">↓</span></a>
          <span className="hero__location">Dhaka · Everywhere</span>
        </div>
        <div className="hero__art" aria-hidden="true">
          <div className="hero__sun" /><div className="hero__arch" />
          <div className="hero__cup"><span /></div><div className="hero__table" />
          <span className="hero__art-caption">A little space for good ideas</span>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><span className="eyebrow">A few recent favourites</span><h2>Selected work<span className="period">.</span></h2></div><span className="section-index">2023 — 2025</span></div>
        <div className="project-grid">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className={project.className} role="img" aria-label={project.label}><span className="project-number">{project.number}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
            <div className="project-meta"><h3>{project.title}</h3><span>{project.category}</span></div>
          </article>)}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about__stamp" aria-hidden="true"><span>MADE WITH CARE · MADE WITH CARE ·</span></div>
        <div className="about__content"><span className="eyebrow">A small studio, an open mind</span>
          <h2>We like the<br />details that make<br /><em>you, you.</em></h2>
          <p>The Editor Cafe is an independent creative studio for thoughtful brands and people. From the first scribble to the final frame, we bring curiosity, craft and a good cup of coffee to every story.</p>
          <a className="text-link" href="#contact">A little more about us <span aria-hidden="true">↗</span></a>
        </div>
        <div className="about__visual" role="img" aria-label="An inviting creative studio"><div className="about__visual-note">Ideas are better shared.</div></div>
      </section>

      <section className="services section-wrap"><span className="eyebrow">What we bring to the table</span>
        <div className="services__list">
          <div><span>01</span><h3>Film &amp; motion</h3><p>From first frame to final cut.</p></div>
          <div><span>02</span><h3>Photography</h3><p>Honest images with a point of view.</p></div>
          <div><span>03</span><h3>Art direction</h3><p>A clear world for your next big idea.</p></div>
          <div><span>04</span><h3>Brand stories</h3><p>Words and identities that feel like you.</p></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__intro"><span className="eyebrow">The kettle&apos;s on</span>
          <h2>Have a good<br />one <em>in mind?</em></h2>
          <p>Tell us a little about it. We&apos;ll take it from there.</p>
          <a className="contact-email" href="mailto:nirobmia2026@gmail.com">nirobmia2026@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <ContactForm />
      </section>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home" aria-label="The Editor Cafe home">
          <img src="/Pasted%20Image.png" alt="The Editor Cafe" width={54} height={54} style={{ objectFit: "contain", mixBlendMode: "multiply" }} />
        </a>
        <span>Independent by nature. Together by design.</span>
        <span>© {new Date().getFullYear()} The Editor Cafe</span>
        <a href="#home" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </main>
  );
}
