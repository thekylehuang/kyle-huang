import './Home.css';
import type { Metadata } from 'next'
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: 'Kyle Huang | Creator & Polymath',
  description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  openGraph: {
    title: 'Kyle Huang | Creator & Polymath',
    description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
    images: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png',
    url: 'https://kyle-huang.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Creator & Polymath',
    description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
    images: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png',
  },
}

const Home = () => {
  return(
    <>
      <main>
        <div className='hero-background relative h-[800px] w-full'>
          <h1 className={`${bebasNeue.className} hero-headline absolute left-0 right-0 mx-auto text-center font-extrabold`} style={{ color: 'var(--hero-text-color))', lineHeight: '0.9', top: '150px' }}>Kyle Huang</h1>
        </div>
      </main>
    </>
  );
}

export default Home;