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
import { Link } from "react-router-dom";
const Main = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`${process.env.REACT_APP_API_URL}/posts`);
                setPosts(response.data);
            }
            catch (error) {
                console.error("Error fetching posts:", error);
            }
            finally {
                setLoading(false);
            }
        });
        fetchPosts();
    }, []);
    const truncateTitle = (title, length) => title.length > length ? title.substring(0, length) + "..." : title;
    return (React.createElement("div", { className: "min-h-screen bg-gray-100 py-10 px-4" },
        React.createElement("nav", { className: "bg-white shadow-md p-4 mb-6 flex items-center justify-between" },
            React.createElement("span", { className: "text-2xl font-bold text-gray-800" }, "TrueYou"),
            React.createElement("div", { className: "space-x-4" },
                React.createElement(Link, { to: "/about", className: "text-gray-600 hover:text-gray-800" }, "About"),
                React.createElement(Link, { to: "/profile", className: "text-gray-600 hover:text-gray-800" }, "My Blogs"),
                React.createElement("button", { className: "bg-purple-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300" }, "Contact Us"))),
        React.createElement("main", { className: "container mx-auto" }, loading ? (React.createElement("p", { className: "text-center text-gray-500" }, "Loading posts...")) : posts.length > 0 ? (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, posts.map((post) => (React.createElement("div", { key: post._id, className: "bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white p-6 rounded-lg shadow-xl transform transition duration-500 hover:scale-105" },
            React.createElement("h2", { className: "text-2xl font-bold mb-2" }, truncateTitle(post.title, 30)),
            React.createElement("p", { className: "text-sm mb-4" },
                "by ",
                post.author),
            React.createElement(Link, { to: `/post/${post._id}`, className: "block bg-white text-purple-800 px-4 py-2 rounded-full text-center font-semibold mt-4" }, "Read More")))))) : (React.createElement("p", { className: "text-center text-gray-500" }, "No posts available."))),
        React.createElement(Link, { to: "/post", className: "fixed bottom-4 right-4 bg-purple-800 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition" }, "+ Create Post")));
};
export default Main;
//# sourceMappingURL=Main.js.map