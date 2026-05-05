// ── Marquee Items ──
export const MARQUEE_ITEMS = [
  "YOUR VOICE",
  "YOUR PLATFORM",
  "YOUR FAIR SHARE",
  "CITIZEN JOURNALISM",
  "60% CREATOR REVENUE",
  "NO ALGORITHMS",
  "RADICAL TRANSPARENCY",
] as const;

// ── Nav Links ──
export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Revenue", href: "/#revenue" },
  { label: "FAQ", href: "/#faq" },
] as const;

// ── Problem Cards (The Current Reality) ──
export const PROBLEM_ITEMS = [
  {
    icon: "Bot",
    text: "Algorithms control what millions see — decided by platforms, not by merit",
  },
  {
    icon: "Wallet",
    text: "Creators pour their hearts into content while platforms keep 85%+ of revenue",
  },
  {
    icon: "EyeOff",
    text: "Citizens fear speaking up. Independent voices get shadowbanned, demonetized, or silenced",
  },
  {
    icon: "ShieldOff",
    text: "Content moderation is opaque. You're never sure why your voice was hidden",
  },
  {
    icon: "Building2",
    text: "Traditional media is concentrated. Ownership matters more than truth",
  },
] as const;

// ── Solution Cards (OMH Changes the Game) ──
export const SOLUTION_ITEMS = [
  {
    icon: "Users",
    text: "Community-driven reach: Your voice reaches people based on genuine engagement, not hidden metrics",
  },
  {
    icon: "PiggyBank",
    text: "Creator-first economics: 60% of revenue goes to creators who built the platform",
  },
  {
    icon: "Eye",
    text: "Complete transparency: You'll always know how the platform works and why your content ranks",
  },
  {
    icon: "ShieldCheck",
    text: "No shadowbanning. No secret algorithms. Just quality content rising naturally",
  },
  {
    icon: "Megaphone",
    text: "A true alternative to legacy media: By citizens, for citizens",
  },
] as const;

// ── Philosophy Pillars ──
export const PHILOSOPHY_PILLARS = [
  {
    icon: "Scale",
    title: "Unbiased Community",
    description:
      "Your reach is determined by the quality of your ideas, not your status or a pay-to-play system.",
    bullets: [
      "No algorithmic gatekeeping",
      "No pay-to-play boosting",
      "No shadow banning",
      "Pure merit-based visibility",
    ],
  },
  {
    icon: "Lightbulb",
    title: "Radical Transparency",
    description:
      "You'll always know exactly how the platform works and why your content ranks the way it does.",
    bullets: [
      "Open-source ranking system",
      "Clear moderation guidelines",
      "Public revenue sharing model",
      "No hidden metrics or secret sauce",
    ],
  },
  {
    icon: "IndianRupee",
    title: "Creator-First Economics",
    description:
      "Creators are the heartbeat of the internet. You deserve the lion's share of what you create.",
    bullets: [
      "60% Creator | 40% Platform",
      "No hidden fees or fine print",
      "Instant payouts",
      "Built for sustainable creator economy",
    ],
  },
] as const;

// ── Features — For Citizens ──
export const CITIZEN_FEATURES = [
  {
    icon: "Newspaper",
    title: "Explore Unfiltered News",
    description:
      "Access real journalism from verified creators — no algorithmic filters.",
  },
  {
    icon: "MessageSquare",
    title: "Comment & Discuss",
    description:
      "Engage meaningfully with stories and creators in moderated spaces.",
  },
  {
    icon: "ThumbsUp",
    title: "Vote & Curate",
    description:
      "Upvote/downvote content to shape what rises to the top.",
  },
  {
    icon: "Bookmark",
    title: "Save Your Favorites",
    description:
      "Keep important stories and creators for later.",
  },
  {
    icon: "UserPlus",
    title: "Follow Trusted Sources",
    description:
      "Build a personalized news feed of creators you trust.",
  },
  {
    icon: "Bell",
    title: "Instant Updates",
    description:
      "Never miss important updates from your favorite creators.",
  },
] as const;

