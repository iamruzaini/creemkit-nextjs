import Link from "next/link";
import { PricingSection } from "@/components/pricing-section";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_STARTER_PRODUCT_ID ?? "prod_starter",
    features: ["3 projects", "Basic analytics", "Email support", "1 team member"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_PRO_PRODUCT_ID ?? "prod_pro",
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "Custom integrations",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "month",
    productId: process.env.NEXT_PUBLIC_CREEM_ENTERPRISE_PRODUCT_ID ?? "prod_enterprise",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "Dedicated support",
      "SLA guarantee",
      "Custom contracts",
      "SSO / SAML",
    ],
  },
];

function WaveDivider({ fill = "var(--bg-primary)" }: { fill?: string }) {
  return (
    <div className="w-full overflow-hidden leading-[0]">
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

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* ═══ Hero — Cream background ═══ */}
      <section className="bg-bg-cream relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-accent-violet/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-orange/10 rounded-full blur-2xl" />

        <header>
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-extrabold text-text-dark tracking-tight flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-accent-orange text-black rounded-lg border-2 border-black text-sm" style={{ boxShadow: "2px 2px 0px #000" }}>⚡</span>
              SaaSKit
            </Link>
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

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 pb-24 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-accent-orange/15 text-accent-orange text-xs font-bold uppercase tracking-widest border-2 border-accent-orange/30 rounded-full mb-8">
            💰 Pricing
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-text-dark leading-[0.85] mb-4">
            SIMPLE,
            <br />
            <span className="text-accent-orange italic">TRANSPARENT</span>
            <br />
            PRICING.
          </h1>
          <p className="text-lg text-text-dark/60 font-medium max-w-md mx-auto">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* ═══ Pricing Cards — Dark section ═══ */}
      <section className="bg-bg-primary py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <PricingSection plans={plans} />
        </div>
      </section>

      {/* ═══ FAQ / Trust section ═══ */}
      <section className="bg-bg-primary pb-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            {[
              { icon: "🔒", title: "Secure Payments", desc: "256-bit SSL encryption" },
              { icon: "🌍", title: "Global Coverage", desc: "Tax compliance handled" },
              { icon: "⚡", title: "Instant Access", desc: "Start building immediately" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 bg-bg-secondary rounded-xl border-2 border-border text-center hover:border-accent-orange/30 transition-all duration-200"
                style={{ boxShadow: "3px 3px 0px rgba(255, 255, 255, 0.04)" }}
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="font-bold text-text-primary text-sm">{item.title}</p>
                <p className="text-text-muted text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-sm text-text-muted space-y-1">
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p>
            Payments processed securely by{" "}
            <a
              href="https://creem.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-orange font-bold hover:underline"
            >
              Creem
            </a>
            . Tax compliance handled automatically.
          </p>
        </div>
      </section>
    </div>
  );
}
