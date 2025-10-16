import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimateOnScroll } from './AnimateOnScroll';

type Direction = 1 | -1;

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar?: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || !testimonials.length) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setDirection(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const paginate = (newDirection: Direction) => {
    setCurrentIndex((prev) => 
      (prev + newDirection + testimonials.length) % testimonials.length
    );
    setDirection(newDirection);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <AnimateOnScroll>
      <section 
        id="testimonials" 
        className="py-20 px-4 bg-[#F9F9F7] overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear what our happy couples have to say about their experience with us.
            </p>
          </motion.div>

          <div className="relative min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full"
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              >
                <Card className="h-full flex flex-col items-center justify-center p-8 md:p-12 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="max-w-3xl mx-auto text-center">
                    <motion.div 
                      className="mb-8"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <svg
                        className="h-12 w-12 text-gray-300 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.016 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.016 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
                      </svg>
                    </motion.div>
                    
                    <motion.p 
                      className="text-xl md:text-2xl font-light text-gray-700 italic mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      "{currentTestimonial.quote}"
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1,
                              transition: { 
                                delay: 0.4 + (i * 0.1),
                                type: 'spring',
                                stiffness: 500,
                                damping: 20
                              }
                            }}
                          >
                            <Star
                              className={`w-6 h-6 ${
                                i < currentTestimonial.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-200'
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>
                      
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Avatar className="w-16 h-16 mb-4 border-2 border-white shadow-md">
                          <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                          <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                            {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="font-semibold text-gray-900 text-lg">
                          {currentTestimonial.name}
                        </p>
                        <p className="text-gray-600 text-sm">{currentTestimonial.role}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const newDirection = index > currentIndex ? 1 : -1;
                    setCurrentIndex(index);
                    setDirection(newDirection);
                  }}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'w-3 bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

