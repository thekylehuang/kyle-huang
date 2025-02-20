import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ['latin']
})

const ResourcesPage = () => {
  return(
    <main className={`${geist.className} text-neutral-950 dark:text-zinc-50`}>
      <div className="w-full min-h-screen mt-14">
        <div className="w-5/6 max-w-4xl h-full mx-auto py-8">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
            Resources
          </h1>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl mb-8">
            Music I listen to:
          </h2>
          <iframe style={{ borderRadius: '12px' }} 
          src="https://open.spotify.com/embed/playlist/7wykI5MpA47dylYqzs32H4?utm_source=generator&theme=0" 
          width="100%" 
          height="352" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          >
          </iframe>
        </div>
      </div>
    </main>
  );
}

export default ResourcesPage;