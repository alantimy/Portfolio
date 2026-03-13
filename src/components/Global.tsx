import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function Global() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6"
        >
          Based in <br /> Riga, Latvia
        </motion.h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-20">
          Available for global opportunities, remote work, and exciting collaborations worldwide.
        </p>
      </div>

      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full border border-white/10 absolute animate-[spin_60s_linear_infinite]" />
          <div className="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full border border-white/20 absolute animate-[spin_40s_linear_infinite_reverse]" />
          <div className="w-[40vw] h-[40vw] md:w-[20vw] md:h-[20vw] rounded-full border border-white/30 absolute animate-[spin_20s_linear_infinite]" />
          
          {/* Map Points */}
          <div className="absolute w-3 h-3 bg-white rounded-full top-[30%] left-[30%] shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          <div className="absolute w-2 h-2 bg-white/60 rounded-full top-[40%] right-[30%] shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          <div className="absolute w-4 h-4 bg-white rounded-full bottom-[30%] left-[40%] shadow-[0_0_25px_rgba(255,255,255,0.9)]" />
          <div className="absolute w-2 h-2 bg-white/40 rounded-full bottom-[40%] right-[40%] shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
        </motion.div>
      </div>
    </section>
  );
}
