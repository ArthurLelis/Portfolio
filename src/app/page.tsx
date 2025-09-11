'use client';

import { Fragment } from 'react';

import { Header } from '@/view/components/Header';
import { Main } from '@/view/sections/Main';
import { Services } from '@/view/sections/Services';
import { Projects } from '@/view/sections/Projects';
import { About } from '@/view/sections/About';
import { Contact } from '@/view/sections/Contact';
import { Footer } from '@/view/sections/Footer';
import { Toaster } from '@/view/components/Toaster';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />

      <Toaster />
    </Fragment>
  );
}
