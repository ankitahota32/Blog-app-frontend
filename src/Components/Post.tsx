import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Post: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  console.log(userId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `https://blog-app-backend-d73u.onrender.com/signup/posts`,
        {
          title,
          content,
          author,
          userId,
        }
      );
      navigate("/main"); // Redirect to the main page after successful post creation
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              rows={6}
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-medium mb-2"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full p-2 bg-blue-500 text-white rounded-lg ${
              loading ? "opacity-50" : "hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Create Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
