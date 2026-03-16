import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Web Application',
    description: 'A feature-rich e-commerce platform with product catalog, shopping cart, user authentication, and order management. Built with Spring Boot backend and React frontend.',
    tags: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],
    github: '#',
    live: '#',
    category: 'Full Stack',
    gradient: 'from-orange-400 via-red-500 to-pink-600',
    icon: '🛒',
    svgIllustration: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#g1)" rx="0"/>
        {/* Background circles */}
        <circle cx="350" cy="-20" r="80" fill="white" fillOpacity="0.08"/>
        <circle cx="30" cy="220" r="60" fill="white" fillOpacity="0.06"/>
        {/* Browser mockup */}
        <rect x="40" y="30" width="260" height="160" rx="8" fill="white" fillOpacity="0.15"/>
        <rect x="40" y="30" width="260" height="28" rx="8" fill="white" fillOpacity="0.25"/>
        <circle cx="58" cy="44" r="4" fill="white" fillOpacity="0.7"/>
        <circle cx="72" cy="44" r="4" fill="white" fillOpacity="0.5"/>
        <circle cx="86" cy="44" r="4" fill="white" fillOpacity="0.3"/>
        <rect x="100" y="38" width="120" height="12" rx="6" fill="white" fillOpacity="0.3"/>
        {/* Content lines */}
        <rect x="56" y="72" width="80" height="60" rx="6" fill="white" fillOpacity="0.3"/>
        <rect x="148" y="72" width="80" height="60" rx="6" fill="white" fillOpacity="0.2"/>
        <rect x="56" y="145" width="172" height="8" rx="4" fill="white" fillOpacity="0.3"/>
        <rect x="56" y="158" width="120" height="6" rx="3" fill="white" fillOpacity="0.2"/>
        {/* Cart icon */}
        <circle cx="330" cy="110" r="40" fill="white" fillOpacity="0.15"/>
        <text x="330" y="120" textAnchor="middle" fontSize="30" fill="white" fillOpacity="0.9">🛒</text>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Student Management System',
    subtitle: 'CRUD Web Application',
    description: 'A comprehensive student management system for educational institutions with CRUD operations, attendance tracking, grade management, and report generation.',
    tags: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'Bootstrap'],
    github: '#',
    live: '#',
    category: 'Backend',
    gradient: 'from-blue-500 via-indigo-500 to-purple-600',
    icon: '🎓',
    svgIllustration: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#g2)" rx="0"/>
        <circle cx="380" cy="0" r="90" fill="white" fillOpacity="0.06"/>
        <circle cx="0" cy="200" r="70" fill="white" fillOpacity="0.05"/>
        {/* Table mockup */}
        <rect x="35" y="35" width="240" height="150" rx="8" fill="white" fillOpacity="0.12"/>
        <rect x="35" y="35" width="240" height="32" rx="8" fill="white" fillOpacity="0.25"/>
        <text x="47" y="56" fontSize="11" fill="white" fillOpacity="0.9" fontFamily="monospace">Student Records</text>
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x="35" y={75 + i*26} width="240" height="24" rx="0" fill="white" fillOpacity={i%2===0?0.08:0.04}/>
            <rect x="47" y={82 + i*26} width="50" height="8" rx="4" fill="white" fillOpacity="0.5"/>
            <rect x="110" y={82 + i*26} width="60" height="8" rx="4" fill="white" fillOpacity="0.4"/>
            <rect x="185" y={82 + i*26} width="40" height="8" rx="4" fill="white" fillOpacity="0.3"/>
            <rect x="237" y={80 + i*26} width="28" height="12" rx="6" fill="white" fillOpacity="0.3"/>
          </g>
        ))}
        {/* Icon */}
        <circle cx="330" cy="110" r="40" fill="white" fillOpacity="0.12"/>
        <text x="330" y="120" textAnchor="middle" fontSize="28" fill="white">🎓</text>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Task Management App',
    subtitle: 'Productivity Tool',
    description: 'A Kanban-style task management application with drag-and-drop functionality, priority levels, deadline tracking, and team collaboration features.',
    tags: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
    github: '#',
    live: '#',
    category: 'Frontend',
    gradient: 'from-cyan-400 via-teal-500 to-emerald-600',
    icon: '✅',
    svgIllustration: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#g3)" rx="0"/>
        <circle cx="370" cy="10" r="70" fill="white" fillOpacity="0.07"/>
        {/* Kanban columns */}
        {['To Do','In Progress','Done'].map((label, ci) => (
          <g key={label}>
            <rect x={30 + ci*100} y="35" width="85" height="150" rx="8" fill="white" fillOpacity="0.12"/>
            <text x={30 + ci*100 + 42} y="55" textAnchor="middle" fontSize="9" fill="white" fillOpacity="0.9" fontFamily="sans-serif">{label}</text>
            {[0,1,ci<2?2:-1].filter(n=>n>=0).slice(0,ci===1?2:ci===2?3:3).map((_,ti) => (
              <rect key={ti} x={38 + ci*100} y={65 + ti*35} width="68" height="26" rx="5" fill="white" fillOpacity="0.25"/>
            ))}
          </g>
        ))}
        {/* Checkmark */}
        <circle cx="345" cy="110" r="38" fill="white" fillOpacity="0.12"/>
        <text x="345" y="120" textAnchor="middle" fontSize="26" fill="white">✅</text>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Blog Platform API',
    subtitle: 'RESTful Backend Service',
    description: 'A robust RESTful API for a blogging platform featuring user authentication with JWT, post management, comment system, categories, and role-based access control.',
    tags: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA'],
    github: '#',
    live: '#',
    category: 'Backend',
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-700',
    icon: '📝',
    svgIllustration: (
      <svg viewBox="0 0 400 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.9"/>
          </linearGradient>
        </defs>
        <rect width="400" height="220" fill="url(#g4)" rx="0"/>
        <circle cx="360" cy="-10" r="80" fill="white" fillOpacity="0.07"/>
        <circle cx="10" cy="230" r="60" fill="white" fillOpacity="0.05"/>
        {/* API endpoint mockup */}
        <rect x="30" y="35" width="250" height="150" rx="10" fill="white" fillOpacity="0.1"/>
        <rect x="30" y="35" width="250" height="30" rx="10" fill="white" fillOpacity="0.2"/>
        <text x="44" y="55" fontSize="10" fill="white" fontFamily="monospace">API Endpoints</text>
        {[
          {method:'GET', path:'/api/posts', color:'#4ade80'},
          {method:'POST', path:'/api/posts', color:'#60a5fa'},
          {method:'PUT', path:'/api/posts/:id', color:'#facc15'},
          {method:'DELETE', path:'/api/posts/:id', color:'#f87171'},
        ].map(({method, path, color}, i) => (
          <g key={method+i}>
            <rect x="42" y={72 + i*28} width="36" height="16" rx="4" fill={color} fillOpacity="0.4"/>
            <text x="60" y={84 + i*28} textAnchor="middle" fontSize="8" fill="white" fontFamily="monospace" fontWeight="bold">{method}</text>
            <text x="90" y={84 + i*28} fontSize="9" fill="white" fillOpacity="0.8" fontFamily="monospace">{path}</text>
          </g>
        ))}
        {/* Icon */}
        <circle cx="335" cy="110" r="38" fill="white" fillOpacity="0.12"/>
        <text x="335" y="120" textAnchor="middle" fontSize="26" fill="white">📝</text>
      </svg>
    ),
  },
];

