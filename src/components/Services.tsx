import { Camera, Video, Image, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ServicesSection() {
  const services = [
    {
      icon: Camera,
      title: 'Wedding Photography',
      description: 'Comprehensive coverage of your special day, from preparation to reception, capturing every precious moment with artistic precision.',
    },
    {
      icon: Video,
      title: 'Cinematic Videography',
      description: 'Professional video production creating a beautiful narrative of your wedding day with stunning visuals and emotional storytelling.',
    },
    {
      icon: Image,
      title: 'Engagement Sessions',
      description: 'Pre-wedding photo sessions in locations of your choice, perfect for save-the-dates and getting comfortable with the camera.',
    },
    {
      icon: Users,
      title: 'Family Portraits',
      description: 'Elegant family and group portraits that capture the love and connections between your closest family and friends.',
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of photography services tailored to capture your love story perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
