import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const techStack = [
  'Python', 'HTML', 'Streamlit', 'React', 'TypeScript', 'Tailwind CSS', 
  'JavaScript', 'Web Development', 'AI', 'Git', 
  'Web Architecture', 'Open Source', 'Digital Marketing'
];

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="py-32 bg-black text-white overflow-hidden relative border-t border-white/10">
      <div className="container mx-auto px-6 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6"
        >
          Tech Stack
        </motion.h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          I use modern, scalable technologies to build robust digital products that stand the test of time.
        </p>
      </div>

      <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div style={{ y: y1 }} className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl px-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                className="px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-lg md:text-2xl font-medium tracking-tight hover:bg-white/10 hover:border-white/40 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Abstract Background Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path 
            d="M0,100 Q400,300 800,100 T1600,100" 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="2"
            style={{ y: y2 }}
          />
          <motion.path 
            d="M0,300 Q400,100 800,300 T1600,300" 
            fill="none" 
            stroke="url(#grad1)" 
            strokeWidth="1"
            style={{ y: y1 }}
          />
        </svg>
      </div>
    </section>
  );
}
