import supabase from '@/utils/supabase';

const getPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*');

  if (error) {
    console.error("Error fetching posts:", error.message);
    return;
  }

  console.log("Fetched posts:", data);
};

getPosts();

const Blog = () => {
  return(
    <>
      <h1>My Blog</h1>
    </>
  );
}

export default Blog;
