import BackgroundScene from '@/components/BackgroundScene';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <BackgroundScene />
      <Nav />
      <div className="wrap">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
