import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'AI News Summarizer',
    category: 'AI & Python',
    description: 'AI-powered news summarizer built with Python and Streamlit. Processes news articles and generates concise summaries using intelligent algorithms.',
    technologies: ['Python', 'Streamlit', 'AI'],
    image: 'https://images.unsplash.com/photo-1585717022220-a08e6a46e0d4?auto=format&fit=crop&q=80&w=2000',
    video: 'https://cdn.coverr.co/videos/coverr-a-person-typing-on-a-laptop-5244/1080p.mp4',
    github: 'https://github.com/alantimy/AI-news-summarizer',
    demo: '#',
  },
  {
    title: 'Internet and Web Basics',
    category: 'Web Development',
    description: 'Foundational web development project exploring HTML and core web technologies. Demonstrates understanding of web architecture and HTML standards.',
    technologies: ['HTML'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000',
    video: 'https://cdn.coverr.co/videos/coverr-abstract-neon-lights-5231/1080p.mp4',
    github: 'https://github.com/alantimy/Internet-and-Web-Basics',
    demo: '#',
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className="group relative h-[60vh] md:h-[70vh] w-[80vw] md:w-[60vw] flex-shrink-0 overflow-hidden rounded-3xl bg-zinc-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className={`h-full w-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-80'}`}
        />
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </motion.div>
      
      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-end">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-widest text-white/60 uppercase mb-2">
              {project.category}
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h3>
            <p className="text-white/70 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full bg-white/10 backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full hover:bg-white/30 transition-colors">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const scrollWidth = container.scrollWidth - window.innerWidth;

    const tween = gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${scrollWidth}`,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative h-screen bg-zinc-950 overflow-hidden">
      <div className="flex h-full items-center">
        <div ref={containerRef} className="flex gap-8 px-4 md:px-24 w-max">
          <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center pr-12">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-white mb-6">
              Selected <br />
              <span className="text-white/40">Work</span>
            </h2>
            <p className="text-xl text-white/60 max-w-md">
              A curated selection of my recent projects, showcasing my expertise across various technologies and disciplines.
            </p>
          </div>
          
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
