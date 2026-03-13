import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

const stats = [
  { value: 100, suffix: 'M+', label: 'Client Revenue Generated' },
  { value: 700, suffix: 'K', label: 'Monthly Visitors Built' },
  { value: 100, suffix: '+', label: 'Projects Delivered' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView && ref.current) {
      let startTimestamp: number | null = null;
      const duration = 2000; // 2 seconds
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Easing function: easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(easeProgress * value);
        
        if (ref.current) {
          ref.current.textContent = currentVal.toString() + suffix;
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, value, suffix]);

  return <span ref={ref} className="text-6xl md:text-8xl font-bold tracking-tighter">0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center text-center pt-16 md:pt-0 first:pt-0"
            >
              <div className="mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xl text-white/60 uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
