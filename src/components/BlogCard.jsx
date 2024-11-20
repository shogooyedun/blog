// import React, { useEffect, useState } from "react";

// const BlogCard = () => {
//   const [blogs, setBlogs] = useState([]);

//   // Fetch blogs from API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         const data = await response.json();
//         // Map data to include random images
//         const blogsWithImages = data.slice(0, 3).map((blog) => ({
//           ...blog,
//           image: `https://picsum.photos/300/200?random=${blog.id}`,
//         }));
//         console.log(blogsWithImages);
//         setBlogs(blogsWithImages);
//       } catch (error) {
//         console.error("Failed to fetch blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//         {blogs.map((blog, index) => (
//           <div
//             key={blog.id}
//             className={`border rounded-lg overflow-hidden shadow-lg bg-white ${
//               index > 0 ? "hidden lg:block" : "" // Hide all except the first on mobile
//             }`}
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//               <p className="text-gray-600 mb-4">{blog.body.slice(0, 100)}...</p>
//               <a
//                 href={`https://example.com/posts/${blog.id}`}
//                 className="text-blue-500 hover:underline font-medium"
//               >
//                 Read More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

// using swr
// first install swr

import React from "react";
import useSWR from "swr";

// Fetching function
const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogCard = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Error loading blogs...</div>;
  if (!data) return <div>Loading...</div>;

  const blogsWithImages = data.slice(0, 3).map((blog) => ({
    ...blog,
    image: `https://picsum.photos/300/200?random=${blog.id}`,
  }));

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {blogsWithImages.map((blog, index) => (
          <div
            key={blog.id}
            className={`border rounded-lg overflow-hidden shadow-lg bg-white ${
              index > 0 ? "hidden lg:block" : "" 
              // Hide all except the first on mobile
            }`}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.body.slice(0, 100)}...</p>
              <a
                href={`https://example.com/posts/${blog.id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
