import { useEffect, useState } from 'react';

const contactInfo = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'sangrammorkar2001@gmail.com', href: 'mailto:sangrammorkar2001@gmail.com', color: 'from-red-400 to-pink-500' },
  { icon: 'fas fa-phone', label: 'Phone', value: '+91 7822034168', href: 'tel:+917822034168', color: 'from-green-400 to-teal-500' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/sangram', href: 'https://linkedin.com', color: 'from-blue-400 to-blue-600' },
  { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/sangram', href: 'https://github.com', color: 'from-gray-600 to-gray-800' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Satana, Maharashtra', href: null, color: 'from-orange-400 to-red-500' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle">Let's Talk</p>
          <h1 className="section-title text-gray-900 dark:text-white">Get In Touch</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full mx-auto mt-4" />
          <p className="font-body text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-6">Contact Information</h2>
            {contactInfo.map(({ icon, label, value, href, color }) => (
              <div key={label} className="card p-4 hover:shadow-md hover:shadow-accent-500/10 hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${icon} text-white text-sm`} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-400 tracking-wider uppercase">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                        className="font-heading text-sm font-medium text-gray-800 dark:text-white hover:text-accent-500 transition-colors duration-300">
                        {value}
                      </a>
                    ) : (
                      <p className="font-heading text-sm font-medium text-gray-800 dark:text-white">{value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="card p-5 mt-6 bg-gradient-to-br from-accent-500/10 to-accent-600/5 border-accent-500/20">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="font-heading font-semibold text-sm text-gray-900 dark:text-white">Currently Available</p>
                  <p className="font-body text-xs text-gray-500 dark:text-gray-400 mt-0.5">Open to full-time roles & freelance work</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="card p-8">
              <h2 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-6">Send Me a Message</h2>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500" />
                  <span className="font-body text-sm text-green-700 dark:text-green-300">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-heading text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Sangram Morkar"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-body text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-body text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject <span className="text-accent-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-body text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block font-heading text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-body text-sm focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <i className="fas fa-spinner fa-spin text-sm" /> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane text-sm" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
