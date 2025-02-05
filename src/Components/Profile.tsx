import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  createdAt: string;
}

interface ProfileProps {
  userId: string;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");

  useEffect(() => {
    console.log("Fetching posts for userId:", userId);
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/posts/user/${userId}`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };

    fetchUserPosts();
  }, [userId]);

  const editPost = (post: Post) => {
    setEditingPostId(post._id);
    setEditedTitle(post.title);
  };

  const handleSave = async (id: string) => {
    try {
      await axios.put(`http://localhost:8000/posts/${id}`, {
        title: editedTitle,
      });
      setPosts(
        posts.map((post) =>
          post._id === id ? { ...post, title: editedTitle } : post
        )
      );
      setEditingPostId(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Blog Posts</h1>
        </div>

        {/* Posts Section */}
        <div className="mt-6">
          <div className="mt-4">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-gray-50 mb-4"
                >
                  {editingPostId === post._id ? (
                    <input
                      type="text"
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      className="border px-2 py-1 rounded w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <h3 className="text-lg font-bold text-gray-800">
                      {post.title}
                    </h3>
                  )}
                  <p className="text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <div className="flex gap-3">
                    {editingPostId === post._id ? (
                      <button
                        onClick={() => handleSave(post._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => editPost(post)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => deletePost(post._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
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
    </div>
  );
};

export default Profile;
