import { Metadata } from "next"
import ResourcesPage from "@/components/resources/ResourcesPage";

export const metadata: Metadata = {
  title: 'Kyle Huang | Resources',
  description: 'Find resources and information about Kyle Huang.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  openGraph: {
    title: 'Kyle Huang | Resources',
    description: 'Find resources and information about Kyle Huang.',
    images: [{ url: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png' }],
    url: 'https://kyle-huang.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Resources',
    description: 'Find resources and information about Kyle Huang.',
    images: [{ url: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png' }],
  },
}

const Resources = () => {
 return(
  <ResourcesPage />
 );
}

export default Resources;