// ── Features — For Creators ──
export const CREATOR_FEATURES = [
  {
    icon: "LayoutDashboard",
    title: "Creator Studio",
    description:
      "Intuitive dashboard to write, publish, and manage all your content.",
  },
  {
    icon: "BarChart3",
    title: "Advanced Analytics",
    description:
      "See exactly who's engaging with your work and how.",
  },
  {
    icon: "TrendingUp",
    title: "Audience Growth Tools",
    description:
      "Understand what resonates and grow authentically.",
  },
  {
    icon: "FileVideo",
    isBeta: true,
    title: "Multi-Format Publishing",
    description:
      "Articles, videos, blogs, forums, live debates, and policy discussions.",
  },
  {
    icon: "Subtitles",
    isBeta: true,
    title: "AI-Powered Subtitles",
    description:
      "Auto-generate subtitles for videos in multiple languages.",
  },
  {
    icon: "Banknote",
    isBeta: true,
    title: "Monetization Tools",
    description:
      "Earn directly from your audience with transparent payment tracking.",
  },
] as const;

// ── Features — For Admins ──
export const ADMIN_FEATURES = [
  {
    icon: "BadgeCheck",
    title: "Creator Verification",
    description:
      "Approve and onboard trusted journalists and creators.",
  },
  {
    icon: "Shield",
    title: "Platform Moderation",
    description:
      "Maintain content quality while respecting free expression.",
  },
  {
    icon: "Activity",
    title: "Real-Time Analytics",
    description:
      "Monitor platform health, engagement, and growth metrics.",
  },
  {
    icon: "PieChart",
    title: "Community Insights",
    description:
      "Data-driven decisions to improve the ecosystem.",
  },
] as const;

// ── Trust Builders ──
export const TRUST_BUILDERS = [
  {
    icon: "Building",
    title: "Built by UNAI TECH",
    description:
      "A technology organization dedicated to democratic digital infrastructure.",
  },
  {
    icon: "ShieldCheck",
    title: "Zero Hidden Algorithms",
    description:
      "No opaque systems. You see what matters based on chronological merit, not platform agendas.",
  },
  {
    icon: "Heart",
    title: "Creator-Focused Mission",
    description:
      "Not venture-backed by surveillance capital — built for creators.",
  },
  {
    icon: "Award",
    title: "Endorsed by Independent Journalists",
    description:
      "Trusted by citizen journalists and independent media.",
  },
] as const;

// ── Citizen Journey Steps ──
export const CITIZEN_JOURNEY = [
  {
    step: 1,
    title: "Download & Sign Up",
    details: [
      "Download the OMH app (iOS/Android)",
      "Create account with email, phone, or Google",
      "Set up your interests and follow creators",
    ],
  },
  {
    step: 2,
    title: "Explore & Engage",
    details: [
      "Browse a feed curated by community votes",
      "Read articles, watch videos, join discussions",
      "Upvote/downvote to influence what rises",
    ],
  },
  {
    step: 3,
    title: "Share & Connect",
    details: [
      "Comment on articles and start conversations",
      "Share important stories with your network",
      "Become an informed, active citizen",
    ],
  },
] as const;

// ── Creator Journey Steps ──
export const CREATOR_JOURNEY = [
  {
    step: 1,
    title: "Apply to Become a Creator",
    details: [
      "Visit the Creator Landing Page",
      "Submit your portfolio and creator statement",
      "Wait for admin approval (24-48 hours)",
    ],
  },
  {
    step: 2,
    title: "Access Creator Studio",
    details: [
      "Receive login credentials",
      "Set up your creator profile",
      "Explore analytics dashboard",
    ],
  },
  {
    step: 3,
    title: "Create & Publish",
    details: [
      "Write articles or upload videos",
      "Add descriptions, tags, and thumbnails",
      "Hit publish — content goes live instantly",
    ],
  },
  {
    step: 4,
    title: "Earn & Grow",
    details: [
      "Watch your engagement metrics in real-time",
      "Earn revenue from views and engagement",
      "Receive payouts directly — no middlemen",
    ],
  },
] as const;

