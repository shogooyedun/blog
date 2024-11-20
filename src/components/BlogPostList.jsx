import React from "react";
import BlogPostCard from "./BlogPostCard";

const BlogPostList = () => {
 const blogPosts = [
   {
     id: 1,
     title: "The Beauty of Nature",
     excerpt: "Discover the wonders of the natural world in this blog post.",
     image:
       "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
   },
   {
     id: 2,
     title: "Tips for Healthy Living",
     excerpt: "Learn practical tips for maintaining a healthy lifestyle.",
     image:
       "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHww",
   },
   {
     id: 3,
     title: "Travel on a Budget",
     excerpt: "Explore the world without breaking the bank.",
     image:
       "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
   },
 ];


  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostList;
