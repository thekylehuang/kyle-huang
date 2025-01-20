import './Home.css';
import Head from 'next/head'
import type { Metadata } from 'next'

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
    <Head>
      <link rel="preload" href="/fonts/BebasNeue.ttf" as="font" type="font/ttf" crossOrigin='anonymous' />
    </Head>
      <main>
        <div className='hero-background'>
          <h1 className='hero-headline'>Kyle Huang</h1>
        </div>
      </main>
    </>
  );
}

export default Home;