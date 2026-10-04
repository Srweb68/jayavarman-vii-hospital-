import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/Cards";
import { services } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Jayavarman VII Hospital" },
      { name: "description", content: "Free pediatric and maternity care, plus the hospital's other departments and services." },
      { property: "og:title", content: "Services — Jayavarman VII Hospital" },
      { property: "og:description", content: "Pediatric care, maternity care and other hospital services." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const featured = services.filter((s) => s.featured);
  const other = services.filter((s) => !s.featured);
  return (
    <>
      <PageHero eyebrow="Services" title="Care we provide" intro="Our central purpose is free-of-charge care for children and mothers. Other services support this work. [Service list to be confirmed by the hospital.]" />
      <Section className="grid gap-5 pt-0 md:grid-cols-2">
        {featured.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
      </Section>
      <Section>
        <SectionHeading title="Other hospital services" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((s, i) => <ServiceCard key={s.name} service={s} index={i + 2} />)}
        </div>
      </Section>
    </>
  );
}
