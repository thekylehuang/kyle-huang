import ContactForm from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kyle Huang | Contact',
  description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  metadataBase: new URL('https://www.kyle-huang.me'),
  openGraph: {
    title: 'Kyle Huang | Contact',
    description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
    url: 'https://www.kyle-huang.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Contact',
    description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
    images: [{ url: 'https://www.kyle-huang.me/images/OpenGraphImage.png' }],
  },
}

const Contact = () => {
  return (
    <ContactForm />
  );
}

export default Contact;