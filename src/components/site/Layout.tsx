import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { hospital, navItems } from "@/content/site";

export function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3">
      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-primary font-semibold text-primary-foreground">JV</div>
      <div className="min-w-0 leading-tight">
        <div className="truncate font-semibold">{hospital.name}</div>
        <div className="truncate text-[11px] text-muted-foreground">{hospital.subtitle} · Pediatric &amp; Maternity</div>
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 mx-auto max-w-7xl px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-5 text-sm text-muted-foreground xl:flex">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} className="hover:text-primary" activeProps={{ className: "font-medium text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link to="/donations" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft sm:inline-block">Donate Blood</Link>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-11 place-items-center rounded-xl bg-secondary xl:hidden">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="glass mt-2 grid gap-1 rounded-2xl p-3 xl:hidden">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-base hover:bg-secondary" activeProps={{ className: "bg-secondary font-medium text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6">
      <div className="glass grid gap-8 rounded-3xl p-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">{hospital.tagline}</p>
        </div>
        <div className="text-sm">
          <h2 className="mb-3 font-semibold">Pages</h2>
          <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
            {navItems.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-primary">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <h2 className="mb-3 font-semibold text-foreground">Contact</h2>
          <p>{hospital.address}</p>
          <p>{hospital.phone}</p>
          <p>{hospital.email}</p>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {hospital.name} ({hospital.subtitle})</p>
    </footer>
  );
}

export function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="animate-drift absolute -left-32 -top-40 size-[520px] rounded-full bg-primary/25 blur-3xl" />
      <div className="animate-drift absolute -right-40 top-1/3 size-[560px] rounded-full bg-accent/15 blur-3xl [animation-direction:reverse]" />
      <div className="animate-drift absolute bottom-0 left-1/4 size-[480px] rounded-full bg-mint/20 blur-3xl" />
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 ${className}`}>{children}</section>;
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <Section className="pt-14 sm:pt-20">
      <span className="glass inline-flex rounded-full px-4 py-1.5 text-xs font-medium text-primary-deep">{eyebrow}</span>
      <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
    </Section>
  );
}

export function SectionHeading({ title, link }: { title: string; link?: { to: string; label: string } }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {link && <Link to={link.to} className="text-sm font-medium text-primary hover:underline">{link.label}</Link>}
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-muted-foreground">{children}</p>;
}
