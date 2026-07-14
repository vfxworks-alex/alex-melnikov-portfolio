import { useRef, type ReactNode } from "react";
import type { Project } from "../data/projects";
import {
  clients,
  contacts,
  experience,
  profile,
  services,
  stack,
  testimonials,
} from "../data/profile";

type SidebarProps = {
  selectedProject: Project | null;
  onBack: () => void;
};

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="profile-section" aria-labelledby={`${title.toLowerCase()}-title`}>
      <h2 id={`${title.toLowerCase()}-title`}>{title}</h2>
      {children}
    </section>
  );
}

function LogoMarquee() {
  return (
    <section className="client-slab" aria-label="Selected client logos">
      <p className="client-slab__label">Selected Clients</p>
      <div className="client-grid">
        {clients.map((client) => (
          <span className="logo-word" key={client}>
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}

function Overview() {
  return (
    <>
      <section className="intro-block">
        <div className="identity-row">
          <img
            className="profile-avatar"
            src={profile.avatar}
            alt={profile.name}
            width="400"
            height="400"
          />
          <div>
            <p className="eyebrow">{profile.role}</p>
            <h1>{profile.name}</h1>
          </div>
        </div>

        <p className="intro-copy">
          <strong>{profile.tagline}</strong>
          <span> {profile.intro}</span>
        </p>

        <div className="status-line">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <a className="primary-action" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </section>

      <LogoMarquee />

      <Section title="About">
        <p>{profile.about}</p>
        <dl className="stats-list">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Services">
        <div className="service-list">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Stack">
        <div className="tag-cloud" aria-label="Tools">
          {stack.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <div className="timeline-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.years}`}>
              <span>{item.years}</span>
              <h3>{item.company}</h3>
              <p className="role-line">{item.role}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Testimonials">
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name}>
              <div className="avatar-token" aria-hidden="true">
                {testimonial.avatar}
              </div>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Reach Out">
        <div className="contact-list">
          {contacts.map((contact) => (
            <a href={contact.href} key={contact.label}>
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}

function ProjectDetails({ project, onBack }: { project: Project; onBack: () => void }) {
  return (
    <section className="project-details" aria-live="polite">
      <button className="back-action" type="button" onClick={onBack}>
        Back to overview
      </button>

      <p className="eyebrow">{project.category}</p>
      <h2>{project.title}</h2>
      <p className="project-lede">{project.description}</p>

      <dl className="project-meta">
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{project.tools.join(", ")}</dd>
        </div>
      </dl>

      <div
        className={`project-still${project.videoAspect ? ` project-still--${project.videoAspect}-video` : ""}`}
      >
        {project.previewVideo ? (
          <video
            autoPlay
            muted
            playsInline
            loop
            controls
            preload="metadata"
            poster={project.poster}
            src={project.fullVideo ?? project.previewVideo}
            aria-label={`${project.title} full video`}
          />
        ) : (
          <img src={project.poster} alt={`${project.title} still frame`} />
        )}
      </div>
    </section>
  );
}

export function Sidebar({ selectedProject, onBack }: SidebarProps) {
  const sidebarRef = useRef<HTMLElement | null>(null);

  const scrollToSidebarTop = () => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="sidebar" aria-label="Profile and project information" ref={sidebarRef}>
      {selectedProject ? <ProjectDetails project={selectedProject} onBack={onBack} /> : <Overview />}

      <footer className="sidebar-footer">
        <span>© 2026 Alex Melnikov</span>
        <button type="button" aria-label="Scroll to top" onClick={scrollToSidebarTop}>
          Top
        </button>
      </footer>
    </aside>
  );
}
