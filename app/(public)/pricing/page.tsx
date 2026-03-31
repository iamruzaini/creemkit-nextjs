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
              <span className="inline-flex items-center justify-center w-8 h-8 bg-accent-orange text-black rounded-lg border-2 border-black text-sm">
                CK
              </span>
              CreemKit
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
            Pricing
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-text-dark leading-[0.85] mb-4">
            SIMPLE,
            <br />
            <span className="text-accent-orange">TRANSPARENT</span>
            <br />
            PRICING.
          </h1>
          <p className="text-lg text-text-dark/60 font-medium max-w-md mx-auto">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>
      </section>

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
              { title: "Secure Payments", desc: "256-bit SSL encryption" },
              { title: "Global Coverage", desc: "Tax compliance handled" },
              { title: "Instant Access", desc: "Start building immediately" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 bg-bg-secondary rounded-xl border-2 border-border text-center hover:border-accent-orange/30 transition-all duration-200"
              >
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
