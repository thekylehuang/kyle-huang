import Marquee from "react-fast-marquee"

const MarqueeComponent = () => {
  return (
    <Marquee className='h-20 w-full border-t border-b border-zinc-700 bg-zinc-50 dark:bg-neutral-900 text-neutral-900 dark:text-zinc-50 text-2xl font-extrabold'
    autoFill={true}>
      <span className="mx-4">Kyle Huang</span>
      <span className="mx-4">•</span>
      <span className="mx-4">Creator</span>
      <span className="mx-4">•</span>
      <span className="mx-4">Developer</span>
      <span className="mx-4">•</span>
      <span className="mx-4">Pianist</span>
      <span className="mx-4">•</span>
      <span className="mx-4">Athlete</span>
      <span className="mx-4">•</span>
      <span className="mx-4">Economist</span>
      <span className="mx-4">•</span>
    </Marquee>
  );
}
export default MarqueeComponent;