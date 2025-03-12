import { Metadata } from "next"
import ResourcesPage from "@/components/resources/ResourcesPage";

export const metadata: Metadata = {
  title: 'Kyle Huang | Resources',
  description: 'Find resources and information about Kyle Huang.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  metadataBase: new URL('https://www.kyle-huang.me'),
  openGraph: {
    title: 'Kyle Huang | Resources',
    description: 'Find resources and information about Kyle Huang.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
    url: 'https://www.kyle-huang.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Resources',
    description: 'Find resources and information about Kyle Huang.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
  },
}

const Resources = () => {
 return(
  <ResourcesPage />
 );
}

export default Resources;