// ── Use Case Stories ──
export const USE_CASES = [
  {
    name: "Priya",
    role: "Investigative Journalist",
    avatar: "P",
    quote:
      "I investigated corruption in local government — but no major outlet would touch it. On OMH, my investigation reached 50,000 people in a week. The community voted it to the top. Now I earn from my work directly, with no editor killing my story for political reasons. My voice matters again.",
    stats: {
      published: "12 in-depth investigations",
      followers: "45,000",
      earnings: "₹75,000/mo",
    },
  },
  {
    name: "Rajesh",
    role: "Grassroots Reporter",
    avatar: "R",
    quote:
      "I cover stories from my small town that the national media ignores. Before OMH, no one cared. Now I have 12,000 followers interested in local news. I'm building a community of people who understand their own backyard matters.",
    stats: {
      published: "120+ articles",
      followers: "12,000",
      earnings: "₹35,000/mo",
    },
  },
  {
    name: "Anaya",
    role: "Documentary Creator",
    avatar: "A",
    quote:
      "I create documentaries about social issues, but YouTube's algorithm buried my videos. On OMH, people who care about these issues find my work. The 60/40 split means I earn enough to keep creating without sponsors telling me what to say.",
    stats: {
      published: "24 documentaries",
      followers: "38,000",
      earnings: "₹95,000/mo",
    },
  },
  {
    name: "Vikram",
    role: "Eyewitness Reporter",
    avatar: "V",
    quote:
      "When a fire broke out in my neighborhood, I filmed and reported it on OMH within minutes. My footage got 200,000 views. Finally, citizens on the ground get to tell their own stories without waiting for news vans.",
    stats: {
      published: "45 stories",
      followers: "8,500",
      earnings: "₹18,000/mo",
    },
  },
] as const;

// ── FAQ — General ──
export const FAQ_GENERAL = [
  {
    q: "How is OMH different from Facebook, Twitter, and YouTube?",
    a: "We don't use hidden algorithms. Your content's reach is determined by real community engagement, not a black-box algorithm. We're 60% creator revenue (vs. 10-30% elsewhere), completely transparent about our ranking system, and we never shadowban or suppress content based on politics. We're a platform built for creators, not for advertising profit.",
  },
  {
    q: "Is OMH regulated? Who moderates content?",
    a: "OMH operates under Indian law and complies with all relevant regulations. Our moderation policy is open and available to everyone. We remove content that violates clear, published guidelines (hate speech, violence, explicit content). We never remove content for political reasons. If your content is removed, you get a detailed explanation and the ability to appeal.",
  },
  {
    q: "How do I know my earnings are real?",
    a: "Complete transparency. Your Creator Dashboard shows exactly where every rupee comes from: ad revenue, sponsorships, and platform monetization. You see real-time payouts. No mystery black holes. You can verify our 60/40 split in our open API.",
  },
] as const;

// ── FAQ — Creator ──
export const FAQ_CREATOR = [
  {
    q: "How long does creator approval take?",
    a: "24-48 hours. We review your portfolio, verify your identity, and check that you meet our quality standards. Once approved, you get instant access to Creator Studio.",
  },
  {
    q: "What are the requirements to become a creator?",
    a: "You need a portfolio showing your work (blog, YouTube, Medium, etc.), a brief creator statement explaining your mission, and verification that you're a real person. We don't care about follower counts — we care about quality and authenticity.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts happen automatically every 30 days. Your earnings dashboard tracks in real-time, but actual transfers clear within 2-3 business days after the month ends.",
  },
  {
    q: "Do I lose ownership of my content?",
    a: "No. You own 100% of your work. You can republish on other platforms, sell exclusive content, or remove it from OMH anytime. OMH gets a license to display your content while you're on the platform, but you retain all rights.",
  },
] as const;

// ── FAQ — Citizen ──
export const FAQ_CITIZEN = [
  {
    q: "Is OMH free to use?",
    a: "Yes, completely free. You'll never pay to read, comment, or follow creators. We make money through ads and sponsorships — 60% of which goes to creators.",
  },
  {
    q: "Will I see ads?",
    a: "Yes, but we're respectful about it. No data mining. No tracking. No targeted ads based on your location or browsing. Ads are relevant to content, not to your personal data. And remember: 60% of ad revenue goes back to creators.",
  },
  {
    q: "How is my data protected?",
    a: "We don't sell your data. Ever. We follow Indian data protection laws strictly. Your reading history, comments, and follows are your own. You can delete your account anytime and all your data gets wiped within 30 days.",
  },
] as const;
