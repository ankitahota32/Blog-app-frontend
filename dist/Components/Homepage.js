import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Used for navigation
import { Fade } from "react-awesome-reveal"; // Used for text animation
import { FaBook, FaUsers, FaPen, FaSignInAlt, FaBars, FaTimes, } from "react-icons/fa"; // React icons
const Homepage = ({ src, alt }) => {
    // React functional component
    const [isMenuOpen, setIsMenuOpen] = useState(false); // This is for responsive menu bar or nav bar.
    const navigate = useNavigate(); // Is used to navigate to another page
    return (React.createElement("div", { className: "min-h-screen bg-black bg-opacity-80" },
        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center", style: {
                backgroundImage: `url(${"https://media1.giphy.com/media/GiXBNzilzkHH1GY7Vc/200w.gif?cid=6c09b9520x4bs617477w9v7zi2xd0l1xc31lz3ibkec77s9c&ep=v1_gifs_search&rid=200w.gif&ct=g"})`,
                opacity: 0.8, // gif background
            }, "aria-label": alt, role: "img" }),
        React.createElement("div", { className: "relative z-10" },
            React.createElement("header", { className: "bg-white bg-opacity-60" },
                React.createElement("nav", { className: "container mx-auto flex items-center justify-between py-4 px-6" },
                    React.createElement("h1", { className: "text-2xl font-bold text-zinc-600" }, "TrueYou"),
                    React.createElement("div", { className: "md:hidden" },
                        React.createElement("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "text-gray-700 focus:outline-none" }, isMenuOpen ? React.createElement(FaTimes, { size: 24 }) : React.createElement(FaBars, { size: 24 }))),
                    React.createElement("ul", { className: `absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-8 text-zinc-900 transition-transform duration-300 ease-in-out ${isMenuOpen
                            ? "transform translate-x-0"
                            : "transform -translate-x-full md:translate-x-0"}` },
                        React.createElement("li", { className: "border-b md:border-none" },
                            React.createElement("a", { href: "/", className: "flex items-center py-2 px-4 hover:bg-red-200 transition duration-300" },
                                React.createElement(FaBook, { className: "mr-2" }),
                                " Our Story")),
                        React.createElement("li", { className: "border-b md:border-none" },
                            React.createElement("a", { href: "/", className: "flex items-center py-2 px-4 hover:bg-red-200 transition duration-300" },
                                React.createElement(FaUsers, { className: "mr-2" }),
                                " Membership")),
                        React.createElement("li", { className: "border-b md:border-none" },
                            React.createElement("button", { onClick: () => navigate("/signup"), className: "flex items-center py-2 px-4 hover:bg-red-200 transition duration-300" },
                                React.createElement(FaPen, { className: "mr-2" }),
                                " Write")),
                        React.createElement("li", { className: "border-b md:border-none" },
                            React.createElement("button", { onClick: () => navigate("/login"), className: "flex items-center py-2 px-4 hover:bg-red-200 transition duration-300" },
                                React.createElement(FaSignInAlt, { className: "mr-2" }),
                                " Sign in"))),
                    React.createElement("button", { onClick: () => navigate("/signup"), className: "hidden md:block bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition duration-300" }, "Get Started"))),
            React.createElement("section", { className: "container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6" },
                React.createElement("div", { className: "md:w-1/2 flex justify-center md:justify-start" },
                    React.createElement("img", { src: "\u2014Pngtree\u2014video blogger making video for_7256710.png", alt: "bg-png", className: "w-3/4 md:w-full" })),
                React.createElement(Fade, { triggerOnce: true, direction: "up" },
                    React.createElement("div", { className: "md:w-1/2 text-center md:text-left space-y-5 md:ml-8" },
                        React.createElement("h1", { className: "text-4xl font-bold text-white" }, "Welcome to TrueYou!"),
                        React.createElement("p", { className: "text-white text-lg leading-relaxed" }, "Your journey towards personalized experience starts here. This is your place to bring your ideas to the world."),
                        React.createElement("button", { onClick: () => navigate("/login"), className: "bg-zinc-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-400 transition duration-300" }, "Start Reading")))))));
};
export default Homepage;
//# sourceMappingURL=Homepage.js.map