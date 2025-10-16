import { Heart, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F9F9F7] text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">
              Kaizen Production
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Creating timeless memories through the art of photography and videography.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-700"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-700"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-all duration-300 hover:scale-110 text-gray-700"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-gray-900 transition-colors">Wedding Photography</li>
              <li className="hover:text-gray-900 transition-colors">Cinematic Videography</li>
              <li className="hover:text-gray-900 transition-colors">Pre-Wedding Shoots</li>
              <li className="hover:text-gray-900 transition-colors">Event Planning</li>
              <li className="hover:text-gray-900 transition-colors">Photo Editing</li>
              <li className="hover:text-gray-900 transition-colors">Custom Packages</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@kaizenproduction.com">
                  info@kaizenproduction.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Kaizen Production. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}