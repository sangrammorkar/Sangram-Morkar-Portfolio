import { useEffect } from 'react';

const education = [
  {
    degree: 'B.E. Computer Engineering',
    institution: 'S.N.D. College of Engineering & Research Center',
    year: '2021 – 2025',
    icon: 'fas fa-graduation-cap',
    color: 'from-blue-400 to-blue-600',
  },
  {
    degree: 'Java Full Stack Developer Course',
    institution: 'QSpiders & JSpiders',
    year: '2024',
    icon: 'fas fa-code',
    color: 'from-accent-400 to-accent-600',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'K.A.A.N.M. Sonawane Arts, Science and Commerce College, Satana',
    year: '2021',
    icon: 'fas fa-school',
    color: 'from-purple-400 to-purple-600',
  },
];

const highlights = [
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Satana, Maharashtra' },
  { icon: 'fas fa-language', label: 'Languages', value: 'English, Hindi, Marathi' },
  { icon: 'fas fa-briefcase', label: 'Status', value: 'Open to Opportunities' },
  { icon: 'fas fa-heart', label: 'Interests', value: 'Coding, Reading, Gaming' },
];

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-subtitle">Who I Am</p>
          <h1 className="section-title text-gray-900 dark:text-white">About Me</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full mx-auto mt-4" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Photo + Quick Facts */}
          <div className="reveal">
            {/* Photo card */}
            <div className="relative mb-8">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-accent-500/25 relative ring-4 ring-accent-500/20">
                <img
                  src="/profile.jpeg"
                  alt="Sangram Morkar"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: '50% 8%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/30 via-transparent to-transparent" />
                {/* Decorative corner frames */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl border-2 border-white/30" />
                <div className="absolute bottom-4 left-4 w-8 h-8 rounded-lg border-2 border-white/20" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-700 rounded-2xl px-5 py-3 shadow-xl border border-gray-100 dark:border-dark-600 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-heading font-semibold text-sm text-gray-800 dark:text-white">Open to Work</span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon, label, value }) => (
                <div key={label} className="card p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <i className={`${icon} text-accent-500 text-xs`} />
                    <span className="font-mono text-xs text-gray-400 tracking-wider uppercase">{label}</span>
                  </div>
                  <p className="font-heading text-sm font-medium text-gray-800 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Bio */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Java Full Stack Developer &
              <span className="gradient-text"> Lifelong Learner</span>
            </h2>

            <div className="space-y-4 font-body text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Hi! I'm <strong className="text-gray-900 dark:text-white font-heading">Sangram Morkar</strong>, 
                a passionate Java Full Stack Developer based in Satana, Maharashtra. 
                I specialize in building robust and scalable web applications using Java, Spring Boot, and modern frontend frameworks.
              </p>
              <p>
                My journey into software development started with a fascination for problem-solving. 
                Through my BE degree and specialized training at QSpiders, I've developed a strong foundation in both 
                backend and frontend technologies.
              </p>
              <p>
                I love crafting elegant solutions to complex problems, whether it's designing RESTful APIs, 
                building responsive UIs, or optimizing database queries. I'm always excited to learn 
                new technologies and take on challenging projects.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new tech trends, contributing to open-source projects, 
                or sharpening my problem-solving skills on coding platforms.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="btn-primary">
                <i className="fas fa-download text-sm" /> Download CV
              </a>
              <a href="mailto:sangrammorkar2001@gmail.com" className="btn-outline">
                <i className="fas fa-envelope text-sm" /> Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="reveal">
          <div className="text-center mb-10">
            <p className="section-subtitle">My Background</p>
            <h2 className="section-title text-gray-900 dark:text-white">Education</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-accent-400 to-transparent hidden md:block" />

            <div className="space-y-6">
              {education.map(({ degree, institution, year, icon, color }, i) => (
                <div
                  key={degree}
                  className="reveal flex gap-6 items-start"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:flex flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${color} items-center justify-center shadow-lg z-10`}>
                    <i className={`${icon} text-white text-lg`} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 card p-6 hover:shadow-lg hover:shadow-accent-500/10 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading font-bold text-gray-900 dark:text-white text-lg">{degree}</h3>
                      <span className="px-3 py-1 rounded-full bg-accent-500/10 text-accent-500 font-mono text-xs">{year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <i className="fas fa-building text-xs" />
                      <span className="font-body text-sm">{institution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
