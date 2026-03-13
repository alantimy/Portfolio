import { motion } from 'motion/react';
import { Monitor, Smartphone, PenTool, Globe } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive, user-centric applications that enhance web architecture understanding and deliver real value.',
    icon: Monitor,
  },
  {
    title: 'Hands-On Projects',
    description: 'Bridging theoretical knowledge with practical application through real-world development projects and problem-solving.',
    icon: Smartphone,
  },
  {
    title: 'Collaboration & Optimization',
    description: 'Working with peers to troubleshoot and optimize application performance while fostering teamwork and technical growth.',
    icon: PenTool,
  },
  {
    title: 'Digital Marketing',
    description: 'Developing web solutions with a focus on digital marketing strategies and modern web technologies.',
    icon: Globe,
  },
];

export function Services() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6"
          >
            Expertise
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px w-full bg-white/20 origin-left"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 p-4 bg-white/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-3xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/60 text-lg leading-relaxed">{service.description}</p>
                
                <div className="mt-12 flex items-center text-sm font-medium uppercase tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                  <span>Explore</span>
                  <motion.span 
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    â
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
