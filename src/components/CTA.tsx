import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import ctaBg from '../../assets/kling_20260315_作品_Dynamic_Pr_1238_0.mp4';

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-48 bg-zinc-950 text-white relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 10%' }}
        src={ctaBg}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div style={{ y, opacity }} className="flex flex-col items-center">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-8 leading-none">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
              The Future
            </span>
          </h2>
          
          <div className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-16 font-light space-y-4">
            <p>Ready to transform your digital presence? Get in touch.</p>
            <div className="flex flex-col items-center gap-2 mt-8 text-lg">
              <p><span className="text-white/40">Email:</span> <a href="mailto:itsalantimy@gmail.com" className="hover:text-white transition-colors">itsalantimy@gmail.com</a></p>
              <p><span className="text-white/40">Phone:</span> <a href="tel:+37126694661" className="hover:text-white transition-colors">+371 26694661</a></p>
              <p><span className="text-white/40">Location:</span> Riga, Latvia</p>
            </div>
          </div>
          
          <motion.a 
            href="mailto:itsalantimy@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-white text-black rounded-full font-bold text-xl overflow-hidden inline-block"
          >
            <span className="relative z-10 flex items-center gap-4">
              Start a Project
              <motion.span 
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 10 }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-zinc-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
