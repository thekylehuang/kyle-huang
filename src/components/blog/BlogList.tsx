"use client";

import supabase from "@/utils/supabase";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Geist_Mono, Geist, Merriweather } from 'next/font/google'
import dayjs from 'dayjs'

const geist = Geist({ subsets: ['latin'] })
const geistmono = Geist_Mono({ subsets: ['latin'] })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

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

const BlogCard = ({ post }: { post: Post }) => {
  return (
      <Link href={`/blog/${post.slug}`} scroll={false} >
        <div className='mt-4 hover:bg-zinc-200 hover:dark:bg-zinc-800 p-4 rounded-lg transition-colors'>
          <h2 className={`${geist.className} text-neutral-900 dark:text-zinc-50 scroll-m-20 text-3xl font-semibold tracking-tight`}>{post.title}</h2>
          <p className={`${merriweather.className} text-neutral-600 dark:text-zinc-300 font-normal mt-4`}>{post.content.substring(0, 195)}...</p>
          <p className={`${geistmono.className} mt-4 text-neutral-900 dark:text-zinc-50 font-semibold inline-block`}>{formatDate(post.created_at)}</p>
        </div>
      </Link>
  );
};

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
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

  return (
    <main className="flex justify-center mt-14 min-h-screen py-8">
      <div className="max-w-3xl w-11/12 mt-14">
        <h1 className={`${geist.className} scroll-m-20 font-extrabold tracking-tight text-5xl text-neutral-900 dark:text-zinc-50 ml-3`}>Writing</h1>
        <div className='mt-8 lg:mt-36'>
          {posts.map(post => (
            <BlogCard key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogList;
