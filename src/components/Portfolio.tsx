import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddings } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';

// Animation variants
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const hoverEffect = {
  scale: 1.02,
  transition: { 
    type: 'spring', 
    stiffness: 300,
    damping: 15 
  }
};

const imageHover = {
  scale: 1.1,
  transition: { 
    duration: 1,
    ease: [0.22, 1, 0.36, 1]
  }
};

export default function Portfolio() {
  const [selectedWedding, setSelectedWedding] = useState<string | null>(null);

  const openModal = (weddingId: string) => {
    setSelectedWedding(weddingId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedWedding(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8 bg-[#F9F9F7] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#c07259] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Explore our collection of beautiful wedding stories
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {weddings.map((wedding) => (
            <motion.div
              key={wedding.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(wedding.id)}
              variants={item}
              whileHover={hoverEffect}
              whileTap={{ scale: 0.98 }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <motion.img
                  src={wedding.coverImage}
                  alt={wedding.title}
                  className="w-full h-full object-cover"
                  whileHover={imageHover}
                />
              </div>

              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 text-white"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold mb-2">{wedding.title}</h3>
                <p className="text-lg mb-1">{wedding.couple}</p>
                <p className="text-sm opacity-90">{wedding.location}</p>
                <p className="text-sm opacity-75 mt-2">{wedding.date}</p>
              </motion.div>

              <motion.div 
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full"
                initial={{ x: '150%' }}
                whileHover={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span className="text-sm font-semibold text-gray-900">View Gallery</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedWedding && (
          <PortfolioModal
            wedding={weddings.find((w) => w.id === selectedWedding)!}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
