"use client"

import supabase from '@/utils/supabase';
import { useState, useEffect } from 'react';

// Define the type for a Post
interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string;
}

const Blog = () => {
  // Explicitly define the state as an array of Post objects
  const [posts, setPosts] = useState<Post[]>([]);

  // Fetch the posts when the component mounts
  useEffect(() => {
    const getPosts = async () => {
      // Corrected query with 2 arguments: table name and the expected return type (Post[])
      const { data, error } = await supabase.from('posts').select('*');

      if (error) {
        console.error("Error fetching posts:", error.message);
        return;
      }

      console.log("Fetched posts:", data);
      setPosts(data || []); // Safely set the posts state
    };

    getPosts(); // Call the function to fetch the posts
  }, []); // Empty array ensures this only runs once when the component mounts

  return (
    <>
      <h1>My Blog</h1>
      {/* Render posts if available */}
      <div>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <img src={post.image_url} alt="Title "/>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </>
  );
};

export default Blog;
