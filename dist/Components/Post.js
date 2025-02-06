var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Post = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    console.log(userId);
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        setLoading(true);
        try {
            yield axios.post(`${process.env.REACT_APP_API_URL}/posts`, {
                title,
                content,
                author,
                userId,
            });
            navigate("/main"); // Redirect to the main page after successful post creation
        }
        catch (error) {
            console.error("Error creating post:", error);
        }
        finally {
            setLoading(false);
        }
    });
    return (React.createElement("div", { className: "min-h-screen bg-gray-100 flex items-center justify-center" },
        React.createElement("div", { className: "bg-white p-8 rounded-lg shadow-lg w-full max-w-lg" },
            React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Create New Post"),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { htmlFor: "title", className: "block text-gray-700 font-medium mb-2" }, "Title"),
                    React.createElement("input", { type: "text", id: "title", className: "w-full p-2 border border-gray-300 rounded-lg", value: title, onChange: (e) => setTitle(e.target.value), required: true })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { htmlFor: "content", className: "block text-gray-700 font-medium mb-2" }, "Content"),
                    React.createElement("textarea", { id: "content", rows: 6, className: "w-full p-2 border border-gray-300 rounded-lg", value: content, onChange: (e) => setContent(e.target.value), required: true })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { htmlFor: "author", className: "block text-gray-700 font-medium mb-2" }, "Author"),
                    React.createElement("input", { type: "text", id: "author", className: "w-full p-2 border border-gray-300 rounded-lg", value: author, onChange: (e) => setAuthor(e.target.value), required: true })),
                React.createElement("button", { type: "submit", className: `w-full p-2 bg-blue-500 text-white rounded-lg ${loading ? "opacity-50" : "hover:bg-blue-600"}`, disabled: loading }, loading ? "Submitting..." : "Create Post")))));
};
export default Post;
//# sourceMappingURL=Post.js.map