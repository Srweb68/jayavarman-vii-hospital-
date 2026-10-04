import { Link } from "@tanstack/react-router";
import { Baby, HeartPulse, Ambulance, Scissors, FlaskConical, Pill, ScanLine, Stethoscope, CalendarDays, MapPin, User } from "lucide-react";
import type { EventItem, NewsItem, Service, Staff } from "@/content/site";

const icons: Record<string, typeof Baby> = {
  "Pediatric Care": Baby, "Maternity Care": HeartPulse, "Emergency Care": Ambulance, Surgery: Scissors,
  Laboratory: FlaskConical, Pharmacy: Pill, "Diagnostic Services": ScanLine,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.name] ?? Stethoscope;
  const tone = service.featured ? (index === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent") : "bg-mint/10 text-mint";
  return (
    <article className={`glass flex flex-col rounded-3xl p-7 ${service.featured ? "ring-2 ring-primary/20" : ""}`}>
      <div className={`grid size-12 place-items-center rounded-2xl ${tone}`}><Icon className="size-6" aria-hidden /></div>
      {service.featured && <span className="mt-4 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Free of charge</span>}
      <h3 className="mt-4 text-xl font-medium">{service.name}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{service.description}</p>
      <Link to="/contact" className="mt-5 text-sm font-medium text-primary hover:underline">More information →</Link>
    </article>
  );
}

export function StaffCard({ person }: { person: Staff }) {
  return (
    <article className="glass rounded-2xl p-4">
      <div className="grid aspect-square w-full place-items-center rounded-xl bg-muted text-muted-foreground" role="img" aria-label="Staff photo placeholder">
        <User className="size-12" aria-hidden />
      </div>
      <h3 className="mt-3 font-medium">{person.name}</h3>
      <p className="text-sm text-primary">{person.position}</p>
      <p className="text-xs text-muted-foreground">{person.department} · {person.category}</p>
      <p className="mt-2 text-sm text-muted-foreground">{person.description}</p>
    </article>
  );
}

export function NewsCard({ item, image }: { item: NewsItem; image?: string | undefined }) {
  return (
    <article className="glass flex flex-col overflow-hidden rounded-3xl">
      {image && <img src={image} alt="" loading="lazy" className="aspect-[16/9] w-full object-cover" />}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{item.tag}</span>
          <span className="text-xs text-muted-foreground">{item.date}</span>
        </div>
        <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{item.summary}</p>
        <Link to="/news" className="mt-4 text-sm font-medium text-primary hover:underline">Read more →</Link>
      </div>
    </article>
  );
}

export function EventCard({ item }: { item: EventItem }) {
  return (
    <article className="glass rounded-3xl p-6">
      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{item.type}</span>
      <h3 className="mt-3 text-lg font-medium">{item.title}</h3>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-4" aria-hidden />{item.date}</span>
        <span className="inline-flex items-center gap-1.5"><MapPin className="size-4" aria-hidden />{item.location}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
    </article>
  );
}
