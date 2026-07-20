import { useRef, type ReactNode } from "react";
import {
  clients,
  contactIntro,
  contacts,
  experience,
  profile,
  services,
  stack,
  stackDescription,
  testimonials,
} from "../data/profile";

type SectionProps = {
  title: string;
  children: ReactNode;
};

const clientMarqueeCopies = [false, true] as const;

function Section({ title, children }: SectionProps) {
  const sectionSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const titleId = `${sectionSlug}-title`;

  return (
    <section
      id={sectionSlug}
      className={`profile-section profile-section--${sectionSlug}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId}>{title}</h2>
      {children}
    </section>
  );
}

function LogoMarquee() {
  return (
    <div className="client-slab" role="group" aria-label="Selected client logos">
      <div className="client-marquee">
        <div className="client-track">
          {clientMarqueeCopies.map((isDuplicate) => (
            <div
              className="client-grid"
              aria-hidden={isDuplicate ? true : undefined}
              key={isDuplicate ? "duplicate" : "primary"}
            >
              {clients.map((client) => (
                <img
                  className="client-logo"
                  src={client.logo}
                  alt={isDuplicate ? "" : client.name}
                  width="264"
                  height="102"
                  decoding="async"
                  key={client.name}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <>
      <section className="intro-block" aria-label="About Alex">
        <div className="identity-row">
          <img
            className="profile-avatar"
            src={profile.avatar}
            alt={profile.name}
            width="400"
            height="400"
          />
          <div>
            <h1>{profile.name}</h1>
            <p className="identity-role">{profile.role}</p>
          </div>
        </div>

        <div className="intro-about">
          <p className="about-copy">{profile.about}</p>
        </div>

        <div className="intro-cta">
          <a className="primary-action" href="#reach-out">
            Get in touch
          </a>

          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </div>

          <div className="stats-panel">
            <dl className="stats-list">
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
            <LogoMarquee />
          </div>
        </div>
      </section>

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
        <p className="stack-description">{stackDescription}</p>
        <div className="tag-cloud" aria-label="Tools">
          {stack.map((tool) => (
            <span key={tool.name}>
              <img src={tool.icon} alt="" width="28" height="28" loading="lazy" decoding="async" />
              {tool.name}
            </span>
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
              {testimonial.avatar.startsWith("/") ? (
                <img
                  className="avatar-token"
                  src={testimonial.avatar}
                  alt=""
                  width="42"
                  height="42"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="avatar-token" aria-hidden="true">
                  {testimonial.avatar}
                </div>
              )}
              <div className="testimonial-content">
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span aria-hidden="true">•</span>
                  <span>{testimonial.role}</span>
                </figcaption>
                <blockquote>“{testimonial.quote}”</blockquote>
              </div>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Reach out">
        <p className="reachout-copy">{contactIntro}</p>
        <div className="contact-list">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.label}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M4 12 12 4M6 4h6v6" />
              </svg>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}

export function Sidebar() {
  const sidebarRef = useRef<HTMLElement | null>(null);

  const scrollToSidebarTop = () => {
    if (sidebarRef.current) {
      sidebarRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="sidebar" aria-label="Profile and project information" ref={sidebarRef}>
      <Overview />

      <footer className="sidebar-footer">
        <span>© 2026 Alex Melnikov</span>
        <button type="button" aria-label="Scroll to top" onClick={scrollToSidebarTop}>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 13V3M4 7l4-4 4 4" />
          </svg>
          Top
        </button>
      </footer>
    </aside>
  );
}
