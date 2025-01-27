"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import supabase from "@/utils/supabase";
import ReactMarkdown from "react-markdown";
import { Geist } from "next/font/google"; 
import { Text } from "@geist-ui/core"; 
import './blog.css'

const geist = Geist({ subsets: ["latin"] });

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching post:", error.message);
        return;
      }

      setPost(data || null);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return null; 
  }

  return (
    <div className={`mt-32 ${geist.className} markdown-container mb-24`}>
      <div className="max-w-5xl mx-auto w-11/12">
        <h1 className="scroll-m-20 font-extrabold tracking-tight text-5xl text-neutral-950 dark:text-zinc-50">
          {post.title}
        </h1>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPostPage;

