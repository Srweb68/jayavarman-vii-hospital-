/**
 * ALL WEBSITE CONTENT LIVES HERE.
 * Edit this file to update hospital info, staff, services, news and events.
 * Text in [square brackets] is a placeholder waiting for official information.
 */

export const hospital = {
  name: "Jayavarman VII Hospital",
  subtitle: "Kantha Bopha III",
  tagline: "Free-of-charge pediatric and maternity healthcare for the community.",
  address: "[Address to be confirmed]",
  phone: "[Phone number to be confirmed]",
  emergencyPhone: "[Emergency number to be confirmed]",
  email: "[Email to be confirmed]",
  hours: "[Opening hours to be confirmed]",
  directions: "[Directions to the hospital to be confirmed]",
  mapQuery: "Jayavarman VII Hospital Kantha Bopha",
};

export type Staff = { name: string; position: string; department: string; description: string; category: string };

export const staffCategories = [
  "Doctors", "Nurses", "Midwives", "Pharmacists", "Laboratory staff",
  "Technicians", "Administrative staff", "Support staff",
];

// Add a staff member by copying one block below.
export const staff: Staff[] = [
  { name: "[Staff name]", position: "[Position]", department: "Pediatrics", category: "Doctors", description: "[Short description to be provided]" },
  { name: "[Staff name]", position: "[Position]", department: "Maternity", category: "Midwives", description: "[Short description to be provided]" },
  { name: "[Staff name]", position: "[Position]", department: "Nursing", category: "Nurses", description: "[Short description to be provided]" },
  { name: "[Staff name]", position: "[Position]", department: "Pharmacy", category: "Pharmacists", description: "[Short description to be provided]" },
  { name: "[Staff name]", position: "[Position]", department: "Laboratory", category: "Laboratory staff", description: "[Short description to be provided]" },
  { name: "[Staff name]", position: "[Position]", department: "Administration", category: "Administrative staff", description: "[Short description to be provided]" },
];

export type Service = { name: string; description: string; featured?: boolean };

// Add or remove services here. Only list services the hospital actually provides.
export const services: Service[] = [
  { name: "Pediatric Care", featured: true, description: "Care for babies, children and young people, provided free of charge. [Details to be confirmed]" },
  { name: "Maternity Care", featured: true, description: "Care for mothers before, during and after childbirth, provided free of charge. [Details to be confirmed]" },
  { name: "Emergency Care", description: "[Description of emergency services to be confirmed]" },
  { name: "Surgery", description: "[Description of surgical services to be confirmed]" },
  { name: "Laboratory", description: "[Description of laboratory services to be confirmed]" },
  { name: "Pharmacy", description: "[Description of pharmacy services to be confirmed]" },
  { name: "Diagnostic Services", description: "[Description of diagnostic services to be confirmed]" },
];

export type NewsItem = { date: string; title: string; summary: string; tag: string };

// Newest first. Copy a block to add a news post.
export const news: NewsItem[] = [
  { date: "[Date]", tag: "Announcement", title: "[Hospital announcement title]", summary: "[Short summary of the announcement]" },
  { date: "[Date]", tag: "Health information", title: "[Health information article title]", summary: "[Short summary of the article]" },
  { date: "[Date]", tag: "Activities", title: "[Hospital activity title]", summary: "[Short summary of the activity]" },
];

export type EventItem = { date: string; title: string; location: string; description: string; type: string };

export const events: EventItem[] = [
  { date: "[Date]", type: "Symposium", title: "[Symposium title]", location: "[Location]", description: "[Event description and details]" },
  { date: "[Date]", type: "Training", title: "[Training or educational event]", location: "[Location]", description: "[Event description and details]" },
  { date: "[Date]", type: "Public event", title: "[Public event title]", location: "[Location]", description: "[Event description and details]" },
];

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/staff", label: "Staff" },
  { to: "/services", label: "Services" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/donations", label: "Donations" },
  { to: "/contact", label: "Contact" },
] as const;
