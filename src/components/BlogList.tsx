"use client";

import supabase from "@/utils/supabase";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Geist } from 'next/font/google'

const geist = Geist({ subsets: ['latin'] })

// Define the type for a Post
interface Post {
  id: number;
  title: string;
  slug: string;
}

const BlogList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("id, title, slug");

      if (error) {
        console.error("Error fetching posts:", error.message);
        return;
      }

      setPosts(data || []);
    };

    fetchPosts();
  }, []);

  return (
    <main className="flex justify-center border border-zinc-200 mt-14">
      <div className="bg-slate-500 max-w-3xl w-11/12 mt-14">
        <h1 className={`${geist.className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-neutral-950 dark:text-zinc-50`}>Blogs</h1>

      </div>
    </main>
  );
};

export default BlogList;
