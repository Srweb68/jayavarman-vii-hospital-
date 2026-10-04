import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Layout";
import { EventCard } from "@/components/site/Cards";
import { events } from "@/content/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Jayavarman VII Hospital" },
      { name: "description", content: "Symposiums, conferences, training and public events at Jayavarman VII Hospital." },
      { property: "og:title", content: "Events — Jayavarman VII Hospital" },
      { property: "og:description", content: "Upcoming symposiums, trainings and community events." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="Upcoming events" intro="Symposiums, conferences, hospital activities, public events and training." />
      <Section className="grid gap-5 pt-0 md:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => <EventCard key={i} item={e} />)}
      </Section>
    </>
  );
}
