var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import axios from "axios";
const Profile = () => {
    const [posts, setPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const userId = localStorage.getItem("userId");
    useEffect(() => {
        const fetchUserPosts = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`${process.env.REACT_APP_API_URL}/${userId}`);
                setPosts(response.data);
            }
            catch (error) {
                console.error("Error fetching user posts:", error);
            }
        });
        fetchUserPosts();
    }, [userId]);
    const toggleViewPost = (postId) => {
        setExpandedPostId(expandedPostId === postId ? null : postId);
    };
    const editPost = (post) => {
        setEditingPostId(post._id);
        setEditedTitle(post.title);
        setEditedContent(post.content);
    };
    const handleSave = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
                title: editedTitle,
                content: editedContent,
            });
            setPosts(posts.map((post) => post._id === id
                ? Object.assign(Object.assign({}, post), { title: editedTitle, content: editedContent }) : post));
            setEditingPostId(null);
            setExpandedPostId(null);
        }
        catch (error) {
            console.error("Error updating post:", error);
        }
    });
    const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
            setPosts(posts.filter((post) => post._id !== id));
        }
        catch (error) {
            console.error("Error deleting post:", error);
        }
    });
    return (React.createElement("div", { className: "min-h-screen bg-gray-50 py-16 px-6 flex justify-center" },
        React.createElement("div", { className: "w-full min-h-screen max-w-5xl bg-white p-8 rounded-xl shadow-lg" },
            React.createElement("div", { className: "text-center mb-12" },
                React.createElement("h1", { className: "text-4xl font-bold text-gray-900 tracking-tight" }, "My Blog Posts"),
                React.createElement("p", { className: "text-gray-500 mt-2" }, "Manage your posts, update them or create new ones")),
            React.createElement("div", { className: "space-y-6" }, posts.length > 0 ? (posts.map((post) => (React.createElement("div", { key: post._id, className: "p-6 bg-gray-100 rounded-lg shadow-md flex flex-col space-y-4" },
                React.createElement("div", { className: "flex justify-between items-start" },
                    React.createElement("div", null,
                        React.createElement("h3", { className: "text-2xl font-bold text-gray-900" }, post.title),
                        React.createElement("span", { className: "block mt-2 text-sm text-gray-500" },
                            "by ",
                            post.author,
                            ",",
                            " ",
                            new Date(post.createdAt).toLocaleDateString())),
                    React.createElement("div", { className: "flex space-x-4" },
                        editingPostId === post._id ? (React.createElement("button", { onClick: () => handleSave(post._id), className: "bg-teal-900 text-white px-4 py-2 rounded-lg hover:bg-emerald-500 flex items-center" }, "Save")) : (React.createElement("button", { onClick: () => editPost(post), className: "bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-blue-500 flex items-center" }, "Edit")),
                        React.createElement("button", { onClick: () => deletePost(post._id), className: "bg-rose-800 text-white px-4 py-2 rounded-lg hover:bg-red-500 flex items-center" }, "Delete"),
                        React.createElement("button", { onClick: () => toggleViewPost(post._id), className: "bg-violet-800 text-white px-4 py-2 rounded-lg hover:bg-purple-500 flex items-center" }, expandedPostId === post._id ? "Hide" : "View"))),
                expandedPostId === post._id || editingPostId === post._id ? (React.createElement("div", { className: "mt-4" }, editingPostId === post._id ? (React.createElement("div", null,
                    React.createElement("input", { type: "text", value: editedTitle, onChange: (e) => setEditedTitle(e.target.value), className: "text-2xl font-bold text-gray-900 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 w-full mb-2" }),
                    React.createElement("textarea", { value: editedContent, onChange: (e) => setEditedContent(e.target.value), className: "w-full border-b-2  border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300", rows: 5 }))) : (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "text-gray-700 mt-2 text-start whitespace-pre-wrap" }, post.content))))) : null)))) : (React.createElement("p", { className: "text-gray-600 text-center" }, "You haven't written any posts yet."))))));
};
export default Profile;
//# sourceMappingURL=Profile.js.map