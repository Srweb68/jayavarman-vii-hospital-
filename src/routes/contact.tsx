import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Navigation, Siren } from "lucide-react";
import { PageHero, Section } from "@/components/site/Layout";
import { hospital } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jayavarman VII Hospital" },
      { name: "description", content: "Address, phone, opening information and directions to Jayavarman VII Hospital." },
      { property: "og:title", content: "Contact Jayavarman VII Hospital" },
      { property: "og:description", content: "How to reach and find the hospital." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { icon: MapPin, label: "Address", value: hospital.address },
    { icon: Phone, label: "Phone", value: hospital.phone },
    { icon: Siren, label: "Emergency", value: hospital.emergencyPhone },
    { icon: Mail, label: "Email", value: hospital.email },
    { icon: Clock, label: "Opening / contact hours", value: hospital.hours },
    { icon: Navigation, label: "Directions", value: hospital.directions },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title={`${hospital.name} (${hospital.subtitle})`} intro="Find the hospital and get in touch." />
      <Section className="grid gap-6 pt-0 lg:grid-cols-2">
        <ul className="glass grid gap-5 rounded-3xl p-8">
          {rows.map((r) => (
            <li key={r.label} className="flex gap-4">
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><r.icon className="size-5" aria-hidden /></div>
              <div><div className="text-sm text-muted-foreground">{r.label}</div><div className="font-medium">{r.value}</div></div>
            </li>
          ))}
        </ul>
        <div className="glass overflow-hidden rounded-3xl">
          <iframe
            title="Map showing the hospital location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.mapQuery)}&output=embed`}
            className="h-full min-h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
