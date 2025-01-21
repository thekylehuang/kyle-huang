import "./globals.css";
import Navbar from '../components/Navbar'
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className="antialiased">
          <Navbar />
          <main>{children}</main> 
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
