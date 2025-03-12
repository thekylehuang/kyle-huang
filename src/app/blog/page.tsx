import type { Metadata } from 'next'
import BlogList from '@/components/blog/BlogList'

export const metadata: Metadata = {
  title: 'Kyle Huang | Blogs',
  description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
  keywords: ['Kyle Huang', 'writer', 'blog', 'economics', 'student'],
  metadataBase: new URL('https://www.kyle-huang.me'),
  openGraph: {
    title: 'Kyle Huang | Blogs',
    description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
    images: 'https://www.kyle-huang.me/images/OpenGraphImage.png',
    url: 'https://www.kyle-huang.me',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Huang | Blogs',
    description: 'Kyle Huang is an economics student. He studies economics. Come onto this page to read his blogs, which are about economics.',
    images: 'https://www.kyle-huang.me/images/OpenGraphImage.png',
  },
}

const BlogListPage = () => {
  return <BlogList />
}

export default BlogListPage;