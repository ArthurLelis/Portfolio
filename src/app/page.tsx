'use client';

import { Header } from '@/view/sections/Header';
import { Main } from '@/view/sections/Main';
import { About } from '@/view/sections/About';
import { Projects } from '@/view/sections/Projects';
import { Skills } from '@/view/sections/Skills';
import { Contact } from '@/view/sections/Contact';
import { Footer } from '@/view/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
