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
              Tempo helps you plan smarter, focus deeper, and finish faster — a
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
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 animate-float">
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="grid grid-cols-3 gap-4 transform rotate-12 scale-90 opacity-90">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 transform -rotate-6">
                    <div className="h-3 bg-white/60 rounded mb-2"></div>
                    <div className="h-2 bg-white/40 rounded mb-1"></div>
                    <div className="h-2 bg-white/40 rounded mb-1"></div>
                    <div className="h-1 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/25 backdrop-blur-sm rounded-lg p-4 transform rotate-3">
                    <div className="h-2 bg-white/50 rounded mb-2"></div>
                    <div className="flex space-x-1 mb-2">
                      <div className="h-8 w-2 bg-purple-300/60 rounded"></div>
                      <div className="h-6 w-2 bg-blue-300/60 rounded"></div>
                      <div className="h-10 w-2 bg-cyan-300/60 rounded"></div>
                      <div className="h-4 w-2 bg-purple-300/60 rounded"></div>
                    </div>
                    <div className="h-1 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 transform -rotate-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mb-2"></div>
                    <div className="h-2 bg-white/40 rounded mb-1"></div>
                    <div className="h-1 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 transform rotate-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="h-2 bg-white/50 rounded flex-1"></div>
                    </div>
                    <div className="h-1 bg-white/30 rounded mb-1"></div>
                    <div className="h-1 bg-white/30 rounded"></div>
                  </div>
                  <div className="bg-white/25 backdrop-blur-sm rounded-lg p-4 transform -rotate-12">
                    <div className="h-3 bg-white/60 rounded mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-1 bg-white/40 rounded"></div>
                      <div className="h-1 bg-white/30 rounded"></div>
                      <div className="h-1 bg-white/40 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-lg p-4 transform rotate-9">
                    <div className="h-2 bg-white/50 rounded mb-3"></div>
                    <div className="w-full bg-gray-200/30 rounded-full h-1.5 mb-1">
                      <div className="bg-gradient-to-r from-purple-400 to-cyan-400 h-1.5 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <div className="h-1 bg-white/30 rounded"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-6 w-1 h-1 bg-cyan-300/80 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-300/70 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;