import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={`${geist.className} border-t border-zinc-700 h-96 w-full bg-zinc-50 dark:bg-neutral-950 flex justify-center`}>
    </footer>
  )
}

export default Footer;