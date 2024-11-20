import React from "react";
import BlogPostList from "./components/BlogPostList";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Responsive Blog Post Cards</h1>
      </header>
      <main>
        <BlogPostList />
      </main>
    </div>
  );
}

export default App;
