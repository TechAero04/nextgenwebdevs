export const company = {
  legalName: "NEXTGENWEBDEVS LLC",
  brand: "NextGenWebDevs",
  product: "Flutter Studio",
  entityType: "New Mexico Limited Liability Company",
  entityId: "0008134504",
  formed: "October 3, 2026",
  addressLines: ["1209 Mountain Road Pl NE, Ste 11872", "Albuquerque, NM 87110", "United States"],
  addressOneLine: "1209 Mountain Road Pl NE, Ste 11872, Albuquerque, NM 87110, United States",
  phone: "(818) 658-9876",
  phoneHref: "tel:+18186589876",
  supportEmail: "support@nextgenwebdevs.com",
  billingEmail: "billing@nextgenwebdevs.com",
  legalEmail: "legal@nextgenwebdevs.com",
  domain: "nextgenwebdevs.com",
  url: "https://nextgenwebdevs.com",
  supportHours: "Monday to Friday, 9:00 AM – 5:00 PM Mountain Time",
  legalUpdated: "October 25, 2026",
} as const;

export const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund & Cancellation Policy" },
  { href: "/license", label: "License Terms" },
  { href: "/cookies", label: "Cookie Policy" },
];

export type Plan = {
  id: "starter" | "pro" | "agency";
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  seats: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthly: 12,
    yearly: 120,
    tagline: "For students and solo developers learning Flutter.",
    seats: "1 user",
    features: [
      "50 template downloads per month",
      "Full library browsing & live previews",
      "Personal & learning-use license",
      "Monthly library updates",
      "Email support (2 business days)",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 29,
    yearly: 290,
    tagline: "For freelancers shipping apps for clients.",
    seats: "1 user",
    highlighted: true,
    features: [
      "Unlimited template downloads",
      "Commercial license for client projects",
      "All UI kits, screens & app projects",
      "Monthly library updates",
      "Priority email support (1 business day)",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    monthly: 79,
    yearly: 790,
    tagline: "For studios and teams building at scale.",
    seats: "Up to 5 users",
    features: [
      "Everything in Pro",
      "5 team seats with shared workspace",
      "White-label rights for client delivery",
      "Centralized team billing & invoices",
      "Dedicated support contact",
    ],
  },
];

export const templateCategories: { name: string; examples: string }[] = [
  { name: "Developer Tools", examples: "API testers, code snippet managers, Git clients" },
  { name: "Generative AI & LLMs", examples: "AI chat, image generation, prompt libraries" },
  { name: "Personal Finance", examples: "Budget trackers, expense managers, savings goals" },
  { name: "Web3 & Crypto", examples: "Portfolio trackers, NFT galleries, market dashboards" },
  { name: "Wallets, Payments & PoS", examples: "Mobile wallets, invoicing, point-of-sale" },
  { name: "Password, Encryption & Security", examples: "Password vaults, 2FA, secure notes" },
  { name: "Business", examples: "CRM, inventory, field service, HR tools" },
  { name: "Productivity", examples: "To-do lists, notes, calendars, habit trackers" },
  { name: "Education", examples: "E-learning, quizzes, flashcards, course players" },
  { name: "Health & Fitness", examples: "Workout plans, step counters, nutrition logs" },
  { name: "Medical", examples: "Doctor booking, telehealth, medication reminders" },
  { name: "Shopping & E-commerce", examples: "Storefronts, product catalogs, carts & checkout" },
  { name: "Social Networking", examples: "Feeds, profiles, communities, stories" },
  { name: "Chat & Messaging", examples: "1:1 and group chat, voice notes, channels" },
  { name: "Admin Dashboards", examples: "Analytics, order management, back-office panels" },
  { name: "Portfolio", examples: "Personal portfolios, resumes, showcase apps" },
  { name: "Photo & Video", examples: "Editors, galleries, camera filters, players" },
  { name: "Games & Fun", examples: "Casual games, puzzles, trivia" },
  { name: "Sports", examples: "Live scores, team management, fantasy leagues" },
  { name: "Comics, Anime & Manga", examples: "Readers, catalogs, episode trackers" },
  { name: "Entertainment", examples: "Streaming UIs, music players, podcasts" },
  { name: "Travel & Navigation", examples: "Trip planners, maps, hotel & flight booking" },
  { name: "Food", examples: "Food delivery, recipes, restaurant ordering" },
  { name: "Cars & Automobile", examples: "Car rental, dealership, vehicle maintenance" },
  { name: "Graphics & Design", examples: "Drawing, color palettes, design tools" },
  { name: "News & Feed", examples: "News readers, RSS, blog and magazine apps" },
  { name: "Religion", examples: "Prayer times, scripture readers, community apps" },
  { name: "Wearables", examples: "Smartwatch companions, health sync apps" },
  { name: "IoT & Remote Control", examples: "Smart home, device control, sensor dashboards" },
  { name: "App Store & App Manager", examples: "App catalogs, launchers, update managers" },
  { name: "Tools & Utilities", examples: "Calculators, converters, QR scanners" },
];
