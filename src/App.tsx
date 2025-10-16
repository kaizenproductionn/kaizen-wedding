import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const testimonials = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Bride',
      rating: 5,
      quote: 'Kaizen Production captured our wedding day beautifully. Every photo tells our story with such emotion and artistry. We couldn\'t be happier!',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Groom',
      rating: 5,
      quote: 'The team was professional, creative, and made us feel so comfortable. The photos are absolutely stunning and we treasure them every day.',
    },
    {
      id: '3',
      name: 'Emma & David',
      role: 'Happy Couple',
      rating: 5,
      quote: 'From our engagement session to the wedding day, the experience was flawless. They captured moments we didn\'t even know happened!',
    },
  ];
  return (
    <div id="home" className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Services />
      <Testimonials testimonials={testimonials} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
