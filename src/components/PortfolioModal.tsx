import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Wedding } from '../data/portfolioData';

interface PortfolioModalProps {
  wedding: Wedding;
  onClose: () => void;
}

export default function PortfolioModal({ wedding, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % wedding.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + wedding.images.length) % wedding.images.length);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, nextImage, prevImage]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-start justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-6xl mx-auto my-8 bg-white rounded-xl shadow-2xl">
        {/* Header Section */}
        <div className="sticky top-0 z-10 p-4 bg-gradient-to-r from-[#F5F5DC] to-[#F9F9F7] border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{wedding.title}</h2>
              <p className="text-xl text-gray-700">{wedding.couple}</p>
            </div>
            <button
              onClick={onClose}
              className="bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm">
              <Calendar className="w-4 h-4 text-[#c07259]" />
              <span>{wedding.date}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full text-sm">
              <MapPin className="w-4 h-4 text-[#c07259]" />
              <span>{wedding.location}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-y-auto max-h-[70vh]">
          {/* Main Image */}
          <div className="relative bg-gray-50">
            <div className="relative aspect-video flex items-center justify-center">
              <img
                src={wedding.images[currentImageIndex]}
                alt={`${wedding.title} - Photo ${currentImageIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {wedding.images.length}
              </div>
            </div>

            {wedding.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Description */}
          {wedding.description && (
            <div className="p-6">
              <p className="text-gray-700">{wedding.description}</p>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {wedding.images.length > 1 && (
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {wedding.images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'ring-2 ring-[#c07259] ring-offset-2 scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}