const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="section-subtitle">My Work</p>
          <h1 className="section-title text-gray-900 dark:text-white">Projects</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full mx-auto mt-4" />
          <p className="font-body text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            A selection of projects I've built — from full-stack applications to REST APIs and frontend interfaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl font-heading font-medium text-sm transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                  : 'bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600 border border-gray-200 dark:border-dark-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal group card overflow-hidden hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2 transition-all duration-500"
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
            >
              {/* Image / Illustration */}
              <div className="relative h-52 overflow-hidden">
                {project.svgIllustration}
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white font-mono text-xs tracking-wider">
                    {project.category}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white text-gray-900 font-heading font-semibold text-sm rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <i className="fab fa-github" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-accent-500 text-white font-heading font-semibold text-sm rounded-xl hover:bg-accent-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <i className="fas fa-external-link-alt" /> Live
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-1 group-hover:text-accent-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-accent-500 tracking-wider">{project.subtitle}</p>
                </div>

                <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-dark-600 text-gray-600 dark:text-gray-400 font-mono text-xs hover:bg-accent-500/10 hover:text-accent-500 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-heading font-medium text-gray-600 dark:text-gray-300 hover:text-accent-500 transition-colors duration-300"
                  >
                    <i className="fab fa-github" /> GitHub
                  </a>
                  <span className="text-gray-300 dark:text-gray-700">|</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-heading font-medium text-gray-600 dark:text-gray-300 hover:text-accent-500 transition-colors duration-300"
                  >
                    <i className="fas fa-external-link-alt text-xs" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center reveal">
          <div className="card p-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-gray-900 dark:bg-white/10 flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-github text-white text-2xl" />
            </div>
            <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-2">More on GitHub</h3>
            <p className="font-body text-gray-500 dark:text-gray-400 text-sm mb-6">
              These are just a few highlights. Check out my GitHub for more projects, experiments, and open-source contributions.
            </p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-github" /> Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
