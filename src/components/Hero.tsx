import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import { AbstractOrb } from './AbstractOrb';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <AbstractOrb />
            <Environment preset="city" />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase"
          >
            Alan
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
          >
            Timy
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light"
        >
          Building Skills in Web Development & Digital Marketing | Open to Internships
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
        >
          <a href="#work" className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 inline-block">
            See Work
          </a>
          <a href="https://drive.google.com/file/d/1yJaBMmONaCgRYgttrrRQKZW_pEVfhZ5L/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 inline-block">
            View Resume
          </a>
        </motion.div>
      </div>

      {/* Particles/Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80 pointer-events-none" />
    </section>
  );
}
