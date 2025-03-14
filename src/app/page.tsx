import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';

export const metadata: Metadata = {
  title: 'Kyle Huang | Creator & Polymath',
  description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  metadataBase: new URL('https://www.kyle-huang.me'),
  openGraph: {
    title: 'Kyle Huang | Creator & Polymath',
    description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
    url: 'https://www.kyle-huang.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Creator & Polymath',
    description: 'Kyle Huang is a creator and a polymath, with an interest in finance and economics.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
  },
}

const Home = () => {
  return(
      <HomePage />
  );
}

export default Home;