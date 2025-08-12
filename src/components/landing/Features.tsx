import { CalendarRange, CheckCircle2, BarChart3, Sparkles } from "lucide-react";

const features = [
  {
    icon: CalendarRange,
    title: "Understand your time",
    desc: "Gain clarity on how your day unfolds with effortless, automatic insights.",
  },
  {
    icon: Sparkles,
    title: "Eliminate distractions",
    desc: "Smart detection and gentle interventions keep you on track without breaking your flow.",
  },
  {
    icon: CheckCircle2,
    title: "Plan with ease",
    desc: "A deep focused mode with pomodoro timers and distraction blocking.",
  },
  {
    icon: BarChart3,
    title: "See your impact",
    desc: "Beautiful insights that turn time into progress you can feel and share.",
  },
];

const Features = () => {
  return (
    <section id="features" aria-label="Features" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Everything you need to move your day forward</h2>
          <p className="text-muted-foreground mt-3">
            Thoughtfully designed building blocks that balance power and simplicity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <article key={f.title} className="glass rounded-xl p-6 card-hover">
              <div className="size-10 rounded-md bg-primary/15 ring-1 ring-primary/30 grid place-items-center mb-4">
                <f.icon className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;