import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Earners of this certification have a comprehensive understanding of AWS services and technologies. They demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements.",
    url: "https://www.credly.com/users/alan-timy",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    description: "Earners of this designation demonstrated the skills, knowledge and competency to perform the responsibilities of Kubernetes administrators.",
    url: "https://www.credly.com/users/alan-timy",
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    description: "Earners of this designation have demonstrated the ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",
    url: "https://www.credly.com/users/alan-timy",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % certifications.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
          >
            Professional <br />
            <span className="text-white/40">Certifications</span>
          </motion.h2>
          
          <div className="flex gap-4 mt-8 md:mt-0">
            <button 
              onClick={prev}
              className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[300px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-12 text-white/80">
                  {certifications[currentIndex].description}
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold tracking-tight">{certifications[currentIndex].name}</h4>
                    <p className="text-white/60 text-sm uppercase tracking-widest mt-1">{certifications[currentIndex].issuer}</p>
                  </div>
                  <a 
                    href={certifications[currentIndex].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="ml-auto px-6 py-3 border border-white/20 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
