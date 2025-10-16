import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageContainer = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const experienceBadge = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6,
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 15,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={container} className="space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-serif font-medium"
              variants={item}
            >
              About Kaizen Production
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={item}
            >
              At Kaizen Production, we believe that every wedding tells a unique story. Our passion lies in capturing those fleeting moments of pure emotion, transforming them into timeless memories you'll cherish forever.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={item}
            >
              Founded on the principle of continuous improvement—the essence of "Kaizen"—we constantly refine our craft to deliver exceptional photography that exceeds expectations.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={item}
            >
              With years of experience and a keen eye for detail, our team approaches each wedding with fresh creativity and dedication, ensuring your special day is documented with elegance and artistry.
            </motion.p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={imageContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80"
                alt="Professional photographer at work"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 md:p-8 rounded-lg shadow-xl"
              variants={experienceBadge}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              <p className="text-4xl font-serif font-medium">10+</p>
              <p className="text-sm">Years Experience</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
