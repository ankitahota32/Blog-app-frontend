import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

interface ProfileProps {
  userId: string;
}

const Profile: React.FC<ProfileProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `https://blog-app-backend-d73u.onrender.com/posts/user/${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };
    fetchUserPosts();
  }, [userId]);

  const toggleViewPost = (postId: string) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };

  const editPost = (post: Post) => {
    setEditingPostId(post._id);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  const handleSave = async (id: string) => {
    try {
      await axios.put(`https://blog-app-backend-d73u.onrender.com/${id}`, {
        title: editedTitle,
        content: editedContent,
      });
      setPosts(
        posts.map((post) =>
          post._id === id
            ? { ...post, title: editedTitle, content: editedContent }
            : post
        )
      );
      setEditingPostId(null);
      setExpandedPostId(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`https://blog-app-backend-d73u.onrender.com/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex justify-center">
      <div className="w-full min-h-screen max-w-5xl bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            My Blog Posts
          </h1>
          <p className="text-gray-500 mt-2">
            Manage your posts, update them or create new ones
          </p>
        </div>

        <div className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {post.title}
                    </h3>
                    <span className="block mt-2 text-sm text-gray-500">
                      by {post.author},{" "}
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex space-x-4">
                    {editingPostId === post._id ? (
                      <button
                        onClick={() => handleSave(post._id)}
                        className="bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 flex items-center"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => editPost(post)}
                        className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-blue-500 flex items-center"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deletePost(post._id)}
                      className="bg-rose-800 text-white px-4 py-2 rounded-lg hover:bg-red-500 flex items-center"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => toggleViewPost(post._id)}
                      className="bg-violet-800 text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center"
                    >
                      {expandedPostId === post._id ? "Hide" : "View"}
                    </button>
                  </div>
                </div>

                {/* Expanded content or editing mode */}
                {expandedPostId === post._id || editingPostId === post._id ? (
                  <div className="mt-4">
                    {editingPostId === post._id ? (
                      <div>
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="text-2xl font-bold text-gray-900 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 w-full mb-2"
                        />
                        <textarea
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="w-full border-b-2  border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300"
                          rows={5}
                        />
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-700 mt-2 text-start whitespace-pre-wrap">
                          {post.content}
                        </p>
                      </>
                    )}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">
              You haven't written any posts yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
