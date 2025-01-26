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
      <main>
        <div className='relative h-[800px] w-full bg-zinc-50 dark:bg-neutral-950'>
        </div>
      </main>
    </>
  );
}

export default Home;