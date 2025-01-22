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
    <div className="max-w-3xl mx-auto p-4 mt-40">
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="flex justify-center">
            <Link
              href={`/blog/${post.slug}`}
              className={`${geist.className} text-xl font-medium text-amber-50 underline`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
