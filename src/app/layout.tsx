import "./globals.css"
import Navbar from '../components/layout/Navbar'
import Footer from "@/components/layout/Footer"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Analytics } from "@vercel/analytics/react"
import React, { Suspense } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased dark:bg-neutral-900 flex flex-col gap-0">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            <Suspense>
              {children}
            </Suspense>
            <Analytics />
            <Footer />
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
