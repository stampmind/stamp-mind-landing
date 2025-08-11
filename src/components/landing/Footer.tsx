const Footer = () => {
    return (
      <footer className="mt-20 border-t border-border/60">
        <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tempo. Make your time worth everything.</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  