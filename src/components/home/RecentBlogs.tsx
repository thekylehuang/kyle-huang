"use client"

import supabase from "@/utils/supabase";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import dayjs from 'dayjs'
import Link from "next/link";

const geist = Geist({
  subsets: ['latin']
})

const geistmono = Geist_Mono({
  subsets: ['latin']
})

const librebaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700']
})

// Define the type for a Post
interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  created_at: string;
}

const formatDate = (timestamp: string) => {
  return dayjs(timestamp).format('DD MMMM YYYY');
};

const BlogCard = ({ post, index }: { post: Post, index: number }) => {
  return (
      <Link href={`/blog/${post.slug}`} scroll={false} >
        <motion.div 
        className='mt-4 hover:bg-zinc-200 hover:dark:bg-zinc-800 p-4 rounded-lg transition-colors flex justify-between flex-col md:flex-row'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false }} 
        transition={{
          delay: index * 0.2,
          duration: 0.6,
          ease: 'easeOut',
        }}>
          <h1 className={`${librebaskerville.className} text-neutral-900 dark:text-zinc-50 scroll-m-20 font-semibold tracking-tight text-lg lg:text-xl`}>{post.title}</h1>
          <p className={`${librebaskerville.className} text-neutral-600 dark:text-zinc-400 font-semibold inline-block text-lg lg:text-xl`}>{formatDate(post.created_at)}</p>
        </motion.div>
      </Link>
  );
};

const RecentBlogs = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("id, title, slug, content, created_at").order("id", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error.message);
        return;
      }

      setPosts(data || []);
    };

    fetchPosts();
  }, []);
  return(
    <div className="w-full bg-zinc-50 dark:bg-neutral-900 border-b border-b-zinc-700">
      <div className="h-full mx-auto w-5/6 max-w-4xl text-neutral-900 dark:text-zinc-50 py-12 border-opacity-0 xs:border-x xs:border-opacity-100 border-zinc-700 px-0 xs:px-8 xl:px-16 box-content">
        <h1 className={`${geistmono.className} text-xl font-extrabold mb-8`}>Recent Blogs</h1>
        <div className="mb-8">
          {posts.slice(0,4).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        <Link href="/blog" className={`${geist.className}`}>
          <motion.p         
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: false }} 
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="text-md font-medium text-neutral-600 dark:text-zinc-400 group inline">
            View All <span><ArrowRight size={18} className="inline relative bottom-[2px] left-0 group-hover:left-2 transition-all"/></span>
          </motion.p>
        </Link>
      </div>
    </div>
  );
}

export default RecentBlogs;