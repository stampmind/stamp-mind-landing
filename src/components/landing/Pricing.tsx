import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    tagline: "For individuals getting organized",
    features: ["Unlimited tasks", "Basic calendar", "Focus timer", "Email reminders"],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$8",
    period: "/mo",
    tagline: "For people who want momentum",
    features: ["Everything in Starter", "Advanced insights", "Templates & automations", "Priority support"],
    cta: "Upgrade",
    highlight: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" aria-label="Pricing" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
          <p className="text-muted-foreground mt-3">Start free. Level up when you’re ready.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {tiers.map((t) => (
            <article key={t.name} className={`rounded-xl p-6 md:p-8 card-hover ${t.highlight ? 'bg-[linear-gradient(135deg,hsl(var(--card))_0%,hsl(var(--card))_60%),var(--gradient-primary)] border border-border shadow-[var(--shadow-elegant)]' : 'glass'}`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.highlight && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/15 ring-1 ring-primary/30">Most popular</span>
                )}
              </div>
              <p className="text-muted-foreground mt-2">{t.tagline}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className="text-muted-foreground mb-1">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary/70" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="w-full" variant={t.highlight ? 'hero' : 'subtle'}>
                  {t.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;