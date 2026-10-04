import { createFileRoute, Link } from "@tanstack/react-router";
import blood from "@/assets/blood.jpg";
import { PageHero, Section } from "@/components/site/Layout";
import { hospital } from "@/content/site";

export const Route = createFileRoute("/donations")({
  head: () => ({
    meta: [
      { title: "Donations — Jayavarman VII Hospital" },
      { name: "description", content: "Support the hospital through blood donation or financial and other donations." },
      { property: "og:title", content: "Support Jayavarman VII Hospital" },
      { property: "og:description", content: "Give blood or support free care for children and mothers." },
    ],
  }),
  component: Donations,
});

const bloodInfo = [
  { title: "Why blood donation matters", text: "Donated blood can help children and mothers receiving care at the hospital. [Further details to be provided.]" },
  { title: "Who can donate", text: "[Donor eligibility requirements to be confirmed by the hospital.]" },
  { title: "How to donate", text: "[Donation procedure, location and times to be confirmed.]" },
  { title: "Contact", text: `${hospital.phone} · ${hospital.email}` },
];

function Donations() {
  return (
    <>
      <PageHero eyebrow="Support the hospital" title="Donations" intro="There are two ways to support the hospital: giving blood, and financial or other support." />
      <Section className="pt-0">
        <div className="rounded-[2rem] bg-gradient-primary p-8 text-primary-foreground shadow-soft md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Blood donation</h2>
              <p className="mt-4 opacity-80">Giving blood is one of the most direct ways to help.</p>
            </div>
            <img src={blood} alt="A donor giving blood" loading="lazy" width={1200} height={912} className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {bloodInfo.map((b) => (
              <div key={b.title} className="rounded-2xl bg-primary-foreground/10 p-6">
                <h3 className="font-medium">{b.title}</h3>
                <p className="mt-2 text-sm opacity-80">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="glass rounded-[2rem] p-8 md:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">Financial &amp; other donations</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Your support helps the hospital continue providing free care. Official donation methods will be published here once confirmed.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-muted p-6"><h3 className="font-medium">Financial donations</h3><p className="mt-2 text-sm text-muted-foreground">[Official donation details to be provided by the hospital.]</p></div>
            <div className="rounded-2xl bg-muted p-6"><h3 className="font-medium">Other support</h3><p className="mt-2 text-sm text-muted-foreground">[Information about other forms of support to be provided.]</p></div>
          </div>
          <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">Contact us about donating</Link>
        </div>
      </Section>
    </>
  );
}
