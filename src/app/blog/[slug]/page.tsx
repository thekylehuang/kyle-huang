"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Get the dynamic `slug` from the URL
import supabase from "@/utils/supabase";
import ReactMarkdown from "react-markdown"; // For rendering Markdown content
import { Geist } from "next/font/google"; // Import Geist font
import { Text, Loading } from "@geist-ui/core"; // Importing Text and Loading from Geist UI

// Initialize the Geist font
const geist = Geist({ subsets: ["latin"] });

// Define the Post type
interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogPostPage = () => {
  const { slug } = useParams(); // Retrieve the dynamic slug from the URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single(); // Fetch a single post by slug

      if (error) {
        console.error("Error fetching post:", error.message);
        return;
      }

      setPost(data || null);
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  return (
    <div className={`mt-32 ${geist.className}`}> {/* Apply Geist font globally */}
      {loading ? (
        <Loading>Loading...</Loading> // Show loading spinner while fetching
      ) : post ? (
        <div className="max-w-[80ch] mx-auto"> {/* Limit width to about 80 characters per line */}
          <Text h1>{post.title}</Text> {/* Display the title of the post */}
          <ReactMarkdown>{post.content}</ReactMarkdown> {/* Render the Markdown content */}
        </div>
      ) : (
        <Text>No post found.</Text> // Show message if no post is found
      )}
    </div>
  );
};

export default BlogPostPage;
