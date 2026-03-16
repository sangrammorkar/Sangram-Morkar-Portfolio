import { NavLink } from 'react-router-dom';

const socials = [
  { icon: 'fab fa-github', href: 'https://github.com', label: 'GitHub' },
  { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fab fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'fas fa-envelope', href: 'mailto:sangram@example.com', label: 'Email' },
];

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 dark:bg-dark-900 text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-500/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent-700/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center shadow-lg shadow-accent-500/30">
                <span className="font-heading font-bold text-white text-sm">SM</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">Sangram Morkar</p>
                <p className="font-mono text-accent-400 text-xs tracking-widest">FULL STACK DEVELOPER</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting elegant digital experiences with clean code and thoughtful design. Open to exciting opportunities.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent-500 border border-white/10 hover:border-accent-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-500/25"
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-sm transition-all duration-300 ${
                        isActive ? 'text-accent-400' : 'text-gray-400 hover:text-accent-400 hover:translate-x-1'
                      }`
                    }
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-500/60 flex-shrink-0" />
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
            <div className="space-y-2 text-sm">
              <a href="mailto:sangrammorkar2001@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors duration-300">
                <i className="fas fa-envelope text-accent-500 text-xs w-4" />
                sangrammorkar2001@gmail.com
              </a>
              <a href="tel:+917822034168" className="flex items-center gap-2 text-gray-400 hover:text-accent-400 transition-colors duration-300">
                <i className="fas fa-phone text-accent-500 text-xs w-4" />
                +91 7822034168
              </a>
              <p className="flex items-center gap-2 text-gray-400">
                <i className="fas fa-map-marker-alt text-accent-500 text-xs w-4" />
                Satana, Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs font-body">
            © {year} Sangram Morkar. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-body flex items-center gap-1">
            Crafted with <i className="fas fa-heart text-accent-500 text-xs animate-pulse" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
