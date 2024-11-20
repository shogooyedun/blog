import React from "react";
import blog from "../assets/blog.png";
const BlogPostCard = ({ title, excerpt, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;
