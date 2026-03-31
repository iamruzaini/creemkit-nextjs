import { Bell, CreditCard, Database, Rocket, ShieldCheck, UserCircle } from "lucide-react";
import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID ?? "prod_starter",
    features: ["Core authentication", "Payment processing", "Email notifications", "Community support", "Monthly updates"],
  },
  {
    name: "Pro",
    price: "$49",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID ?? "prod_pro",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced webhooks",
      "Priority support",
      "Custom branding",
      "Analytics dashboard",
      "API documentation",
    ],
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID ?? "prod_enterprise",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "SSO & SAML",
    ],
  },
];

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
              <span className="inline-flex items-center justify-center w-8 h-8 bg-accent-orange text-black rounded-lg border-2 border-black text-sm">
                CK
              </span>
              CreemKit
            </span>
            <nav className="flex items-center gap-4">
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
            Next.js + Creem + Supabase
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-text-dark leading-[0.85] mb-6">
            Launch Your
            <br />
            <span className="text-accent-orange">
              SaaS.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-dark/60 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
            A production-ready starter kit with auth, database, payments &amp; subscriptions. Ship
            in hours, not weeks.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://github.com/iamruzaini/creemkit-nextjs" target="_blank" rel="noopener noreferrer" className="px-8 py-3 text-base btn-primary">
              Start Building 
            </a>
            <Link href="/pricing" className="px-8 py-3 text-base btn-secondary">
              View Pricing
            </Link>
          </div>

          {/* Social proof / stats strip */}
          <div className="mt-16 flex flex-wrap gap-6 justify-center items-center">
            {[
              { label: "Auth Ready" },
              { label: "Payments Built-in" },
              { label: "Demo Mode" },
              { label: "TypeScript First" },
            ].map((tag) => (
              <span
                key={tag.label}
                className="px-4 py-2 bg-white/80 backdrop-blur text-text-dark font-bold text-sm border-2 border-black/10 rounded-full hover:bg-white transition-all duration-200 hover:scale-105 cursor-default"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/*Tech Stack section*/}
      <section className="bg-bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <span className="inline-block px-3 py-1 bg-accent-violet/15 text-accent-violet text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-violet/30">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-dark mb-4">
            Built on top of <span className="text-accent-violet">modern stack</span>
          </h2>
          <p className="text-text-dark/50 mb-14 text-lg">
            Modern tools, zero configuration trauma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {[
              { name: "Next.js 16" },
              { name: "Creem" },
              { name: "Supabase" },
              { name: "React 19" },
              { name: "TypeScript" },
              { name: "Tailwind CSS" },
              
              
            ].map((tech) => (
              <span
                key={tech.name}
                className="px-6 py-3 bg-white text-text-dark font-bold text-sm border-2 border-black rounded-full hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/*Features Section*/}
      <section className="bg-bg-primary py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-violet/15 text-accent-violet text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-violet/30">
              Features
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4">
              Everything you need to <span className="text-accent-orange">ship</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Authentication, payments, database, and webhooks all wired up and ready to go.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, index) => (
              <div
                key={f.title}
                className="bg-bg-secondary rounded-2xl border-2 border-border p-7 group hover:border-accent-orange/40 transition-all duration-300 hover:-translate-y-1"
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

      {/*How It Works section*/}
      <section className="bg-bg-primary py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-orange/30">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
              Ship in <span className="text-accent-orange">3 simple steps</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center group">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl border-2 border-border bg-bg-secondary flex items-center justify-center text-2xl font-extrabold text-accent-orange group-hover:border-accent-orange/40 transition-all duration-300"
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

      {/*Pricing Section*/}
      <section className="bg-bg-cream py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest rounded-full mb-4 border border-accent-orange/30">
              Pricing
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-dark mb-4">
              Simple, <span className="text-accent-orange">transparent</span> pricing
            </h2>
            <p className="text-text-dark/60 text-lg max-w-2xl mx-auto">
              Choose the plan that fits your needs. Cancel anytime.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <PricingSection plans={plans} />
          </div>
        </div>
      </section>

      {/*CTA*/}
      <section className="bg-accent-orange py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-black/5 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold text-black tracking-tight mb-4 leading-tight">
            Stop building infrastructure.
            <br />
            <span>Start building your product.</span>
          </h2>
          <p className="text-black/60 mb-10 text-lg font-medium max-w-lg mx-auto">
            Everything you need to launch is already built. Get your SaaS live in hours, not months.
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

      {/*Footer*/}
      <footer className="relative bg-[#000000] border-t border-[#111] overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8 pt-24 pb-12">

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-8 md:mb-12">
            {/* Tagline */}
            <div className="md:max-w-xs">
              <h2 className="text-white text-[24px] md:text-[32px] font-medium tracking-tight">
                Ship your SaaS in hours
              </h2>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
              <div className="flex flex-col">
                <h4 className="text-white text-[14px] font-medium mb-6">
                  Product
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#features"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-[14px] font-medium mb-6">
                  Company
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-[14px] font-medium mb-6">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#999] hover:text-[#fff] text-[14px] transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Massive Brand Name Centerpiece */}
          <div className="w-full flex justify-center items-center mb-12 sm:mb-16 pointer-events-none select-none overflow-visible">
            <h1 className="w-full text-center text-[clamp(4rem,18vw,16rem)] leading-[1.1] tracking-normal text-[#1c1c1c] font-normal pb-4">
              CREEMKIT
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#111]">
            {/* Logo / Brandmark */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-accent-orange text-black rounded text-xs font-bold border border-black">
                CK
              </span>
              <span className="text-white font-semibold text-[16px] tracking-tight">
                CreemKit
              </span>
            </div>

            {/* Bottom Links & Legal */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
              <div className="text-[#666] text-[13px] hidden md:block">
                © {new Date().getFullYear()} CreemKit.
              </div>
              <Link href="#" className="text-[#666] hover:text-white text-[13px] transition-colors">Privacy</Link>
              <Link href="#" className="text-[#666] hover:text-white text-[13px] transition-colors">Terms</Link>
              <a
                href="https://creem.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-white text-[13px] transition-colors"
              >
                Powered by Creem
              </a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: <CreditCard size={28} strokeWidth={2.5} />,
    title: "Payments & Subscriptions",
    description:
      "Complete payment infrastructure with Creem. Handle checkouts, billing, tax compliance, and subscription management globally.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={2.5} />,
    title: "Authentication",
    description:
      "Secure authentication powered by Supabase. Email, magic links, OAuth providers, and session management included.",
  },
  {
    icon: <Database size={28} strokeWidth={2.5} />,
    title: "Database",
    description:
      "Production-ready Postgres database with Supabase. Row Level Security ensures your data stays protected and scalable.",
  },
  {
    icon: <Rocket size={28} strokeWidth={2.5} />,
    title: "Deploy in Minutes",
    description: "Deploy to Vercel with one click. Configure your environment variables and go live instantly.",
  },
  {
    icon: <Bell size={28} strokeWidth={2.5} />,
    title: "Webhooks",
    description:
      "HMAC-verified webhook handlers keep your database in sync with payment events automatically and securely.",
  },
  {
    icon: <UserCircle size={28} strokeWidth={2.5} />,
    title: "Billing Portal",
    description:
      "Self-service customer portal for subscription management. Let users handle upgrades, cancellations, and payment methods.",
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
