export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">
              About Kaizen Production
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              At Kaizen Production, we believe that every wedding tells a unique story. Our passion lies in capturing those fleeting moments of pure emotion, transforming them into timeless memories you'll cherish forever.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Founded on the principle of continuous improvement—the essence of "Kaizen"—we constantly refine our craft to deliver exceptional photography that exceeds expectations.
            </p>
            <p className="text-lg text-muted-foreground">
              With years of experience and a keen eye for detail, our team approaches each wedding with fresh creativity and dedication, ensuring your special day is documented with elegance and artistry.
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
                alt="Professional photographer at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-lg shadow-xl">
              <p className="text-4xl font-serif font-medium">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
