import { Camera, Video, Image, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from './AnimateOnScroll';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

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
    <AnimateOnScroll>
      <section id="services" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of photography services tailored to capture your love story perfectly.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} variants={item}>
                  <Card 
                    className="p-6 hover-elevate active-elevate-2 transition-all duration-300 h-full"
                    whileHover={{ y: -5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-serif font-medium mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
