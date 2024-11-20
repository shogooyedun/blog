import React from "react";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Responsive Blog Post Cards</h1>
      </header>
      <main>
      <BlogCard/>
      </main>
    </div>
  );
}

export default App;
