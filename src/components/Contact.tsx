import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

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
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 bg-[ #F5F5DC ]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#c07259] mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Let's start planning your perfect day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Capture Your Story?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We'd love to hear about your wedding plans and discuss how we can make your
                special day even more memorable. Fill out the form or reach us directly through
                the contact information below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-4 rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300">
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
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
              <h4 className="font-bold text-gray-900 text-xl mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="query" className="block text-gray-900 font-semibold mb-2 text-lg">
                  Your Message *
                </label>
                <textarea
                  id="query"
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-colors text-gray-900 text-lg resize-none"
                  placeholder="Tell us about your wedding plans, date, location, and any specific requirements..."
                />
              </div>

              {message && (
                <div
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
                  <p>{message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#c07259] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
