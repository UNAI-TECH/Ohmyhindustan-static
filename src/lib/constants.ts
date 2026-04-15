// ── Content Formats ──
export const CONTENT_FORMATS = [
  { icon: "FileText", label: "Article" },
  { icon: "Video", label: "Short Video" },
  { icon: "Podcast", label: "Audio Feed" },
  { icon: "Radio", label: "Live Stream" },
  { icon: "Images", label: "Photo Essay" },
  { icon: "BarChart3", label: "Live Polls" },
  { icon: "Map", label: "Event Maps" },
  { icon: "FileCheck", label: "Fact Sheets" },
] as const;

// ── Creator Tiers ──
export const CREATOR_TIERS = [
  { name: "Correspondent", share: 0.5, label: "50% REV SHARE", highlight: false },
  { name: "Senior Reporter", share: 0.525, label: "52.5% REV SHARE", highlight: false },
  { name: "Lead Editor", share: 0.55, label: "55% REV SHARE", highlight: false },
  { name: "Elite Member", share: 0.6, label: "60% REV SHARE", highlight: true },
] as const;

// ── Revenue Engines ──
export const REVENUE_ENGINES = [
  {
    title: "Google Ad Stack",
    description: "Global ad demand integrated directly into hyper-local content feeds.",
  },
  {
    title: "Creator Marketplace",
    description: "Brands collaborating with trusted local voices for authentic storytelling.",
  },
  {
    title: "OMH Pro",
    description: "Premium deep-dives and ad-free experience for dedicated readers.",
  },
] as const;

// ── Market Stats ──
export const MARKET_STATS = [
  { value: 2.5, suffix: "B", prefix: "INR ", label: "Digital Ad TAM" },
  { value: 650, suffix: "M+", prefix: "", label: "Smartphone Users" },
  { value: 200, suffix: "M+", prefix: "", label: "Daily News Readers" },
  { value: 22, suffix: "+", prefix: "", label: "Indian Languages" },
] as const;

// ── Security Features ──
export const SECURITY_FEATURES = [
  { icon: "ShieldCheck", title: "E2E Reporting", desc: "Your location and identity are shielded until verification." },
  { icon: "ScanFace", title: "AI Moderation", desc: "Real-time hate speech and fake news detection." },
  { icon: "CloudUpload", title: "IPFS Archival", desc: "Decentralized storage to prevent content censorship." },
  { icon: "BadgeCheck", title: "Zero Trust", desc: "Continuous authentication for all internal operations." },
] as const;

// ── Competitor Table ──
export const COMPETITOR_FEATURES = [
  { feature: "500ms Real-time Feed", omh: true, newspoint: false, inshorts: false },
  { feature: "Direct Creator Payouts", omh: true, newspoint: false, inshorts: false },
  { feature: "Hyper-Local Community", omh: true, newspoint: false, inshorts: true },
  { feature: "Citizen Verified Content", omh: true, newspoint: false, inshorts: false },
] as const;

// ── Problem Cards ──
export const PROBLEM_CARDS = [
  {
    icon: "Megaphone",
    title: "No Local Voice",
    description: "Major news networks ignore 90% of rural and tier-2 city issues. Local problems never reach national attention.",
  },
  {
    icon: "BanknoteX",
    title: "Journalists Underpaid",
    description: "Traditional reporting models starve the actual creators while rewarding corporate gatekeepers.",
  },
  {
    icon: "UserMinus",
    title: "No Community Layer",
    description: "News is currently a one-way broadcast. OMH turns news into a collaborative, community experience.",
  },
] as const;

// ── Timeline Milestones ──
export const TIMELINE_MILESTONES = [
  { phase: "Foundation", months: "M1–3", dau: "5K DAU", revenue: "₹72K/mo" },
  { phase: "Traction", months: "M4–8", dau: "25K DAU", revenue: "₹5.62L/mo" },
  { phase: "Scale", months: "M9–14", dau: "1L DAU", revenue: "₹32.4L/mo" },
  { phase: "Dominance", months: "M15–24", dau: "5L DAU", revenue: "₹2.75Cr/mo" },
] as const;

// ── Marquee Items ──
export const MARQUEE_ITEMS = [
  "REAL-TIME NEWS",
  "CITIZEN JOURNALISM",
  "CREATOR ECONOMY",
  "500ms DELIVERY",
  "22 LANGUAGES",
  "INDIA-FIRST",
] as const;

// ── Nav Links ──
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Creators", href: "#creators" },
  { label: "Revenue", href: "#revenue" },
  { label: "About", href: "#about" },
] as const;

// ── Earnings Calculator Tiers ──
export const CALC_TIERS = [
  { key: "bronze", label: "Correspondent", share: 0.50 },
  { key: "silver", label: "Sr. Reporter", share: 0.52 },
  { key: "gold", label: "Lead Editor", share: 0.55 },
  { key: "platinum", label: "Platinum", share: 0.58 },
  { key: "elite", label: "Elite", share: 0.60 },
] as const;
