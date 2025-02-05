import React, { useEffect, useState } from "react";
import axios from "axios"; // Js library used for making HTTP requests from a web browser
import { Link } from "react-router-dom"; // Link to another page

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl: string;
} // Basically the structure of the object that have specific properties

const Main: React.FC = () => {
  // React functional component
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncateContent = (content: string, length: number) =>
    content.length > length ? content.substring(0, length) + "..." : content;

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <nav className="bg-white shadow-md p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">TrueYou</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-gray-800">
            My Blogs
          </Link>
          <button className="bg-purple-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300">
            Contact Us
          </button>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">by {post.author}</p>
                <p className="mt-2 text-gray-800">
                  {truncateContent(post.content, 100)}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
                <Link
                  to={`/post/${post._id}`}
                  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-500 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </main>
      <Link
        to="/post"
        className="fixed bottom-4 right-4 bg-purple-800 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition"
      >
        + Create Post
      </Link>
    </div>
  );
};

export default Main;
