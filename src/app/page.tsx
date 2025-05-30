import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-beige-50">
      <Hero />
      <Testimonials />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}
