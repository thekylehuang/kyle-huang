import "./globals.css"
import Navbar from '../components/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased bg-zinc-50 dark:bg-neutral-950">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
