import "./globals.css"
import Navbar from '../components/layout/Navbar'
import Footer from "@/components/layout/Footer"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased bg-zinc-50 dark:bg-neutral-950 flex flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
