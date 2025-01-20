import './Home.css';
import Head from 'next/head'

export const metadata = {
  title: 'Kyle Huang | Creator & Polymath'
};

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