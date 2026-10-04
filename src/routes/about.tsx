import { createFileRoute } from "@tanstack/react-router";
import community from "@/assets/community.jpg";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jayavarman VII Hospital" },
      { name: "description", content: "Learn about Jayavarman VII Hospital (Kantha Bopha III), its mission, vision and role in the community." },
      { property: "og:title", content: "About Jayavarman VII Hospital" },
      { property: "og:description", content: "Mission, vision, values and free pediatric and maternity care." },
    ],
  }),
  component: About,
});

const blocks = [
  { title: "History", text: "[The hospital's official history will be added here.]" },
  { title: "Mission", text: "[Official mission statement to be provided.]" },
  { title: "Vision", text: "[Official vision statement to be provided.]" },
  { title: "Values", text: "[Hospital values to be provided — e.g. compassion, respect, access for all.]" },
  { title: "Role in the community", text: "[Description of the hospital's role in the community to be provided.]" },
  { title: "Pediatric and maternity care", text: "The hospital provides pediatric and maternity healthcare free of charge. [Further details to be provided.]" },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A public hospital for children, mothers and families" intro="Jayavarman VII Hospital (Kantha Bopha III) provides free-of-charge pediatric and maternity healthcare. [Official introduction to be provided.]" />
      <Section>
        <img src={community} alt="Nurses and midwives during a training session" loading="lazy" width={1200} height={800} className="aspect-[21/9] w-full rounded-3xl object-cover shadow-soft" />
      </Section>
      <Section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b) => (
          <article key={b.title} className="glass rounded-3xl p-7">
            <h2 className="text-xl font-medium">{b.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{b.text}</p>
          </article>
        ))}
      </Section>
    </>
  );
}
