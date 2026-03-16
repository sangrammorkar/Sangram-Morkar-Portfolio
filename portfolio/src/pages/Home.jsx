import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const stats = [
  { number: '10+', label: 'Projects Built' },
  { number: '5+', label: 'Technologies' },
  { number: '1+', label: 'Years Learning' },
  { number: '100%', label: 'Dedication' },
];

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      const orbs = heroRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.5;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* ─── Hero ────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-dark-900">
        {/* Animated background orbs */}
        <div className="orb absolute top-20 right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-accent-500/20 to-accent-700/10 blur-3xl transition-transform duration-300 ease-out" />
        <div className="orb absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-gradient-to-tr from-accent-300/15 to-accent-500/10 blur-3xl transition-transform duration-300 ease-out" />
        <div className="orb absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent-500/5 blur-3xl transition-transform duration-300 ease-out" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(244,63,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="font-mono text-accent-500 text-xs tracking-widest">AVAILABLE FOR WORK</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              Sangram
              <br />
              <span className="italic text-accent-500">Morkar</span>
            </h1>

            <div className="flex items-center gap-3 mb-6 h-10">
              <span className="font-heading text-xl text-gray-500 dark:text-gray-400">I'm a</span>
              <TypeAnimation
                sequence={[
                  'Java Developer', 2000,
                  'Full Stack Dev', 2000,
                  'Spring Boot Dev', 2000,
                  'Problem Solver', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-heading text-xl font-semibold text-accent-500"
              />
            </div>

            <p className="font-body text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Passionate Java Full Stack Developer specializing in building scalable web applications
              with Spring Boot, ReactJS, and modern cloud technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/projects" className="btn-primary">
                <i className="fas fa-code-branch text-sm" />
                View My Work
              </Link>
              <Link to="/contact" className="btn-outline">
                <i className="fas fa-paper-plane text-sm" />
                Contact Me
              </Link>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-gray-400 tracking-widest">FIND ME ON</span>
              <div className="h-px flex-1 max-w-8 bg-gray-300 dark:bg-gray-700" />
              {[
                { icon: 'fab fa-github', href: '#' },
                { icon: 'fab fa-linkedin-in', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
              ].map(({ icon, href }) => (
                <a key={icon} href={href}
                  className="w-9 h-9 rounded-lg border border-gray-200 dark:border-dark-600 hover:border-accent-500 hover:text-accent-500 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 hover:scale-110"
                  target="_blank" rel="noopener noreferrer">
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer decorative rings */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                {/* Rotating dashed ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent-500/40 animate-spin-slow" />
                {/* Inner static ring */}
                <div className="absolute inset-3 rounded-full border border-accent-500/20" />

                {/* Profile photo circle */}
                <div className="absolute inset-5 rounded-full overflow-hidden shadow-2xl shadow-accent-500/30 ring-4 ring-accent-500/20 animate-[glow_3s_ease-in-out_infinite_alternate]">
                  <img
                    src="/profile.jpeg"
                    alt="Sangram Morkar"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: '50% 10%' }}
                  />
                </div>

                {/* Accent dots */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-500 shadow-lg shadow-accent-500/60" />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent-300" />
                <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-400" />
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-600 shadow-lg shadow-accent-500/50" />
              </div>

              {/* Floating status badge below photo */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="px-4 py-2 rounded-full bg-white dark:bg-dark-700 shadow-xl border border-gray-100 dark:border-dark-600 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-heading text-xs font-semibold text-gray-700 dark:text-gray-300">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── Stats ───────────────────────────────── */}
      <section className="py-16 bg-white dark:bg-dark-800 border-y border-gray-100 dark:border-dark-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ number, label }, i) => (
              <div key={label} className="reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-1">{number}</div>
                <div className="font-body text-sm text-gray-500 dark:text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Skills Preview ─────────────── */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="section-subtitle">What I Work With</p>
            <h2 className="section-title text-gray-900 dark:text-white">Core Technologies</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fab fa-java', name: 'Java', desc: 'OOP, Collections, Multithreading', color: 'from-orange-400 to-orange-600', delay: '0s' },
              { icon: 'fas fa-leaf', name: 'Spring Boot', desc: 'REST APIs, Microservices, JPA', color: 'from-green-400 to-green-600', delay: '0.1s' },
              { icon: 'fab fa-react', name: 'React', desc: 'Hooks, Context, React Router', color: 'from-cyan-400 to-cyan-600', delay: '0.2s' },
              { icon: 'fas fa-database', name: 'MySQL', desc: 'Queries, Joins, Optimization', color: 'from-blue-400 to-blue-600', delay: '0.3s' },
              { icon: 'fab fa-html5', name: 'HTML / CSS', desc: 'Semantic HTML, Flexbox, Grid', color: 'from-red-400 to-orange-500', delay: '0.4s' },
              { icon: 'fab fa-git-alt', name: 'Git & GitHub', desc: 'Version control, Collaboration', color: 'from-gray-500 to-gray-700', delay: '0.5s' },
            ].map(({ icon, name, desc, color, delay }) => (
              <div
                key={name}
                className="reveal card p-6 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 group cursor-default"
                style={{ transitionDelay: delay }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${icon} text-white text-xl`} />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
                <p className="font-body text-sm text-gray-500 dark:text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link to="/skills" className="btn-outline">
              View All Skills <i className="fas fa-arrow-right text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-accent-600 to-accent-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 italic">
              Let's Build Something <br />Amazing Together
            </h2>
            <p className="font-body text-accent-200 text-lg mb-8 leading-relaxed">
              I'm currently open to full-time roles and freelance projects. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact"
                className="px-8 py-3.5 bg-white text-accent-600 hover:bg-gray-100 font-heading font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl shadow-lg">
                Get In Touch
              </Link>
              <Link to="/projects"
                className="px-8 py-3.5 border-2 border-white/50 hover:border-white text-white font-heading font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                See My Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
