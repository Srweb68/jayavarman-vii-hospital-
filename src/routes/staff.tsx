import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { StaffCard } from "@/components/site/Cards";
import { staff, staffCategories } from "@/content/site";

export const Route = createFileRoute("/staff")({
  head: () => ({
    meta: [
      { title: "Staff — Jayavarman VII Hospital" },
      { name: "description", content: "Meet the doctors, nurses, midwives, pharmacists and support staff of Jayavarman VII Hospital." },
      { property: "og:title", content: "Our Staff — Jayavarman VII Hospital" },
      { property: "og:description", content: "Everyone who cares for children and mothers at the hospital." },
    ],
  }),
  component: StaffPage,
});

function StaffPage() {
  return (
    <>
      <PageHero eyebrow="Our people" title="Our staff" intro="Everyone at the hospital — doctors, nurses, midwives, pharmacists, laboratory, technical, administrative and support staff — works together to care for children and mothers." />
      <Section className="pt-0">
        <ul className="flex flex-wrap gap-2">
          {staffCategories.map((c) => <li key={c} className="glass rounded-full px-4 py-2 text-sm">{c}</li>)}
        </ul>
      </Section>
      <Section className="grid grid-cols-1 gap-5 pt-0 sm:grid-cols-2 lg:grid-cols-4">
        {staff.map((p, i) => <StaffCard key={i} person={p} />)}
      </Section>
    </>
  );
}
