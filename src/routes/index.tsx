import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Baby, Phone, MapPin, Clock, Mail } from "lucide-react";
import hero from "@/assets/hero.jpg";
import blood from "@/assets/blood.jpg";
import building from "@/assets/building.jpg";
import { Section, SectionHeading } from "@/components/site/Layout";
import { ServiceCard, StaffCard, NewsCard, EventCard } from "@/components/site/Cards";
import { hospital, services, staff, news, events } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jayavarman VII Hospital (Kantha Bopha III) — Free care for children & mothers" },
      { name: "description", content: "Free-of-charge pediatric and maternity healthcare for the community at Jayavarman VII Hospital (Kantha Bopha III)." },
      { property: "og:title", content: "Jayavarman VII Hospital — Caring for Children and Mothers" },
      { property: "og:description", content: "Free-of-charge pediatric and maternity healthcare for the community." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Section className="grid items-center gap-10 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium text-primary-deep">Free care · No cost to families</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">Caring for Children and Mothers</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{hospital.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/services" className="rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-soft">Learn About Our Services</Link>
            <Link to="/contact" className="glass rounded-full px-7 py-3.5 font-medium">Contact Us</Link>
            <Link to="/donations" className="glass rounded-full px-7 py-3.5 font-medium text-accent">Support the Hospital</Link>
          </div>
        </div>
        <div className="relative">
          <img src={hero} alt="A mother holding her baby while a nurse checks on them" width={1008} height={1200} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft" />
          <div className="glass absolute -bottom-6 left-4 rounded-2xl px-5 py-4 sm:-left-6">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-mint/15 text-mint"><Heart className="size-5" aria-hidden /></div>
              <div className="leading-tight"><div className="text-sm font-medium">Pediatric &amp; maternity care</div><div className="text-xs text-muted-foreground">Free of charge</div></div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="glass grid gap-8 rounded-[2rem] p-8 md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Welcome to {hospital.name}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{hospital.name} ({hospital.subtitle}) is a public hospital caring for children, mothers and families. [Official introduction to be provided.]</p>
            <Link to="/about" className="mt-5 inline-block text-sm font-medium text-primary hover:underline">About the hospital →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-primary/10 p-6"><Baby className="size-7 text-primary" aria-hidden /><h3 className="mt-3 font-medium">Free pediatric care</h3><p className="mt-1 text-sm text-muted-foreground">Care for babies and children at no cost to families.</p></div>
            <div className="rounded-2xl bg-accent/10 p-6"><Heart className="size-7 text-accent" aria-hidden /><h3 className="mt-3 font-medium">Free maternity care</h3><p className="mt-1 text-sm text-muted-foreground">Support for mothers before, during and after birth.</p></div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Care under one roof" link={{ to: "/services", label: "View all services" }} />
        <div className="grid gap-5 md:grid-cols-3">
          {services.slice(0, 3).map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-soft md:p-14">
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-medium">Blood donation · Community support</span>
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Your blood donation can help a child or mother in need</h2>
              <p className="mt-4 max-w-md opacity-80">Learn how you can support the hospital by giving blood or through other forms of support.</p>
              <Link to="/donations" className="mt-7 inline-block rounded-full bg-primary-foreground px-7 py-3.5 font-medium text-primary-deep">How to donate</Link>
            </div>
            <img src={blood} alt="A donor giving blood with a nurse" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </Section>

      <Section className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading title="Our staff" link={{ to: "/staff", label: "Meet the team" }} />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {staff.slice(0, 3).map((p, i) => <StaffCard key={i} person={p} />)}
          </div>
        </div>
        <div>
          <SectionHeading title="Latest news" link={{ to: "/news", label: "All news" }} />
          <div className="grid gap-4">{news.slice(0, 2).map((n, i) => <NewsCard key={i} item={n} />)}</div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Upcoming events" link={{ to: "/events", label: "All events" }} />
        <div className="grid gap-5 md:grid-cols-3">{events.map((e, i) => <EventCard key={i} item={e} />)}</div>
      </Section>

      <Section>
        <div className="glass grid items-center gap-10 rounded-[2rem] p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Hospital information &amp; contact</h2>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><MapPin className="size-5 shrink-0 text-primary" aria-hidden />{hospital.address}</li>
              <li className="flex gap-3"><Phone className="size-5 shrink-0 text-primary" aria-hidden />{hospital.phone}</li>
              <li className="flex gap-3"><Mail className="size-5 shrink-0 text-primary" aria-hidden />{hospital.email}</li>
              <li className="flex gap-3"><Clock className="size-5 shrink-0 text-primary" aria-hidden />{hospital.hours}</li>
            </ul>
            <Link to="/contact" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">Directions &amp; map</Link>
          </div>
          <img src={building} alt="The hospital building with families walking toward the entrance" loading="lazy" width={1200} height={800} className="aspect-[3/2] w-full rounded-2xl object-cover" />
        </div>
      </Section>
    </>
  );
}
