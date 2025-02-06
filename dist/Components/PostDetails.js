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
import { useParams } from "react-router-dom";
import axios from "axios";
const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPost = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`${process.env.REACT_APP_API_URL}/${id}`);
                setPost(response.data);
            }
            catch (err) {
                setError("Error fetching the post. Please try again later.");
            }
            finally {
                setLoading(false);
            }
        });
        fetchPost();
    }, [id]);
    if (loading) {
        return React.createElement("p", { className: "text-center text-gray-500" }, "Loading post...");
    }
    if (error) {
        return React.createElement("p", { className: "text-center text-red-500" }, error);
    }
    if (!post) {
        return React.createElement("p", { className: "text-center text-gray-500" }, "Post not found.");
    }
    return (React.createElement("div", { className: "min-h-screen bg-gray-100 py-12 px-4" },
        React.createElement("div", { className: "container mx-auto max-w-screen-lg" },
            React.createElement("div", { className: "text-center mb-8" },
                React.createElement("h1", { className: "text-5xl font-bold text-gray-900 leading-tight break-words" }, post.title),
                React.createElement("p", { className: "text-gray-600 mt-2 text-lg" },
                    "by ",
                    post.author),
                React.createElement("p", { className: "text-sm text-gray-500" }, new Date(post.createdAt).toLocaleDateString())),
            React.createElement("div", { className: "text-lg leading-relaxed text-start text-gray-800 whitespace-pre-wrap" }, post.content),
            React.createElement("div", { className: "mt-10 text-sm text-gray-500 flex justify-between" },
                React.createElement("span", null,
                    "Published on: ",
                    new Date(post.createdAt).toLocaleDateString()),
                React.createElement("span", null,
                    "Author: ",
                    post.author)))));
};
export default PostDetail;
//# sourceMappingURL=PostDetails.js.map