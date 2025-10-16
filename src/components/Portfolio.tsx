import { useState } from 'react';
import { weddings } from '../data/portfolioData';
import PortfolioModal from './PortfolioModal';

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
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-8 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-[#c07259] mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Explore our collection of beautiful wedding stories
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {weddings.map((wedding, index) => (
            <div
              key={wedding.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
              onClick={() => openModal(wedding.id)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={wedding.coverImage}
                  alt={wedding.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{wedding.title}</h3>
                <p className="text-lg mb-1">{wedding.couple}</p>
                <p className="text-sm opacity-90">{wedding.location}</p>
                <p className="text-sm opacity-75 mt-2">{wedding.date}</p>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full transform translate-x-32 group-hover:translate-x-0 transition-transform duration-300">
                <span className="text-sm font-semibold text-gray-900">View Gallery</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWedding && (
        <PortfolioModal
          wedding={weddings.find((w) => w.id === selectedWedding)!}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
