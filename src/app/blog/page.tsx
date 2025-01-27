import type { Metadata } from 'next'
import BlogList from '@/components/BlogList'

export const metadata: Metadata = {
  title: 'Kyle Huang | Blogs',
  description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
  keywords: ['Kyle Huang', 'writer', 'blog', 'economics', 'student'],
  openGraph: {
    title: 'Kyle Huang | Blogs',
    description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
    images: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png',
    url: 'https://kyle-huang.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Blogs',
    description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
    images: 'https://kyle-huang.vercel.app/images/OpenGraphImage.png',
  },
}

const BlogListPage = () => {
  return <BlogList />
}

export default BlogListPage;