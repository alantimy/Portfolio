/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { Global } from './components/Global';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white/30 selection:text-white">
      <Hero />
      <Services />
      <Stats />
      <Work />
      <TechStack />
      <Testimonials />
      <Global />
      <CTA />
      <Footer />
    </main>
  );
}
