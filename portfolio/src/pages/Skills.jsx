import { useEffect, useRef } from 'react';

const skillGroups = [
  {
    category: 'Backend',
    icon: 'fas fa-server',
    color: 'from-orange-400 to-orange-600',
    skills: [
      { name: 'Java', level: 85, icon: 'fab fa-java' },
      { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf' },
      { name: 'Spring MVC', level: 75, icon: 'fas fa-sitemap' },
      { name: 'Hibernate / JPA', level: 72, icon: 'fas fa-database' },
      { name: 'REST APIs', level: 82, icon: 'fas fa-exchange-alt' },
    ],
  },
  {
    category: 'Frontend',
    icon: 'fas fa-paint-brush',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'React', level: 78, icon: 'fab fa-react' },
      { name: 'JavaScript', level: 75, icon: 'fab fa-js-square' },
      { name: 'HTML5 & CSS3', level: 85, icon: 'fab fa-html5' },
      { name: 'Tailwind CSS', level: 70, icon: 'fas fa-wind' },
      { name: 'Bootstrap', level: 80, icon: 'fab fa-bootstrap' },
    ],
  },
  {
    category: 'Database & Tools',
    icon: 'fas fa-database',
    color: 'from-blue-400 to-indigo-600',
    skills: [
      { name: 'MySQL', level: 80, icon: 'fas fa-database' },
      { name: 'Git & GitHub', level: 82, icon: 'fab fa-github' },
      { name: 'Postman', level: 78, icon: 'fas fa-paper-plane' },
      { name: 'Maven', level: 72, icon: 'fas fa-box' },
      { name: 'VS Code / IntelliJ', level: 85, icon: 'fas fa-code' },
    ],
  },
];

const tools = [
  'Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'JPA',
  'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
  'Bootstrap', 'MySQL', 'Git', 'GitHub', 'Postman', 'Maven',
  'IntelliJ IDEA', 'VS Code', 'Eclipse', 'Tomcat', 'REST API',
];

function SkillBar({ name, level, icon, delay = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          el.style.width = `${level}%`;
        }, delay);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <i className={`${icon} text-accent-500 text-sm w-4 text-center`} />
          <span className="font-heading font-medium text-sm text-gray-800 dark:text-gray-200">{name}</span>
        </div>
        <span className="font-mono text-xs text-accent-500 font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-dark-600 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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
          <p className="section-subtitle">My Expertise</p>
          <h1 className="section-title text-gray-900 dark:text-white">Technical Skills</h1>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-accent-300 rounded-full mx-auto mt-4" />
          <p className="font-body text-gray-500 dark:text-gray-400 mt-4 max-w-lg mx-auto">
            A comprehensive look at the technologies and tools I work with regularly.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillGroups.map(({ category, icon, color, skills }, gi) => (
            <div
              key={category}
              className="reveal card p-6 hover:shadow-lg hover:shadow-accent-500/10 transition-all duration-300"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-dark-600">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                  <i className={`${icon} text-white text-sm`} />
                </div>
                <h3 className="font-heading font-bold text-gray-900 dark:text-white">{category}</h3>
              </div>

              {/* Skill bars */}
              {skills.map(({ name, level, icon: skillIcon }, si) => (
                <SkillBar key={name} name={name} level={level} icon={skillIcon} delay={si * 150} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="reveal">
          <div className="text-center mb-8">
            <p className="section-subtitle">Full Stack</p>
            <h2 className="section-title text-gray-900 dark:text-white">Tech Stack</h2>
          </div>
          <div className="card p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, i) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-xl bg-gray-50 dark:bg-dark-800 border border-gray-200 dark:border-dark-600 hover:border-accent-500 hover:text-accent-500 hover:bg-accent-500/5 font-heading font-medium text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 cursor-default hover:scale-105"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
