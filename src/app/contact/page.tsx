import ContactForm from "@/components/contact/ContactComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kyle Huang | Contact',
  description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
  keywords: ['Kyle Huang', 'creator', 'finance', 'technology', 'economics', 'personal growth', 'finance'],
  openGraph: {
    title: 'Kyle Huang | Contact',
    description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
    images: [{ url: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png' }],
    url: 'https://kyle-huang.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Contact',
    description: 'Contact Kyle Huang, a creator and polymath with an interest in finance and economics.',
    images: [{ url: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png' }],
  },
}

const Contact = () => {
  return (
    <ContactForm />
  );
}

export default Contact;