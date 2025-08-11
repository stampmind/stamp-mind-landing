import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#" aria-label="Stamp Mind home" className="inline-flex items-center gap-2">
          <div className="size-6 rounded-md bg-primary/15 ring-1 ring-primary/30" />
          <span className="text-lg font-semibold tracking-tight">Stamp Mind</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Stories</a>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button variant="hero">Get started</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
