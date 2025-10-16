import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';

type AnimateOnScrollProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
};

export function AnimateOnScroll({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  
  // Simple intersection observer implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.animate-on-scroll-${direction}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls, direction]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: delay
      }
    }
  };

  return (
    <motion.div
      className={`${className} animate-on-scroll-${direction}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
