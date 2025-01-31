import supabase from "@/utils/supabase";
import BlogPageComponent from "@/components/blog/BlogPage";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post, error } = await supabase
    .from("posts")
    .select("title, description")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    console.error("Error fetching metadata:", error?.message);
    return { title: "Post Not Found" }; 
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      images: [
        {
          url: "https://kyle-huang.vercel.app/images/OpenGraphImage.png",
          width: 1200,
          height: 630,
          alt: `${post.title} Cover Image`,
        }
      ]
    }
  };
}

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { data: post, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
  if (error || !post) {
    console.error("Error fetching post:", error?.message);
    return <div className="text-center mt-32">Post not found.</div>;
  }
  await supabase.from("posts").update({ views: post.views + 1 }).eq("slug", slug);
  return <BlogPageComponent post={post} />;
};

export default BlogPage;
