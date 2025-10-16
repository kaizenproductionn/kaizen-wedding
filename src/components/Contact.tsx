import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const formItem = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.query,
        },
        'YOUR_PUBLIC_KEY'
      );

      setStatus('success');
      setMessage('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', query: '' });

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or contact us directly.');
      console.error('EmailJS error:', error);

      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-[#F5F5DC] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Get In Touch
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
            Let's start planning your perfect day
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 md:gap-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="space-y-8" variants={container}>
            <motion.div variants={item}>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Capture Your Story?
              </h3>
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We'd love to hear about your wedding plans and discuss how we can make your
                special day even more memorable. Fill out the form or reach us directly through
                the contact information below.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-6" variants={container}>
              <motion.div 
                className="flex items-start gap-4 group"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Email</h4>
                  <a
                    href="mailto:info@kaizenproduction.com"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    info@kaizenproduction.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4 group"
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-1">Location</h4>
                  <p className="text-gray-700">
                    123 Wedding Street<br />
                    Photography District<br />
                    Your City, State 12345
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 mt-8"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4 className="font-bold text-gray-900 text-xl mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formItem} custom={0}>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Name *
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300 text-gray-900 text-lg"
                  placeholder="Your full name"
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                />
              </motion.div>

              <motion.div variants={formItem} custom={1}>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Email *
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300 text-gray-900 text-lg"
                  placeholder="your.email@example.com"
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                />
              </motion.div>

              <motion.div variants={formItem} custom={2}>
                <label htmlFor="query" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Your Message *
                </label>
                <motion.textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300 text-gray-900 text-lg resize-none"
                  placeholder="Tell us about your wedding plans, date, location, and any specific requirements..."
                  whileFocus={{ scale: 1.01, boxShadow: '0 0 0 2px rgba(0,0,0,0.1)' }}
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {message && (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{message}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
