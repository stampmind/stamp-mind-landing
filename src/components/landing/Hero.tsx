import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  return (
    <section id="hero" aria-label="Hero" className="relative">
      <div
        ref={ref}
        onMouseMove={onPointerMove}
        className="hero-bg overflow-hidden"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 md:py-28">
          <div className="space-y-6 animate-reveal">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Make your time worth everything
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-prose">
              Stamp Mind helps you plan smarter, focus deeper, and finish faster — a
              clear rhythm for your day, powered by delightful automation.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button size="lg" variant="hero" className="shadow-[var(--shadow-elegant)]">
                Start free
              </Button>
              <Button size="lg" variant="subtle">Watch demo</Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <span>No credit card</span>
              <span className="hidden sm:inline">•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl animate-float bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50">
              <img
                src="/stamp-mind-dashboard.png"
                alt="Stamp Mind dashboard showing focus tracking, task management, and productivity analytics"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400">
                <div className="text-center text-white p-8">
                  <div className="text-4xl font-bold mb-4">Stamp Mind</div>
                  <div className="text-lg opacity-90">Focus • Plan • Track • Achieve</div>
                  <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">2h 45m</div>
                      <div className="text-sm opacity-80">Daily Focus</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                      <div className="text-2xl font-bold">8/12</div>
                      <div className="text-sm opacity-80">Tasks Done</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;