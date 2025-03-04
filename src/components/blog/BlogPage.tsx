"use client";

import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Geist } from "next/font/google"; 
import './BlogPage.css';
import Navbar from '@/components/layout/Navbar';
import Footer from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"] });

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogPageComponent = ({ post }: { post: Post }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <Navbar />
      <div className={`mt-32 ${geist.className} markdown-container mb-24`}>
        <div className="max-w-5xl mx-auto w-11/12">
          <h1 className="scroll-m-20 font-extrabold tracking-tight text-5xl text-neutral-900 dark:text-zinc-50">
            {post.title}
          </h1>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPageComponent;