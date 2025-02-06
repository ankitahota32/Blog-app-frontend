import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  imageUrl: string;
}

const Main: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-app-backend-d73u.onrender.com/signup/posts`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const truncateTitle = (title: string, length: number) =>
    title.length > length ? title.substring(0, length) + "..." : title;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <nav className="bg-white shadow-md p-4 mb-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-800">TrueYou</span>
        <div className="space-x-4">
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

      <main className="container mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
              >
                <h2 className="text-2xl font-bold mb-2">
                  {truncateTitle(post.title, 30)}
                </h2>
                <p className="text-sm mb-4">by {post.author}</p>
                <Link
                  to={`/post/${post._id}`}
                  className="block bg-white text-purple-800 px-4 py-2 rounded-full text-center font-semibold mt-4"
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
