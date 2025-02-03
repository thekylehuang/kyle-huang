import Marquee from "react-fast-marquee"

const MarqueeComponent = () => {
  return (
    <Marquee className='h-20 w-full border-t border-b border-zinc-700 bg-zinc-50 dark:bg-neutral-950 text-neutral-950 dark:text-zinc-50 text-2xl font-extrabold'
    autoFill={true}>
      <span className="mx-8">Kyle Huang</span>
      <span className="mx-8">•</span>
      <span className="mx-8">Creator</span>
      <span className="mx-8">•</span>
      <span className="mx-8">Pianist</span>
      <span className="mx-8">•</span>
      <span className="mx-8">Economist</span>
      <span className="mx-8">•</span>
    </Marquee>
  );
}
export default MarqueeComponent;