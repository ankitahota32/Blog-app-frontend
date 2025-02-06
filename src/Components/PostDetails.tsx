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
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/${id}`
        );
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
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight break-words">
            {post.title}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">by {post.author}</p>
          <p className="text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>

        <div className="text-lg leading-relaxed text-start text-gray-800 whitespace-pre-wrap">
          {post.content}
        </div>

        <div className="mt-10 text-sm text-gray-500 flex justify-between">
          <span>
            Published on: {new Date(post.createdAt).toLocaleDateString()}
          </span>
          <span>Author: {post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
