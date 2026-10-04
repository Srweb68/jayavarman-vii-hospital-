import { createFileRoute } from "@tanstack/react-router";
import community from "@/assets/community.jpg";
import building from "@/assets/building.jpg";
import hero from "@/assets/hero.jpg";
import { PageHero, Section } from "@/components/site/Layout";
import { NewsCard } from "@/components/site/Cards";
import { news } from "@/content/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Jayavarman VII Hospital" },
      { name: "description", content: "Hospital announcements, health information, activities and public notices." },
      { property: "og:title", content: "News — Jayavarman VII Hospital" },
      { property: "og:description", content: "Announcements, health information and hospital activities." },
    ],
  }),
  component: NewsPage,
});

const images = [building, hero, community];

function NewsPage() {
  return (
    <>
      <PageHero eyebrow="News" title="News & announcements" intro="Hospital announcements, health information, activities, public information and important notices." />
      <Section className="grid gap-5 pt-0 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n, i) => <NewsCard key={i} item={n} image={images[i % images.length]} />)}
      </Section>
    </>
  );
}
