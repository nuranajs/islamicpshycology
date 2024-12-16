import Services from '@/components/Services';
import Projects from '@/components/Projects';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import HeroCarousel from '@/components/HeroCarousel';
import About from '@/components/About';
import { FooterSection } from '@/components/Footer';

// Tambahkan revalidate
export const revalidate = 0 // revalidate at most every hour

async function getHeroSlides() {
  return await client.fetch(groq`
    *[_type == "heroCarousel"] {
      title,
      description,
      "image": image.asset->,
      buttonText,
      buttonLink
    }
  `, {}, // tambahkan cache: 'no-store' untuk selalu fetch data baru
  { cache: 'no-store' })
}

export default async function Home() {
  const slides = await getHeroSlides();
  return (
    <main>
      <HeroCarousel slides={slides} />
      <About />
      <Services />
      <Projects />
      <FooterSection />
    </main>
  )
}
