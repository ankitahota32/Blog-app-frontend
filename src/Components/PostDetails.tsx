import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        setError("Error fetching the post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading post...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!post) {
    return <p className="text-center text-gray-500">Post not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-gray-600 mt-2">by {post.author}</p>
        <p className="text-sm text-gray-400 mt-1">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div className="mt-4 text-gray-800">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
