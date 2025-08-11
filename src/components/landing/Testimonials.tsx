const Testimonials = () => {
    return (
      <section id="testimonials" aria-label="Testimonials" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">People are finding their rhythm</h2>
            <p className="text-muted-foreground mt-3">A few notes from individuals who made time work for them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I finish my day feeling proud, not busy.",
                author: "Amelia, Designer",
              },
              {
                quote: "The insights helped me reclaim 5+ hours a week.",
                author: "Kai, Engineer",
              },
              {
                quote: "Planning takes minutes now—and actually sticks.",
                author: "Leo, Founder",
              },
            ].map((t) => (
              <blockquote key={t.author} className="glass rounded-xl p-6 md:p-8 card-hover">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-muted-foreground">{t.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;