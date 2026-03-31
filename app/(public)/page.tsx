import { Bell, CreditCard, Database, Rocket, ShieldCheck, UserCircle, Zap, Code, Globe } from "lucide-react";
import Link from "next/link";

function WaveDivider({ flip, fill = "var(--bg-primary)" }: { flip?: boolean; fill?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,120 720,0 1080,80 C1260,120 1380,40 1440,60 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

function ZigzagDivider({ fill = "var(--bg-cream)" }: { fill?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px]">
        <polygon
          points="0,60 20,0 40,60 60,0 80,60 100,0 120,60 140,0 160,60 180,0 200,60 220,0 240,60 260,0 280,60 300,0 320,60 340,0 360,60 380,0 400,60 420,0 440,60 460,0 480,60 500,0 520,60 540,0 560,60 580,0 600,60 620,0 640,60 660,0 680,60 700,0 720,60 740,0 760,60 780,0 800,60 820,0 840,60 860,0 880,60 900,0 920,60 940,0 960,60 980,0 1000,60 1020,0 1040,60 1060,0 1080,60 1100,0 1120,60 1140,0 1160,60 1180,0 1200,60 1220,0 1240,60 1260,0 1280,60 1300,0 1320,60 1340,0 1360,60 1380,0 1400,60 1420,0 1440,60"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ HERO — Cream background like Creem ═══ */}
      <section className="bg-bg-cream relative overflow-hidden">
        {/* Decorative floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-orange/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-40 right-40 w-16 h-16 bg-accent-orange/5 rounded-full blur-lg" />

        <header>
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <span className="text-xl font-extrabold text-text-dark tracking-tight flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-accent-orange text-black rounded-lg border-2 border-black text-sm" style={{ boxShadow: "2px 2px 0px #000" }}>⚡</span>
              SaaSKit
            </span>
            <nav className="flex items-center gap-4">
              <Link
                href="/pricing"
                className="text-sm font-bold text-text-dark/70 hover:text-text-dark transition-colors duration-150"
              >
                Pricing
              </Link>
              <Link
                href="/login"
                className="text-sm font-bold text-text-dark/70 hover:text-text-dark transition-colors duration-150"
              >
                Sign In
              </Link>
              <Link href="/signup" className="text-sm px-5 py-2 btn-primary">
                Get Started
              </Link>
            </nav>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-20 pb-28 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest border-2 border-accent-orange/30 rounded-full mb-8 hover:bg-accent-orange/25 transition-colors duration-300">
            ✨ Next.js + Supabase + Creem
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-text-dark leading-[0.85] mb-6">
            LAUNCH YOUR
            <br />
            <span className="text-accent-orange italic relative">
              SAAS
              <span className="absolute -right-6 -top-4 text-2xl rotate-12 animate-bounce">🚀</span>
              .
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-dark/60 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            A production-ready boilerplate with auth, database, payments &amp; subscriptions. Ship
            in hours, not weeks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="px-8 py-3 text-base btn-primary">
              Start Building →
            </Link>
            <a
              href="https://github.com/malakhov-dmitrii/nextjs-supabase-creem-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-base btn-secondary"
            >
              View on GitHub
            </a>
          </div>

          {/* Social proof / stats strip */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center items-center">
            {[
              { label: "Auth Ready", icon: "🔐" },
              { label: "Payments Built-in", icon: "💳" },
              { label: "Demo Mode", icon: "🎮" },
              { label: "TypeScript First", icon: "🛡️" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="px-4 py-2 bg-white/80 backdrop-blur text-text-dark font-bold text-sm border-2 border-black/10 rounded-full flex items-center gap-2 hover:bg-white transition-all duration-200 hover:scale-105 cursor-default"
              >
                <span>{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Violet blob divider ═══ */}
      <section className="bg-bg-violet relative">
        <WaveDivider flip fill="var(--bg-cream)" />
        <div className="py-4" />
        <WaveDivider fill="var(--bg-primary)" />
      </section>

      {/* ═══ FEATURES — Dark section ═══ */}
      <section className="bg-bg-primary py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-violet/15 text-accent-violet text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-violet/30">
              Features
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4">
              Everything you need to <span className="text-accent-orange italic">ship</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Authentication, payments, database, webhooks — all wired up and ready to go.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, index) => (
              <div
                key={f.title}
                className="bg-bg-secondary rounded-2xl border-2 border-border p-7 group hover:border-accent-orange/40 transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.08)",
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 text-accent-orange group-hover:scale-110 transition-transform duration-300 inline-block">
                  {f.icon}
                </div>
                <h3 className="font-extrabold text-lg mb-2 text-text-primary">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Zigzag divider ═══ */}
      <ZigzagDivider />

      {/* ═══ STACK — Cream section ═══ */}
      <section className="bg-bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1 bg-accent-violet/15 text-accent-violet text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-violet/30">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-dark mb-4">
            Built with the <span className="text-accent-violet italic">best stack</span>
          </h2>
          <p className="text-text-dark/50 mb-14 text-lg">
            Modern tools, zero configuration headaches.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {[
              { name: "Next.js 16", emoji: "▲" },
              { name: "React 19", emoji: "⚛️" },
              { name: "TypeScript", emoji: "📘" },
              { name: "Tailwind CSS", emoji: "🎨" },
              { name: "Supabase", emoji: "⚡" },
              { name: "Creem", emoji: "💰" },
            ].map((tech) => (
              <span
                key={tech.name}
                className="px-6 py-3 bg-white text-text-dark font-bold text-sm border-2 border-black rounded-full flex items-center gap-2 hover:-translate-y-1 hover:shadow-[3px_5px_0px_#000] transition-all duration-200 cursor-default"
                style={{ boxShadow: "3px 3px 0px #000" }}
              >
                <span className="text-base">{tech.emoji}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Dark section ═══ */}
      <WaveDivider fill="var(--bg-primary)" />
      <section className="bg-bg-primary py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-orange/30">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Ship in <span className="text-accent-orange italic">3 simple steps</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl border-2 border-border bg-bg-secondary flex items-center justify-center text-2xl font-extrabold text-accent-orange group-hover:border-accent-orange/40 transition-all duration-300"
                  style={{ boxShadow: "4px 4px 0px rgba(255, 255, 255, 0.06)" }}
                >
                  {i + 1}
                </div>
                <h3 className="font-extrabold text-lg text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — Orange section ═══ */}
      <section className="bg-accent-orange py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-black/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold text-black tracking-tight mb-4 leading-tight">
            Ready to launch
            <br />
            <span className="italic">your SaaS?</span>
          </h2>
          <p className="text-black/60 mb-10 text-lg font-medium max-w-lg mx-auto">
            Clone the repo, configure your environment, and start accepting payments in minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="inline-block px-8 py-3 text-base btn-dark">
              Get Started Free →
            </Link>
            <Link href="/pricing" className="inline-block px-8 py-3 text-base bg-black/10 text-black font-bold border-2 border-black/20 rounded-full hover:bg-black/20 transition-all duration-200">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="bg-bg-primary border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-accent-orange text-black rounded text-xs font-bold border border-black" style={{ boxShadow: "1px 1px 0px #000" }}>⚡</span>
              <span className="font-extrabold text-text-primary text-sm">SaaSKit</span>
            </div>
            <p className="text-sm text-text-muted text-center">
              Built with Next.js, Supabase &{" "}
              <a href="https://creem.io" className="text-accent-orange hover:underline font-bold">
                Creem
              </a>
              . Open source and free to use.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/pricing" className="text-sm text-text-muted hover:text-accent-orange transition-colors font-medium">
                Pricing
              </Link>
              <Link href="/login" className="text-sm text-text-muted hover:text-accent-orange transition-colors font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <ShieldCheck size={28} strokeWidth={2.5} />,
    title: "Authentication",
    description:
      "Email/password auth with Supabase. Magic links, OAuth, and session management out of the box.",
  },
  {
    icon: <CreditCard size={28} strokeWidth={2.5} />,
    title: "Payments & Subscriptions",
    description:
      "Creem handles checkout, billing, tax compliance, and subscription lifecycle. Global payments in minutes.",
  },
  {
    icon: <Database size={28} strokeWidth={2.5} />,
    title: "Database",
    description:
      "Supabase Postgres with Row Level Security. Your data is secure and scalable from day one.",
  },
  {
    icon: <Bell size={28} strokeWidth={2.5} />,
    title: "Webhooks",
    description:
      "HMAC-verified webhook handler syncs payment events to your database automatically.",
  },
  {
    icon: <UserCircle size={28} strokeWidth={2.5} />,
    title: "Billing Portal",
    description:
      "Customers manage their own subscriptions — upgrades, cancellations, payment methods.",
  },
  {
    icon: <Rocket size={28} strokeWidth={2.5} />,
    title: "Deploy in Minutes",
    description: "One-click deploy to Vercel. Environment variables, and you're live.",
  },
];

const steps = [
  {
    title: "Clone & Configure",
    description: "Clone the repo, set your Supabase & Creem environment variables, and install dependencies.",
  },
  {
    title: "Customize & Build",
    description: "Adapt the landing page, pricing plans, and dashboard to match your product vision.",
  },
  {
    title: "Launch & Grow",
    description: "Deploy to Vercel, start accepting payments, and focus on building your product.",
  },
];
